const Qroom = require('../models/qroom.model')
const generateCode = require('../utils/generateCode');

exports.createQroom = async (req, res) => {
  try {
    console.log(req.body);
    const { title, description, host } = req.body;
    if (!title || !host) {
      return res.status(400).json({ error: 'Title and host are required' });
    }

    const code = await generateCode();

    const newQroom = await Qroom.create({
      title,
      description, // You were missing this!
      host,
      code,
      questions: [],
      active: true,
      createdAt: new Date()
    });

    // Return the complete Qroom data including code
    res.status(201).json({
      success: true,
      qroom: {
        id: newQroom._id,
        title: newQroom.title,
        code: newQroom.code,
        description: newQroom.description,
        host: newQroom.host,
        active: newQroom.active,
        createdAt: newQroom.createdAt
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create Qroom' });
  }
};

exports.listQrooms = async(req,res)=>{
  try {
    const { hostId } = req.body;

    if (!hostId) {
      return res.status(400).json({ message: "HostId is required" });
    }

    const qrooms = await Qroom.find({ hostId }).sort({ createdAt: -1 });
    
    res.status(200).json(qrooms);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
}
