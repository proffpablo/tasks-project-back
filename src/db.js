import mongoose from 'mongoose'
import * as dotenv from 'dotenv'

dotenv.config()

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log(">>> DB is connected");
    } catch(error) {
        console.log(error);
    }
};