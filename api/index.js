import express from "express";
import mongoose from "mongoose";
import testRouter from "./routes/test.route.js";
import authRouter from "./routes/auth.route.js";
import cors from "cors"; // To allow CORS for the frontend URL
import dotenv from "dotenv"; // To hide MongoDB connection link. It is in the .env file
dotenv.config();

const app = express();
const PORT = 4000;

mongoose //Connection to DB which is hidden
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json()); // To parse JSON data
app.use(cors({ origin: process.env.FRONTEND_URL })); // Allow CORS for the frontend URL

app.listen(PORT, () => {
  console.log(`Server is Running on Port ${PORT}`);
});

app.use("/api/test", testRouter);
app.use("/api/auth", authRouter);

app.use((err, req, res, next) => {
  // Error handling Middleware
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
