import mongoose from "mongoose";

export const connection = {};

const connect = async () => {
  if (connection.isConnected) {
    console.log("Database is Connected!!");
    return;
  }

  const db = await mongoose.connect(process.env.DATABASE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  connection.isConnected = db.connections[0].readyState;
};

export default connect;
