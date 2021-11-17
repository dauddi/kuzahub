import passport from "passport";
import nextConnect from "next-connect";
import { localStrategy } from "../../lib/passport-local";
import { setLoginSession } from "../../lib/auth";
import connect from "../../utils/database";

connect();

const authenticate = (method, req, res) => {
  new Promise((resolve, reject) => {
    passport.authenticate(method, { session: false }, (error, token) => {
      if (error) {
        reject(error);
      } else {
        resolve(token);
      }
    })(req, res);
  });

  passport.use(localStrategy);

  export default nextConnect()
    .use(passport.initialize())
    .post(async (req, res) => {
      try {
        const user = await authenticate("local", req, res);
        // session is the payload to save in the token, it may contain basic info about the user
        const session = { ...user };

        await setLoginSession(res, session);

        res.status(200).send({ done: true });
      } catch (error) {
        console.error(error);
        res.status(401).send(error.message);
      }
    });
};

// import connect from "../../utils/database";
// import User from "../../models/user";
// import md5 from "md5";

// connect();

// const handler = async (req, res) => {
//   const { username: user_name, password } = JSON.parse(req.body);

//   switch (req.method) {
//     case "POST": {
//       User.findOne({ username: user_name }, (err, foundUser) => {
//         if (!foundUser || foundUser.password !== md5(password)) {
//           return res.status(401).send({ error: "Invalid username/password" });
//         } else {
//           return res.status(200).send({ success: "Auth success!!" });
//         }
//       });
//       break;
//     }
//     default:
//       return res.status(400).send({ error: "Invalid request" });
//   }
// };

// export default handler;
