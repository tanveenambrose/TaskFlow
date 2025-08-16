import mongoose from "mongoose";

// Corrected connection string with proper MongoDB Atlas format
const MONGODB_URI = 'mongodb+srv://racoctanveen15:taskflow25@cluster0.babwfip.mongodb.net/TaskFlow?retryWrites=true&w=majority';

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(MONGODB_URI, {
            maxPoolSize: 10,
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
            family: 4
        });
        console.log(`✅ MongoDB connected successfully: ${conn.connection.host}`);
        return conn;
    } catch (error) {
        console.error(`❌ MongoDB connection failed: ${error.message}`);
        console.error(`Full error: ${error}`);
        process.exit(1);
    }
};
