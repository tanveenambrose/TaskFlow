import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import {connectDB} from './config/db.js';


const app = express();
const PORT = process.env.PORT || 4000;

//Middleware to parse JSON
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//DB connection
connectDB();

//Routes
app.get('/', (req, res) => {
    res.send('Api is running');
});