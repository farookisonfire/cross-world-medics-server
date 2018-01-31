const { handleCharge } = require('../helpers/stripe');
const { resolveNextStatus } = require('../helpers/utils');
const User = require('../models/user');

module.exports = {
  charge: (req, res, next) => {
    const {
      token,
      selectedProgramId,
      amount,
      userId,
      chargeDescription
    } = req.body;

    const stripeToken = token.id;
    const email = token.email

    const chargeDetails = {
      email,
      amount,
      description: chargeDescription
    };

    handleCharge(stripeToken, chargeDetails)
      .then(() => User.findOne({ userId }))
      .then((user) => resolveNextStatus(user))
      .then((nextStatus) => User.findOneAndUpdate({ userId }, { $set: { status: nextStatus, selectedProgramId }}, { new: true, upsert: true }))
      .then((updatedUser) => res.status(200).json({ nextStatus: updatedUser.status, selectedProgramId }))
      .catch(() => res.status(500).send('charge failed'))
  },
  donation: (req, res, next) => {
    const { customerDetails, token } = req.body;

    handleCharge(token, customerDetails)
      .then(() => res.status(200).send('payment success'))
      .catch((err) => {
        console.log('err');
        res.status(500).send('payment fail')
      });
  }
}
