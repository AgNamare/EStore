import User from "../models/user.model.js";

export const signup = async(req, res, next) => {
  const {email, password, username} = req.body;
  console.log(email, password, username)
  const newUser = new User({email, password, username});

  try {
    await newUser.save();
    res.status(200).json("User Created Successfully");
  } catch (error) {
    next(error)
  }
}