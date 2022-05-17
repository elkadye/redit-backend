import express from 'express';
import {Client} from '../entities/client';
const router=express.Router();



router.post('/api/client', async (req, res) => {
    const {
        firstName,
        lastName,
        email,
        cardNumber,
        balance
    }=req.body

    const client = Client.create({
      firstName,
      lastName,
      email,
      cardNumber,
      balance,
    });

    await client.save();
    return res.json(client);




})

export {
    router as createClientsRouter
}