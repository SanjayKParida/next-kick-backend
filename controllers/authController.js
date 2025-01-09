import { User } from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//CREATE USER FUNCTION
export const createUser = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    const exisitingEmail = await User.findOne({ email });
    if (exisitingEmail) {
      return res
        .status(400)
        .json({ message: "User with same email already exixsts." });
    } else {
      //GENERATING SALT WITH COST FACTOR
      const salt = await bcrypt.genSalt(10);
      //HASING PASSWORD
      const hashedPassword = await bcrypt.hash(password, salt);
      let user = new User({
        email,
        password: hashedPassword,
        fullName,
      });
      user = await user.save();
      res.json({ user });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//SIGN IN USER FUNCTION
export const signInUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const foundUser = await User.findOne({ email });
    if (!foundUser) {
      res.status(400).json({ message: "User not found with the email" });
    } else {
      const isMatched = await bcrypt.compare(password, foundUser.password);
      if (!isMatched) {
        return res.status(400).json({ message: "Incorrect password" });
      } else {
        const token = jwt.sign({ id: foundUser._id }, "passwordKey");

        //REMOVE SENSITIVE DATA
        const { password, ...userWithoutPassword } = foundUser._doc;

        //SEND RESPONSE
        res.json({
          token,
          user: userWithoutPassword,
        });
      }
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
