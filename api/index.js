import express from "express";
import mongoose from "mongoose";
import testRouter from "./routes/test.route.js";
import authRouter from "./routes/auth.route.js";
import dotenv from "dotenv"; // To hide MongoDB connection link. It is in the .env file
import e from "express";
dotenv.config();

mongoose //Connection to DB which is hidden
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(express.json()); // To parse JSON data

app.listen(3000, () => {
  console.log("Server is Running on Port 3000");
});

app.use("/api/test", testRouter);
app.use("/api/auth", authRouter);
 
app.use((err, req, res, next) => { // Error handling Middleware
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message
  });
})
