# Nuvia — Stock Trading Platform

![Nuvia](https://img.shields.io/badge/Nuvia-Stock%20Trading%20Platform-blue?style=for-the-badge)
![MERN](https://img.shields.io/badge/Stack-MERN-green?style=for-the-badge)
![License](https://img.shields.io/badge/License-Educational-orange?style=for-the-badge)

Nuvia is a full-stack stock trading platform inspired by Zerodha's Kite application. It allows users to create an account, manage their investment portfolio, monitor holdings and positions, track orders, and interact with a modern trading dashboard. Built using the MERN stack, Nuvia simulates the core workflow of an online stock brokerage platform.

> ⚠️ This project is designed for **educational and portfolio purposes only**. It does not involve real money or actual stock market transactions.

---

## 🌐 Live Demo

| App | URL |
|-----|-----|
| 🏠 Frontend (Landing) | [nuvia-a2kp.onrender.com](https://nuvia-a2kp.onrender.com) |
| 📊 Dashboard | [nuvia-dashboard.onrender.com](https://nuvia-dashboard.onrender.com) *(accessible after login)* |

> **Note:** The dashboard is a protected route. Please login through the frontend to access it.
>
> You can use the following credentials to explore the app:
> - **Username:** SrishtyGupta
> - **Password:** SrishtyGupta

---

## ✨ Features

### 🔐 Authentication & Security
- User Registration (Signup)
- User Login
- JWT-based Authentication
- Protected Dashboard Routes
- Secure Password Hashing with bcrypt

### 📁 Portfolio Management
- View Holdings
- View Positions
- Portfolio Summary
- Profit & Loss Overview
- Funds Management

### 📈 Trading Dashboard
- Interactive Dashboard UI
- Watchlist Management
- Stock Tracking
- Portfolio Analytics
- Responsive Design

### 🧾 Order Management
- Place Buy Orders
- Place Sell Orders
- View Order History
- Track Active Orders
- Order Status Monitoring

### 💻 User Experience
- Responsive Landing Website
- Home, About, Products, Pricing Pages
- Modern React-based Interface
- Real-time Dashboard Navigation

### ⚙️ Backend Features
- REST API Architecture
- MongoDB Database Integration
- Express.js Server
- Mongoose Models
- Secure Authentication Middleware

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React.js, Bootstrap, Axios |
| Dashboard | React.js, Bootstrap, Axios |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Authentication | JWT, bcryptjs |
| Deployment | Render |

---

## 📁 Project Structure

```
nuvia/
├── frontend/        # Landing website (React)
├── dashboard/       # Trading dashboard (React)
└── backend/         # REST API server (Node + Express)
```

---

## 🔌 API Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/signup` | Register a new user | ❌ |
| POST | `/login` | Login and receive JWT | ❌ |
| POST | `/` | Verify JWT token | ❌ |
| GET | `/allHoldings` | Get all holdings | ✅ |
| GET | `/allPositions` | Get all positions | ✅ |
| GET | `/allOrders` | Get all orders | ✅ |
| POST | `/newOrder` | Place a new order | ✅ |

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

---

## 📄 License

This project is for educational and portfolio purposes only. Not intended for commercial use.

---

## 👩‍💻 Author

Made with ❤️ by **Srishty Gupta**