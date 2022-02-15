const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const helmet = require('helmet');
const fileupload = require('express-fileupload');
const errorHandler = require('./middleware/errorHandler');
const ErrorResponse = require('../utilities/errorResponse');
const { config } = require('../config');
const dotenv = require('dotenv');
const { usersRoutes, articlesRoutes, gifsRoutes } = require('./routes');
dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());
// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// File uploading
app.use(fileupload());
// Set security headers
app.use(helmet());

app.use(`/api/${config.version}/`, usersRoutes);
app.use(`/api/${config.version}/`, articlesRoutes);
app.use(`/api/${config.version}/`, gifsRoutes);

app.get(`/api/${config.version}/`, (req, res) => {
  res.status(200).json({
    message: 'hello',
  });
});

app.use(async function (req, res, next) {
  const error = new ErrorResponse('Not Found', 404);
  next(error);
});

app.use(errorHandler);

module.exports = {
  app,
};
