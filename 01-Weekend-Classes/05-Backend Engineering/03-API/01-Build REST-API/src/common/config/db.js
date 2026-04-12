import "dotenv/config";
import mongoose from "mongoose";

// Remmember about DB:
// 1. DB connection fails => try-catch use karo
// 2. DB are always in another continent => await karo 

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    
    // ⚠️ what is inside this conn
    console.log(`MongoDB connected: ${conn.connection.host}`);
    
}

export default connectDB;
