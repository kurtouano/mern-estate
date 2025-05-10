import User from "../models/user.model.js"; // Importing the User model from the user.model.js file
import bcrypt from "bcryptjs"; // Importing bcrypt to hash the password
import jwt from "jsonwebtoken"; // Importing jsonwebtoken to create a token
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 12); // Hash the password // The number is the number of rounds to hash the password (10-12 is recommended)
  const newUser = new User({ username, email, password: hashedPassword }); // User here is from the user.model.js
  
  try {
    await newUser.save(); // Send data to the DB (await so code will wait for it to finish before proceeding)
    res.status(200).json("User has been registered"); // Send a response to the user use JSON for better practice in RESTFUL API
    
  } catch (error) {
    next(error); // Send error to the error handling middleware
    // next(errorHandler(500, "Internal Server Error")); // This is another way to send a customized error message
  } 
  
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body; 
  
  try {
    const validUser = await User.findOne({ email }); // Find the user in the DB by email
    if (!validUser) return next(errorHandler(404, "User not found")); 
    const validPassword = bcrypt.compareSync(password, validUser.password); // Compare the password with the hashed password in the DB 
    if (!validPassword) return next(errorHandler(400, "Incorrect Password.")); // If the password is wrong, send an error message
    const { password: _, ...user } = validUser._doc; // Destructure the user object to remove the password field
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET); // Create a token with the user ID and secret key
    res
      .cookie("access_token", token, { httpOnly: true }) 
      .status(200)
      .json(user); // Send a response to the user
  } catch (error) {
    next(error); // Send error to the error handling middleware
  }
}
