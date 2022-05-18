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

//get all posts

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find({
      relations: {
        user: true,
        // comments: { user:{id:true} },
        comments: { user:true },
        votes: { user: true },
        tags: true
      },
    });
    if (!posts) {
      return res.status(404).json({ msg: "post doesn't exist" });
    }

    return res.json(posts);
  } catch {
    return res.status(404).json({ msg: "something went wrong"});
  }
});

//get post by id
router.get("/:postId", async (req, res) => {
  try {
      const {postId} = req.params
    const posts = await Post.find({
      where: { id: +postId },
      relations: {
        user: true,
        comments: { user: true },
        votes: { user: true },
        tags: true,
      },
    });
    if (!posts) {
      return res.status(404).json({ msg: "post doesn't exist" });
    }

    return res.json(posts);
  } catch {
    return res.status(404);
  }
});

//delete post
//Get post for user

export { router as PostRouter };




