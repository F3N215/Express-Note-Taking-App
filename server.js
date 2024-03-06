// calls dependencies
const express = require("express");
const path = require("path");

const app = express(); // use express
const uuid = require("/Develop/public/helpers/uuid");
const PORT = process.env.PORT || 3001;
// const PORT = 3001;

// use express to create route files in /public folder
app.use(express.static("./public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// route files
require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

app.listen(PORT, () => {
  // starts server
  console.log(`Your server is ready at localhost${PORT}`);
});
