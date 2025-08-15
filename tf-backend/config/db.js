import mongoose from "mongoose";
const MONGODB_URI='mongodb+srv://racoctanveen15:taskflow25@cluster0.babwfip.mongodb.net/TaskFlow';

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB connected successfully: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
        process.exit(1); // Exit process with failure
    }
};