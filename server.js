const express = require("express");
const path = require("path");

const app = express();
const uuid = require("/Develop/public/helpers/uuid");
const PORT = 3001;

// use express to create route files, encode url
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("/Develop/public/routes"));

// route files
require("/Develop/public/routes/api-routes")(app);
require("/Develop/public/routes/html-routes")(app);

app.listen(PORT, () => {
  console.log(`Server available at localhost${PORT}`);
});
