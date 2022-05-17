import express from 'express';
import {Banker} from '../entities/banker';
const router=express.Router();



router.post('/api/banker', async (req, res) => {
    const { firstName, lastName, email, employeeNumber } = req.body;

    const banker = Banker.create({
      firstName,
      lastName,
      email,
      employeeNumber,
    });

    await banker.save();
    return res.json(banker);




})

export {
    router as createBankerRouter
}