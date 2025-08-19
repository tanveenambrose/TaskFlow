import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { connectDB } from './config/db.js';
import userRouter from './routes/userRoute.js';
import taskRouter from './routes/taskRoute.js';

const app = express();
const port = process.env.PORT || 4000;

//Middleware to parse JSON
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//DB connection
connectDB().then(() => {
    // Only start server if DB connection is successful
    app.listen(port, () => {
        console.log(`Server is running on port http://localhost:${port}`);
    });
}).catch(err => {
    console.error('Failed to start server due to DB connection error:', err);
});

//Routes
app.use('/api/user', userRouter);
app.use('/api/tasks', taskRouter);

app.get('/', (req, res) => {
    res.send('Api is running');
});
