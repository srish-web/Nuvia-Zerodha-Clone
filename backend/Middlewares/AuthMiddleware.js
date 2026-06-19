const User = require("../models/UsersModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

// Verifies token for the dashboard check (POST /)
module.exports.userVerification = (req, res) => {
  const token = req.cookies.token || req.headers["authorization"]?.split(" ")[1];
  if (!token) return res.json({ status: false });

  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) return res.json({ status: false });
    const user = await User.findById(data.id);
    return user
      ? res.json({ status: true, user: user.username })
      : res.json({ status: false });
  });
};

// Protects existing API routes (holdings, positions, orders)
module.exports.verifyToken = (req, res, next) => {
  const token = req.cookies.token || req.headers["authorization"]?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Unauthorized: No token" });

  jwt.verify(token, process.env.TOKEN_KEY, (err, data) => {
    if (err) return res.status(401).json({ message: "Unauthorized: Invalid token" });
    req.userId = data.id;
    next();
  });
};