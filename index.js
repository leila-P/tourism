
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';


import tourismRouter from "./routes/navigatortourism.js";
const app = express();

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());


app.use("/tourism", tourismRouter);


const PORT = process.env.PORT|| 5000;

app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`))