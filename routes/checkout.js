const express = require('express');
const router = require('express-promise-router')();

const CheckoutController = require('../controllers/checkout');

router.route('/')
  .post(CheckoutController.charge);

router.route('/donate')
  .post(CheckoutController.donation);

module.exports = router;
