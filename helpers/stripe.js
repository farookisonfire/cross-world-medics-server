const secret = process.env.STRIPE_SECRET_KEY || "sk_test_qdkgru5QBQHPHo3MxG4jdfeL";
const stripe = require("stripe")(secret);

const handleCharge = (token, chargeDetails) => {
  const {
    email,
    amount,
    description = 'Enrollment Fee Payment'
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
