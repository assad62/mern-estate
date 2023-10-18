import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const dbConnection = async () => {
  try {
    mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
    });
  } catch (error) {
    console.log("error is ", error);
    throw new Error(error);
  }
};

