const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const checkToken = require("./middleware/checkToken");
const trainingSeriesRoutes = require("./routes/trainingSeriesRoutes");

const app = express();

app.use(cors());

app.use(express.json());
app.get("/", (req, res) => { // Rota padrão
  res.status(200).json({ msg: "Bem vindo" });
});
app.use("/auth", authRoutes);
app.use("/user", checkToken, userRoutes); // Protegendo todas as rotas de user
app.use("/training-series", trainingSeriesRoutes); //testar

module.exports = app;