//call dependencies
const path = require("path");

module.exports = (app) => {
  app.get("/Develop/public/notes.html");
  res.sendFile(path.join(__dirname, "/Develop/public/notes.html"));
};

app.get("*", (req, res) => {
  res.SendFile(path.join(__dirname, "/Develop/public/index.html"));
});
