// calls dependencies
const express = require("express");
const path = require("path");

const app = express(); // use express
const uuid = require("./public/helpers/uuid");
const PORT = process.env.PORT || 3001;
// const PORT = 3001;

// use express to create route files in /public folder
app.use(express.static("./public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// route files
require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

// start server
app.listen(process.env.PORT || 3001);
