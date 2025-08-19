import express from 'express';
import { registerUser, loginUser, getCurrentUser, updateProfile, updatePassword } from '../controllers/userController.js';
import authMiddleware from '../middleware/auth.js';

const userRouter = express.Router();

// Public route to get user information
userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);

//Private route to get user information
userRouter.get('/me', authMiddleware , getCurrentUser);
userRouter.put('/profile',authMiddleware , updateProfile);
userRouter.put('/password', authMiddleware , updatePassword);

export default userRouter;
