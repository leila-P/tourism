import express from 'express';
import mongoose from 'mongoose';
import fs from 'fs'

async function tourismData() {
  try {
    const data = await fs.readFile('./tourismResponse.json', { encoding: 'utf8' });
    // console.log(data);
  } catch (err) {
    console.log(err);
  }
}
import TourismModel from '../models/tourismModel.js';


const router = express.Router();

export const getTourisms = async (req, res) => {
    
    
    // try {
    //     // const LIMIT = 8;        
    
    //     // const total = await TourismModel.countDocuments({});
    //     // const tourism = await TourismModel.find().sort({ _id: -1 }).limit(LIMIT).skip(0);

    //     tourismInfo =await tourismData();
    //     console.log("ok");
    //     res.json({ data: tourismInfo});
    // } catch (error) {   
    //     console.log(error);
    //     res.status(404).json({ message: error.message });
    // }

    try {
        const data = fs.readFileSync('./tourismResponse.json', 'utf8');
        res.json({ data: data});
      } catch (err) {
        console.log(err);
        res.status(404).json({ message: err.message });
      }
}


export default router;