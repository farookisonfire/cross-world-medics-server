const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/cwm';
const PORT = process.env.PORT || '1337';

mongoose.Promise = global.Promise;
mongoose.connect(MONGODB_URI);
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/users', require('./routes/users'));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
