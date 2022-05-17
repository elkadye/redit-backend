import express from 'express';
import {Post} from '../entities/post';


const router=express.Router();



router.get('/post/:post_id', async (req, res) => {
  try{
       const { post_id } = req.params;
       const post = await Post.find({
         where: { id: +post_id  },
         relations: { 
           user: true,
          comments:true
         },
       });
       if (!post) {
         return res.status(404).json({ msg: "post doesn't exist" });
       }
     
      return res.json(post);
      
    }catch{
    return res.status(404);
  }

})

export {
    router as get_Post_Router
}