// Configuring the routes
// require('./app/routes/mobster.routes.js')(app);
const app = require('./app/config/express')();
// Create a Server
app.listen(8081, function () {

  console.log("App listening at 8081")

})
