const trainingSeries = require('../models/trainingSeries');

exports.createtrainingSeries = async (req, res) => {
  try {
    const { name, description, exercises, createdBy } = req.body;
    const newtrainingSeries = new trainingSeries({
      name,
      description,
      exercises,
      createdBy
    });
    const trainingSeries = await newtrainingSeries.save();
    res.status(201).json(trainingSeries);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Implemente os métodos restantes do CRUD conforme necessário
