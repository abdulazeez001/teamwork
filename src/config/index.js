const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { Pool, Client } = require('pg');
dotenv.config();

const config = {
  port: process.env.PORT || 3000,
  version: 'v1',
  dbDetails: {
    dsn_mongo:
      process.env.NODE_ENV === 'production'
        ? process.env.MONGODB_PROD_URI
        : process.env.MONGODB_LOCAL_URI,
    dsn_psql: process.env.PSQL_PROD_URI,
    options: {
      dbName: 'studentManagement',
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    },
  },
  // debugger: debug(`${appName}:server`),
  secret: process.env.JWT_SECRET,
  jwtTokenExpire: process.env.JWT_EXPIRE,
};

const connectMongoDB = () => {
  const { dsn_mongo, options } = config.dbDetails;
  mongoose
    .connect(dsn_mongo, options)
    .then(function () {
      console.log(
        `MongoDB Connected: ${mongoose.connection.host}`.cyan.underline.bold
      );
    })
    .catch((err) => {
      console.log('Could not connect to db', err);
    });
};

const connectPsqlDB = () => {
  const { dsn_psql } = config.dbDetails;
  const pool_local = new Client({
    user: process.env.PSQL_USER,
    host: 'localhost',
    database: process.env.PSQL_DATABASE,
    password: process.env.PSQL_PASSWORD,
    port: process.env.PSQL_PORT,
  });

  const pool_prod = new Client(dsn_psql);
  if (process.env.NODE_ENV === 'production') {
    pool_prod.connect(function (err) {
      if (err) {
        return console.error('could not connect to postgres', err);
      }
      pool_prod.query('SELECT NOW() AS "theTime"', function (err, result) {
        if (err) {
          return console.error('error running query', err);
        }
        console.log(result.rows[0].theTime);
      });
    });
    return pool_prod;
  } else {
    return pool_local;
  }
};

module.exports = {
  config,
  connectMongoDB,
  pool: connectPsqlDB(),
};
