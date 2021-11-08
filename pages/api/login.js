import connect from "../../lib/database";
import User from "../../lib/models/user";

connect();

const handler = async (req, res) => {
	const { username: un, password } = req.body;

	const user = await User.find({ username: un });

	switch (req.method) {
		case "POST": {
			//demo auth for development
			if (user.length !== 0) {
				res.send(`Welcome Back ${un}`);
			} else {
				res.send(`User ${un} does not exist`);
			}
		}
		default:
			res.send("Invalid Request!!");
	}
};

export default handler;
