import express from 'express';

import { getManager } from "typeorm";
import {Post} from '../entities/post';
import {User} from '../entities/user';


const router=express.Router();



router.get('/posts', async (req, res) => {
  try{
       // get a post repository to perform operations with post
    //    const postRepository = getManager().getRepository(Post);

       // load a post by a given post id
       const posts = await Post.find(
         {  relations:{
               user: true
           }}
       );

       // return loaded posts
       res.send(posts);
       return res.json(posts);
     }catch{
    return res.status(404);
  }

})





export {
    router as getAllPostsRouter
}