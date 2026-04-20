import User from "../model/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import { genToken } from "../config/token.js";

export const registration = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existUser = await User.findOne({ email });

    if (existUser) {
      return res.status(400).json({ message: "User already exst" });
    }
    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Enter valid email!!!!!" });
    }
    if (password.length < 8) {
      return res.status(400).json({ message: "Enter strong password" });
    }
    let hashPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ name, email, password: hashPassword });

    let token = await genToken(user.id);
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return res.status(201).json(user);
  } catch (error) {
    console.log("Registeration Error");
    return res.status(500).json({ message: `Regestration error ${error}` });
  }
};

export const login = async (req, res) => {
  try {
    let { email, password } = req.body;
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not Found" });
    }
    let isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(404).json({ message: "Wrong Password" });
    }

    let token = await genToken(user.id);
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return res.status(201).json({ message: "Login Succesfull....." });
  } catch (error) {
    console.log("Login Error");
    return res.status(400).json({ message: `Login Error: ${error}` });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("token");
    return res.status(200).json({ message: "Logout Succesfull" });
  } catch (error) {
    console.log("Logout Error");
    return (res.status(400), json({ message: `Logout Error: ${error}` }));
  }
};
