import express from 'express';
import {Post} from '../entities/post';
import {User} from '../entities/user';


const router=express.Router();



router.get('/posts/:user_id', async (req, res) => {
  try{
       const { user_id } = req.params;
       const user = await User.findOneBy({ id: +user_id });
       if (!user) {
         return res.status(404);
       }
      //  const posts = await Post.find({ user {user_id : +user_id} });


  //  const posts = await Post.find({
  //   where: { user: { user_id: +user_id } },
  //   relations: { user: true },
  // });

    const user_posts = await Post.find({
      // select: {
      //   title: true,
      //   body: true,
      // },
      where: { user: { id: +user_id } },
      relations: { user: true },
    });

      // const posts= Post.find({ 
      //   relations: {
      //     user: true,
      //   },
      //   where: {
      //     user: {
      //       id: "{user_id}"
      //     },
      //   },
      // });
      return res.json(user_posts);
    }catch{
    return res.status(404);
  }

})

export {
    router as get_UserPosts_Router
}