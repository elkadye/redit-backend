import express from 'express';
import {User} from '../entities/user';
const router=express.Router();



router.post('/user', async (req, res) => {
    try{
        const { firstName, lastName, email } = req.body;

        const user = User.create({
          firstName,
          lastName,
          email,
        });

        await user.save();
        return res.json(user);
    }catch{
        return res.status(404);
    }




})

export {
    router as createUserRouter
}