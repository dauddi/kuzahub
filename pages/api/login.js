import connect from "../../utils/database";
import User from "../../models/user";
import md5 from "md5";

connect();

const handler = async (req, res) => {
	const { username: user_name, password } = JSON.parse(req.body);

	switch (req.method) {
		case "POST": {
			User.findOne({ username: user_name }, (err, foundUser) => {
				if (!foundUser || foundUser.password !== md5(password)) {
					return res.status(401).send({ error: "Invalid username/password" });
				} else {
					return res.redirect(307, "../ap/services");
				}
			});
			break;
		}
		default:
			return res.status(400).send({ error: "Invalid request" });
	}
};

export default handler;
