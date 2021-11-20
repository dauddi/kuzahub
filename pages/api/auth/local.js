import User from "../../../models/user";

const handler = async (req, res) => {
  const userObject = JSON.parse(req.body);

  switch (req.method) {
    case "POST": {
      await User.findOne({ email: userObject.username }, (err, foundUser) => {
        if (err) return res.status(401).send({ message: "User not found" });
        else {
          if (foundUser && foundUser.password === userObject.password)
            return res.status(200).send(foundUser);
        }
      });
    }
  }
};

export default handler;
