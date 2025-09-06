const Qroom = require('../models/qroom.model');

const generateCode = async () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code;
  let exists = true;

  while (exists) {
    code = Array.from({ length: 6 }, () =>
      chars.charAt(Math.floor(Math.random() * chars.length))
    ).join('');

    const existing = await Qroom.findOne({ code });
    if (!existing) exists = false;
  }

  return code;
};

module.exports=generateCode