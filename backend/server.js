const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const checkToken = require("./middleware/checkToken");

const app = express();

app.use(cors());

app.use(express.json());
app.get("/", (req, res) => {
  res.status(200).json({ msg: "Bem vindo" });
});
app.use("/auth", authRoutes);
app.use("/user", checkToken, userRoutes);

module.exports = app;
