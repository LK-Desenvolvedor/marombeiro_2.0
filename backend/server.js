require("dotenv").config();
const express = require("express");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const checkToken = require("./middleware/checkToken");


const app = express();

app.use(express.json());
app.use("/user", checkToken);
app.use("/", (req, res) => {
  res.status(200).json({ msg: "Bem vindo" });
});
app.use("/auth", authRoutes);
app.use("/user", userRoutes);

module.exports = app;
