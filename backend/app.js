const app = require("./server");
const connectDB = require("./database");

connectDB();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Servidor está funcionando na porta ${PORT}`);
});
