import connect from "../../../utils/database";
import Post from "../../../models/post";

connect();

const handler = async (req, res) => {
  switch (req.method) {
    case "GET": {
      const posts = await Post.find().sort({ creationDate: -1 });

      res.status(200).json({ posts: posts });
    }
  }
};

export default handler;
