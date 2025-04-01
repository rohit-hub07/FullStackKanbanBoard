import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("MongoDb connected")
  } catch (error) {
    console.log("Database connection failed!");
    process.exit(1);
  }
};

export default dbConnection;
