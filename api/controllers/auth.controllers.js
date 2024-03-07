import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async(req, res, next) => {
  const {email, password, username} = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  console.log(email, hashedPassword, username)
  const newUser = new User({username, email, password:hashedPassword});

  try {
    await newUser.save();
    res.status(200).json("User Created Successfully");
  } catch (error) {
    next(error)
  }
}

export const signIn = async (req, res, next)=>{
  const {email, password} = req.body;
  console.log(email)
  try {
    const validUser = await User.findOne({email});
    if(!validUser) return next(errorHandler(404, "Wrong credentials1!"));
    const validPassword = bcrypt.compareSync(password, validUser.password);
    if(!validPassword) return next(errorHandler(401, "Wrong Credentials2!"));
    const token = jwt.sign({id:validUser._id}, process.env.JWT_SECRET);
    const {password:pass, ...userInfo} = validUser._doc;
    res.cookie("access_token", token, {httpOnly:true, secure:false}).status(200).json(userInfo)
  } catch (error) {
    next(error);
  }
}