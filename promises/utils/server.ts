import mongoose from "mongoose";

export const connectMongo = async () => {
 const uri = process.env.MONGODB_URI;
 if (!uri) {
   throw new Error("MONGODB_URI is not defined in the environment variables.");
 }
 await mongoose.connect(uri);
};
