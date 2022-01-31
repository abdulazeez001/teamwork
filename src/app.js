const {app} = require('./api/index')
const {config} = require('./config/index');
app.listen(config.port,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${config.port}`
        )
) 

// Handle unhandled promise rejections on server
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red);
  });