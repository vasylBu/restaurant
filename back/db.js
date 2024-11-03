import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://gabaanvasya:GpIA3NlKY9xb8tTw@cluster0.eimh9.mongodb.net/sample_mflix?retryWrites=true&w=majority&appName=Cluster0");
    console.log("Successfully connected to MongoDB!");
  } catch (err) {
    console.error("Error connecting to MongoDB", err);
    process.exit(1);
  }
};

export default connectDB;