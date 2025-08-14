import mongoose from "mongoose";


export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://racoctanveen15:taskflow25@cluster0.babwfip.mongodb.net/TaskFlow').then(()=> console.log("MongoDB connected successfully"))
}
