const Program = require('../models/program');

module.exports = {
  getPrograms: async (req, res, next) => {
    const programs = await Program.find().sort({order: 1});
    if (!programs.length) return res.status(500).json({ programs: 'no programs'});
    console.log('PROGRAMS DATA TO CLIENT -->', programs);
    return res.json(programs);
  }
}
