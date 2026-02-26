const express = require("express");
const cors = require("cors");
const session = require("express-session");
require("dotenv").config();
const path = require("path"); // MUST be first line

const app = express();

// CORS setup to allow cookies
app.use(cors({
  origin: "https://localhost:5173",
  credentials: true
}))

app.use(express.json());

// Session setup
app.use(session({
  secret: process.env.SESSION_SECRET, // must exist in .env
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: true, // true if using HTTPS in production
    maxAge: 24 * 60 * 60 * 1000 // 1 day
  }
}));

// --- ROUTES ---
// make sure your route files export a Router object
const userRoutes = require("./routes/user.routes");
app.use("/api", userRoutes);

const watchRoutes = require("./routes/watch.routes");
app.use("/api", watchRoutes);

const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);

// EXPORT app last, after all routes are added
module.exports = app;