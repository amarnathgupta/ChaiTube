import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );

    console.log(
      `\nMongoDB connected... || DB_HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("Error connecting to the database: ", error);
    process.exit(1); //Typically used to indicate a general error or failure in the process.
  }
};

export default connectDB;
