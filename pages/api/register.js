import connect from "../../lib/database";
import User from "../../lib/models/user";

connect();

const addUserToDB = async (userObject, User) => {
	const newUser = new User({
		firstname: userObject.firstname,
		lastname: userObject.lastname,
		email: userObject.username,
		username: userObject.username,
		password: userObject.password,
	});

	try {
		await newUser.save();
	} catch (err) {
		console.log(err);
	}

	console.log("New User added Successfully");
};

const handler = async (req, res) => {
	switch (req.method) {
		case "POST": {
			const time = Date();

			await addUserToDB(req.body, User);

			res.send(
				`<h1>Welcome to the Farmly family, ${req.body.username}.</h1> <h4>Join time: ${time}</h4>`
			);
			break;
		}
		default:
			res.send("Invalid Request!!");
	}
};

export default handler;
