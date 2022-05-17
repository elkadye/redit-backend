import express from "express";
import { User } from "../entities/user";
import { Post } from "../entities/post";
import { Comment } from "../entities/comment";
const router = express.Router();

router.post("/comment/:user_id/:post_id", async (req, res) => {
  try {
    const { user_id, post_id } = req.params;
    const user = await User.findOneBy({ id: +user_id });
    const post = await Post.findOneBy({ id: +post_id });
    if (!user) {
      return res.status(404).json({ msg: "user doesn't exist" });
    }

    if (!post) {
      return res.status(404).json({ msg: "post doesn't exist" });
    }

    const { body } = req.body;
    const comment = Comment.create({
      body,
      user,
      post,
    });
    
    console.log({ comment });


    await comment.save();

    return res.json({ comment });
  } catch {
    return res.status(404);
  }
});

export { router as createCommentRouter };
