const User = require("../models/UsersModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, username, createdAt } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.json({ message: "User already exists" });
    const usernameExists = await User.findOne({username});
    if (usernameExists) return res.json({message: "Username already exists"});

    const user = await User.create({ email, password, username, createdAt });
    const token = createSecretToken(user._id);
    res.cookie("token", token, { withCredentials: true, httpOnly: false });
    res.status(201).json({ message: "User signed up successfully", success: true });
    next();
  } catch (error) {
    console.error(error);
  }
};

module.exports.Login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) return res.json({ message: "All fields are required" });

    const user = await User.findOne({ username });
    if (!user) return res.json({ message: "Incorrect username or password" });

    const auth = await bcrypt.compare(password, user.password);
    if (!auth) return res.json({ message: "Incorrect username or password" });

    const token = createSecretToken(user._id);
    res.cookie("token", token, { withCredentials: true, httpOnly: false });
    res.status(201).json({ message: "User logged in successfully", success: true });
    next();
  } catch (error) {
    console.error(error);
  }
};