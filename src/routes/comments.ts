import express from "express";
import { User } from "../entities/user";
import { Post } from "../entities/post";
import { Comment } from "../entities/comment";
const router = express.Router();


//create comment
router.post("/new", async (req, res) => {
  try {
    const { user_id, post_id, body } = req.body;
    const user = await User.findOneBy({ id: +user_id });
     if (!user) {
       return res.status(400).json({ msg: "user doesn't exist" });
     }
    const post = await Post.findOneBy({ id: +post_id });
    if (!post) {
      return res.status(400).json({ msg: "post doesn't exist" });
    }
    const comment = Comment.create({
      body,
      user,
      post,
    });

    await comment.save();
    const commentOnly= await Comment.findOneBy({id: comment.id})
    const updatedPost = await Post.find({
      where: { id: post.id },
      relations: {
        comments: true,
      },
    });

    return res
      .status(200)
      .json({
        msg: "comment added to post successfully",
        commentOnly,
        updatedPost,
      });
  } catch {
    return res.status(404);
  }
});

//get comments for post

router.get("/post/:postId", async (req, res) => {
  try {
    const { postId } = req.params;
    // const post = await Post.find({
    //   where: { user: { id: +postId } },
    //   relations: {
    //     comments: { user: true },
    //   },
    // });
    // if (!post) {
    //   return res.status(400).json({
    //     message: "Post does not exist",
    //   });
    // }
    const comments = await Comment.find({
      where: { post: { id: +postId } },
    });

    if (!comments) {
      return res.status(400).json({ msg: "This post has no comments yet" });
    }
    return res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error });
  }
});


export { router as CommentRouter };


//delete comment
