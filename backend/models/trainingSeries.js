const mongoose = require("mongoose");

const trainingSeriesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  exercises: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Exercise'
  }],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

const trainingSeries = mongoose.model("trainingSeries", trainingSeriesSchema);

module.exports = trainingSeries;
