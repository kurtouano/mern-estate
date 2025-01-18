import User from "../models/user.model.js"; // Importing the User model from the user.model.js file
import bcrypt from "bcryptjs"; // Importing bcrypt to hash the password
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  // Asyc for new user to be saved in the DB
  // console.log(req.body);  Show data in the console
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
