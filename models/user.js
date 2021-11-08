const mongoose = require("mongoose");

//demo schema for dev
const userSchema = new mongoose.Schema({
	firstname: {
		type: String,
		maxlength: [30, "First name cannot exeed 30 characters"],
		trim: true,
		required: [true, "First Name is required"],
	},
	lastname: {
		type: String,
		maxlength: [30, "Last name cannot exeed 30 characters"],
		trim: true,
		required: [true, "Last Name is required"],
	},
	email: {
		type: String,
		trim: true,
	},
	username: {
		type: String,
		trim: true,
		required: [true, "Username is required"],
	},
	phone: {
		type: String,
	},
	location: {
		type: String,
	},
	role: {
		type: String,
	},
	password: {
		type: String,
	},
	bio: String,
	join_time: String,
	total_posts: Number,
	posts: [{}],
	ratings: [{}],
});

//create a model for the collection

export default mongoose.models.User || mongoose.model("User", userSchema);
