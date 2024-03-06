//call dependencies
const path = require("path");

// GET returns notes.html file
module.exports = (app) => {
  app.get("/public/notes.html");
  res.sendFile(path.join(__dirname, "/public/notes.html"));
};

// GET * to return index.html file
app.get("*", (req, res) => {
  res.SendFile(path.join(__dirname, "/"));
});
