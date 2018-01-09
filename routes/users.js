const express = require('express');
const router = require('express-promise-router')();

const UsersController = require('../controllers/users');

router.route('/')
  .get(UsersController.getUsers);

router.route('/submit')
  .post(UsersController.submit);

module.exports = router;
