const mongoose = require("mongoose");

const dbURI = process.env.DB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(dbURI);
    console.log("Conectado ao banco de dados com sucesso!");
  } catch (err) {
    console.error("Conexão com o banco de dados falhou:", err);
    process.exit(1);
  }
};

module.exports = connectDB;
