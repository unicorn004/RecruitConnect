import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            ssl: true,  // Explicitly enabling SSL
        });
        console.log('MONGO_URI:', process.env.MONGO_URI); // Debugging log
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
};

export default connectDB;