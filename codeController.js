const Code = require('../models/Code');

exports.getCode = async (req, res) => {
  try {
    const code = await Code.find();
    res.json(code);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching code' });
  }
};

exports.addCode = async (req, res) => {
  try {
    const { content } = req.body;
    const newCode = new Code({ content });
    await newCode.save();
    res.status(201).json(newCode);
  } catch (error) {
    res.status(500).json({ error: 'Error adding code' });
  }
};
