// call dependencies
const path = require("path");
const router = require("express").Router();

// GET returns notes.html file
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// GET * to return index.html file
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/"));
});

module.exports = router;
