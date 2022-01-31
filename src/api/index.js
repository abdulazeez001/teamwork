const express = require('express');
const cookieParser = require('cookie-parser')
const morgan = require('morgan');
const helmet = require('helmet');
const errorHandler = require('./middleware/errorHandler')
const ErrorResponse = require('./api/utilities/errorResponse');
const dotenv = require('dotenv');
dotenv.config()



const app  = express();


app.use(express.json())
app.use(cookieParser())
// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Set security headers
app.use(helmet());


// app.use('/api/auth',authRoutes)

app.get('/api/v1',(req,res)=>{
    res.status(200)
       .json({
           message:'hello'
       })
})

app.use(async function(req,res,next){
    const error = new ErrorResponse('Not Found',404)
    next(error)
})

app.use(errorHandler)




module.exports =  {
    app
 }


