const mongoose = require("mongoose");

//demo schema for dev
const postSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  desc: {
    type: String,
  },
  category: {
    type: String,
  },
  location: {
    type: String,
  },
  creationDate: { type: Number },
  owner: [],
  ratings: [{}],
});

//create a model for the collection

export default mongoose.models.Post || mongoose.model("Post", postSchema);
