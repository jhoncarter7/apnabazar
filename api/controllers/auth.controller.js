import User from "../models/user.models.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { errorHandler } from "../utils/error.js";
export const signUp = async (req, res, next) => {
  const { fullName, email, mobileNo, password } = await req.body;
  const hashPassword = bcrypt.hashSync(password, 10);
  const newUser = new User({
    fullName,
    email,
    mobileNo,
    password: hashPassword,
  });
  try {
    await newUser.save();
    res.status(201).json("user created successfully");
  } catch (error) {
    next(error);
  }
};

export const signIn = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, "user not found"));
    const validPassword = bcrypt.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, "wrong credential"));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = validUser._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};
