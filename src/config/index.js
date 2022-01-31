const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { Pool, Client } = require('pg')
dotenv.config()

const config = {
    port: process.env.PORT || 3000,
    version:'v1',
    dbDetails: {
      dsn_mongo: process.env.NODE_ENV === 'production' ? process.env.MONGODB_PROD_URI : process.env.MONGODB_LOCAL_URI,
      dsn_psql: process.env.PSQL_PROD_URI,
      options: {
        dbName: 'studentManagement',
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify:false
      },
    },
    // debugger: debug(`${appName}:server`),
    secret:process.env.JWT_SECRET,
    jwtTokenExpire:process.env.JWT_EXPIRE

  };


  
const connectMongoDB = ()=>{
    const {dsn_mongo,options} = config.dbDetails
    mongoose.connect(dsn_mongo,options).then(function(){
        console.log(`MongoDB Connected: ${mongoose.connection.host}`.cyan.underline.bold);
    }).catch((err)=>{
        console.log('Could not connect to db',err)
    })
}



const connectPsqlDB = () =>{
  const {dsn_psql} = config.dbDetails
  const pool_local = new Pool({
    user: process.env.PSQL_USER,
    host: 'localhost',
    database: process.env.PSQL_DATABASE,
    password: process.env.PSQL_PASSWORD,
    port: process.env.PSQL_PORT

  })

  const pool_prod = new Pool({
    dsn_psql
  })

  if(process.env.NODE_ENV === 'production'){
    return pool_prod
  }else{
    console.log(config)
    return pool_local
  }

  
    
}



module.exports = {
    config,
    connectMongoDB,
    pool:connectPsqlDB()
}