import mongoose, { ConnectOptions } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define the MongoDB URI in the .env file");
}

const mongooseOptions: ConnectOptions = {
  bufferCommands: false,
};

async function connectDB() {
  try {
    await mongoose.connect(MONGODB_URI as string, mongooseOptions);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1);
  }
}

export default connectDB;
