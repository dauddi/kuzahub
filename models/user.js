const mongoose = require("mongoose");

//demo schema for dev
const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  email: {
    type: String,
  },
  username: {
    type: String,
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
  extras: [],
  bio: {
    type: String,
  },
  join_time: { type: Number },
  total_posts: { type: Number },
  posts: [{}],
  ratings: [{}],
});

//create a model for the collection

export default mongoose.models.User || mongoose.model("User", userSchema);
