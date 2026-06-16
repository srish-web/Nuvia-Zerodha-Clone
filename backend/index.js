require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const { HoldingsModel } = require('./models/HoldingsModel');
const { PositionsModel } = require('./models/PositionsModel');
const { OrdersModel } = require("./models/OrdersModel");
const authRoute = require("./Routes/AuthRoute");
const { verifyToken } = require("./Middlewares/AuthMiddleware");

const PORT = process.env.PORT || 3000;
const uri = process.env.MONGO_URL;

const app = express();

// ─── Middleware ───────────────────────────────────────────────
app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:3001"], // frontend + dashboard ports
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,  // REQUIRED for cookies to work cross-origin
}));
app.use(cookieParser());   // REQUIRED — reads req.cookies.token
app.use(bodyParser.json());

// ─── Auth Routes (signup, login, token verify) ────────────────
app.use("/", authRoute);

// ─── Protected Routes (require valid JWT) ────────────────────
app.get('/allHoldings', verifyToken, async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get('/allPositions', verifyToken, async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.get('/allOrders', verifyToken, async (req, res) => {
  let allOrders = await OrdersModel.find({});
  res.json(allOrders);
});

app.post('/newOrder', verifyToken, async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });
  newOrder.save();
  res.send("Order saved");
});

// ─── Start Server ─────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`App started on port ${PORT}`);
  mongoose.connect(uri);
  console.log("DB connected");
});