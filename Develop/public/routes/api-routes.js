// call dependencies
const path = require("path");
const fs = require("fs");

// routing syntax
module.exports = (app) => {
  app.get("/Develop/public/notes.html", (req, res) => {
    res.sendFile(path.join(__dirname, "/Develop/db/db.json")); // send body parameter to the client
  });

  app.post;
};
