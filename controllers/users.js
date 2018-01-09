const User = require('../models/user');
const mapAnswersToQuestions = require('../helpers/typeform');

module.exports = {
  getUsers: async (req, res, next) => {
    console.log('users controller - get users');
  },

  submit: async (req, res, next) => {
    const formattedFormData = mapAnswersToQuestions(req.body);
    const { email } = formattedFormData;
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      console.log('User already exists');
      return res.status(403).send('User already exists.');
    }
    const newUser = new User(formattedFormData);
    await newUser.save();
    res.status(200).send('User saved');
  }
}