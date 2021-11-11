import connect from "../../utils/database";
import User from "../../models/user";
import md5 from "md5";

connect();

const addUserToDB = async (userObject, User) => {
	userObject = JSON.parse(userObject);
	const newUser = new User({
		firstname: userObject.firstname,
		lastname: userObject.lastname,
		email: userObject.username,
		username: userObject.username,
		password: md5(userObject.password),
	});

	await newUser.save((err) => {
		if (err) {
			console.log("Update Failed!!");
		} else {
			console.log("New User added Successfully");
		}
	});
};

const handler = async (req, res) => {
	switch (req.method) {
		case "POST": {
			await addUserToDB(req.body, User);
			res.send("/pages/ap/services.jsx");
			break;
		}
		default:
			res.send("Invalid Request!!");
	}
};

export default handler;
