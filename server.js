// calls dependencies
const express = require("express");
const app = express(); // use express
const apiRoutes = require("./routes/api-routes");
const htmlRoutes = require("./routes/html-routes");

const PORT = process.env.PORT || 3001;
// const PORT = 3001;

// use express to create route files in /public folder
app.use(express.static("./public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// route files
app.use("/api", apiRoutes);
app.use(htmlRoutes);

// start server
app.listen(PORT);
