import express from 'express';



import {User} from '../entities/user';


const router=express.Router();



router.get('/users', async (req, res) => {
  try{
       // get a post repository to perform operations with post
    //    const postRepository = getManager().getRepository(Post);

       // load a post by a given post id
       const users = await User.find();

       // return loaded posts
       res.send(users);
       return res.json(users);
     }catch{
    return res.status(404);
  }

})





export {
    router as get_users_Router
}