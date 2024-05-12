const express = require("express");
const router = express.Router();
const trainingSeriesController = require("../controllers/trainingSeriesController");

router.post("/", trainingSeriesController.createtrainingSeries);
// Defina as rotas restantes conforme necessário

module.exports = router;