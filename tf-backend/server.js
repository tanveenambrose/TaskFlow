import express from 'express';


const app = express();
const PORT = process.env.PORT || 4000;

//Middleware to parse JSON
app.use(express.json());