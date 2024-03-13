// call dependencies
const path = require("path");
const fs = require("fs");

var uniqid = require("uniqid");

// routing syntax
module.exports = (app) => {
  app.get("/Develop/public/notes.html", (req, res) => {
    res.sendFile(path.join(__dirname, "/Develop/db/db.json")); // send body parameter to the client
  });

  // uses POST to send new note to request and add to db.json, then return new note
  app.post("/Develop/public/notes.html", (req, res) => {
    let db = fs.readFileSync("/Develop/db/db.json");
    db = JSON.parse(db);
    res.json(db);
    let userNote = {
      title: req.body.title,
      text: req.body.text,
      id: uniqid(), // adds a unique id for each note
    };
    db.push(userNote); // push note created in db.json
    fs.writeFileSync('db/db.json,' JSON.stringify(db));
    res.json(db);

    notes.push(userNote);
  });
};
