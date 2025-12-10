import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    console.log(`\n Mongo DB connected !! DB host: `);

  } catch (error) {
    console.log("ERROR: ", error)
    process.exit(1);
    
  }
}

export default connectDB