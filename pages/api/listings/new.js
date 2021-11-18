import connect from "../../../utils/database";
import Post from "../../../models/post";

connect();

const handler = async (req, res) => {
  switch (req.method) {
    case "POST": {
      const postObject = JSON.parse(req.body);

      const newPost = new Post({
        title: postObject.title,
        desc: postObject.desc,
        category: postObject.category,
        location: postObject.location,
        creationDate: Date.now(),
      });

      await newPost.save((err) => {
        if (err) {
          console.log("Post update failed");
          return;
        } else {
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
