const User = require('../models/user');
const mapAnswersToQuestions = require('../helpers/typeform');

module.exports = {
  getUser: async (req, res, next) => {
    const userID = req.params.userId;
    const user = await User.findOne({ userId: userID })
    if (!user) return res.status(500).json({ user: 'noUser'});
    const { firstName, status, userId } = user;
    const userData = { firstName, status, userId };
    console.log('USER DATA TO CLIENT -->', userData);
    return res.json(userData);
  },
  
  getUsers: async (req, res, next) => {
    console.log('users controller - get users');
    res.status(200).send('/get user endpoint hit')
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
