const secret = process.env.STRIPE_SECRET_KEY || "sk_test_6m55BYyH2L1xa7j9uboViaNq";
const stripe = require("stripe")(secret);

const handleCharge = (token, chargeDetails) => {
  const {
    email,
    amount,
    description
  } = chargeDetails

  return stripe.customers.create({
    email: email,
    source: token
  })
  .then(customer =>
    stripe.charges.create({
      amount: parseInt(amount) * 100,
      description: description,
      currency: 'usd',
      customer: customer.id,
      receipt_email: email,
      metadata: chargeDetails,
    }));
};

module.exports = {
  handleCharge
};
