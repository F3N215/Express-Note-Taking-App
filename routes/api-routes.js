// call dependencies
const path = require("path");
const fs = require("fs");
const router = require("express").Router();

var uniqid = require("uniqid");

router.get("/notes", (req, res) => {
  let db = fs.readFileSync("db/db.json");
  db = JSON.parse(db);
  console.log(db);
  res.json(db);
});

// uses POST to send new note to request and add to db.json, then return new note
router.post("/notes", (req, res) => {
  let db = fs.readFileSync("db/db.json");
  db = JSON.parse(db);
  let userNote = {
    title: req.body.title,
    text: req.body.text,
    id: uniqid(), // adds a unique id for each note
  };
  db.push(userNote); // push note created in db.json
  fs.writeFileSync("db/db.json", JSON.stringify(db));
  res.json({ message: "Note created!" });
});

router.delete("/notes/:id", (req, res) => {
  let db = JSON.parse(fs.readFileSync("db/db.json"));
  let deleteNotes = db.filter((item) => item.id !== req.params.id);
  fs.writeFileSync("db/db.json", JSON.stringify(deleteNotes));
  res.json(deleteNotes);
});

// routing syntax
module.exports = router;
