const app = require("./server");
const connectDB = require("./database");
require('dotenv').config();

connectDB();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Servidor está funcionando na porta ${PORT}`);
});
