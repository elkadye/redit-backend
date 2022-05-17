import express from 'express';
import {Post} from '../entities/post';
import {User} from '../entities/user';


const router=express.Router();



router.post('/post/:user_id', async (req, res) => {
  try{
       const { user_id } = req.params;
       const user = await User.findOneBy({ id: +user_id });
       if (!user) {
         return res.status(404);
       }
       const { title, body } = req.body;
       const post = Post.create({
         title,
         body,
         user
       });

       await post.save();
       return res.json(post);
  }catch{
    return res.status(404);
  }

})





export {
    router as createPostRouter
}