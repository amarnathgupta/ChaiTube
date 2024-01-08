// require("dotenv").config({ path: "./env" });

import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({ path: "./env" });

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      app.on("error", (error) => {
        console.log(
          `Application is not able to talk to database... || ERROR: ${error}`
        );
        throw error;
      });
      console.log(`Server is listening on port: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDb connection failed...", err);
  });

/*
import express from "express"

const app = express()

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
        console.log("Application is not able to talk to database");
        throw error
    })
    app.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT}`)
    })
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
})();
*/
