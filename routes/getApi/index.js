const router = require('express').Router();
const {addNewNote, newDb} = require("../../back/notes");
// uuid allows generated ids to have unique id
const { v4: uuidv4 } = require('uuid');
// notes saved to json database
const {notes} = require("../../db/db.json");

//requesting notes, sending results out as JSON
router.get("/notes", (req, res) => {
    let results = notes;
    res.json(results);
  });

  router.post("/notes", (req, res) => {
    req.body.id = uuidv4();
    const newNote = addNewNote(req.body, notes);
    res.json(newNote);
  });  


  module.exports = router;