const Qroom=require('../models/qroom.model')
const generateCode = require('../utils/generateCode');

exports.createQroom = async (req, res) => {
  try {
    const { title } = req.body;
    const host = req.user.id;

    const code = await generateCode();

    const newQroom = await Qroom.create({
      title,
      host,
      code,
      questions: [],       // initially no questions
      active: true,        // session is active by default
      createdAt: new Date() // optional, auto-set by schema if not included
    });

    res.status(201).json(newQroom);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create Qroom' });
  }
};

// exports.