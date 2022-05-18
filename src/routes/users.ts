import express from "express";
import bcrypt from "bcryptjs";
import { User } from "../entities/user";
import { Post } from "../entities/post";
const router = express.Router();


//create user

router.post("/signUp", async (req, res) => {
  try {
    const { email, password, firstName, lastName, avatarUrl } = req.body;
    console.log({ email, password, firstName, lastName, avatarUrl });
    const userExists = await User.findOne({ where: [{ email }] });
    if (userExists) {
      return res.status(400).json({
        message: "User already exists",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    console.log(hashedPassword);
    const user = User.create({
      firstName,
      lastName,
      email,
      avatarUrl,
      password: hashedPassword,
    });
    await user.save();
    res.status(200).json({ message: "user created successfully", user });
  } catch (error) {
    res.status(500).json({ error });
  }
});


//Get post for user
router.get("/posts", async (req, res) => {
  try {
    const { userId } = req.body;
    const user = await User.findOne({ where: [{ id: +userId }] });
    if (!user) {
      return res.status(400).json({
        message: "User does not exist",
      });
    }
    const posts = await Post.find({
      where: { user:{id: +userId} },
      relations: {
        comments: { user: true },
        votes: { user: true },
        tags: true,
      },
    });
    if (posts.length == 0) {
      return res.status(400).json({ msg: "This user has no posts yet" });
    }
    return res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error });
  }
});

export { router as UserRouter };


