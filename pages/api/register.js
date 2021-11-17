import connect from "../../utils/database";
import User from "../../models/user";
import { createUser } from "../../lib/user";

connect();

const handler = async (req, res) => {
  switch (req.method) {
    case "POST": {
      const userObject = JSON.parse(req.body);

      await createUser(userObject);
      // const newUser = new User({
      //   firstname: userObject.firstname,
      //   lastname: userObject.lastname,
      //   email: userObject.username,
      //   username: userObject.username,
      //   password: md5(userObject.password),
      // });

      // await newUser.save((err) => {
      //   if (err) {
      //     console.log("Update failed!!");
      //     return;
      //   } else console.log("New User added Successfully");
      // });
      return res.status(200).send({ msg: "User Created Successfully!!" });
    }
    default:
      res.status(400).send({ error: "Invalid Request!!" });
  }
};

export default handler;
