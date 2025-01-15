import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.route.js";
import dotenv from "dotenv"; // To hide MongoDB connection link. It is in the .env file
dotenv.config();

const app = express();

mongoose //Connection to DB which is hidden
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("Server is Running on Port 3000");
});

app.use("/api/user", userRouter);
