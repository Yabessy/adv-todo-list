import mongoose from "mongoose"
export default async function connMongoDB() {mongoose.connect(process.env.MONGO_URI!)}