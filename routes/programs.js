const express = require('express');
const router = require('express-promise-router')();

const ProgramsController = require('../controllers/programs');

router.route('/')
  .get(ProgramsController.getPrograms);

module.exports = router;
