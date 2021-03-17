const express = require('express');
const routes = require('./routes/apiroutes');
const app = express();
const PORT = process.env.PORT || 3001;
 
const environment = process.env.NODE_ENV || 'development';
const mongoose = require("mongoose")
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
// console.log(process.env.NODE_ENV);
if (environment === 'production') {
    app.use(express.static('client/build'));
}
// Add routes, both API and view
app.use(routes);
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks",
{
useNewUrlParser: true,
useUnifiedTopology: true,
useCreateIndex: true,
useFindAndModify: false
}
)
// Start the API server
// ADD SEQUELIZE HERE TO CONNECT TO YOUR DB
    app.listen(PORT, () => {
        console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
    });