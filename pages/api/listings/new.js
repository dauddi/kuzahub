import connect from "../../../utils/database";
import Post from "../../../models/post";
import User from "../../../models/user";
import { getSession } from "next-auth/react";

connect();

const handler = async (req, res) => {
  switch (req.method) {
    case "POST": {
      const postObject = JSON.parse(req.body);
      const user = await User.findOne({ email: postObject.user.email });
      const date = Date.now();

      const newPost = new Post({
        title: postObject.title,
        desc: postObject.desc,
        category: postObject.category,
        location: postObject.location,
        creationDate: date,
        owner: user,
      });

      await newPost.save((err) => {
        if (err) {
          console.log("Post update failed");
          return;
        } else {
          User.updateOne(
            { email: user.email },
            { $addToSet: { posts: newPost.id } }
          );
          console.log("Post added successfully");
        }
      });
      return res.status(200).send({ msg: "Post Created Successfully!!" });
    }

    default: {
      res.status(400).send({ error: "Invalid Request!!" });
    }
  }
};

export default handler;
