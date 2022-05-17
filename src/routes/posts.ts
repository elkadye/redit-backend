import express from "express";
import bcrypt from "bcryptjs";
import { Post } from "../entities/post";
import { User } from "../entities/user";
const router = express.Router();

//create post

router.post("/new", async (req, res) => {
  try {
    const { user_id, title, body,imageUrl } = req.body;
    const user = await User.findOneBy({ id: +user_id });
    if (!user) {
      return res.status(500).json({ message:"User not found"});
    }
    const post = Post.create({
      title,
      body,
      imageUrl,
      user,
    });
    await post.save();
    return res.status(200).json({ message:"Post created successfully",post});
  } catch {
    return res.status(404);
  }
});

//Get post for user

export { router as PostRouter };


//get all posts
//get post by id
//delete post
