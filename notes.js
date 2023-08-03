// adding required node modules
const fs = require('fs');
const path = require('path');
// adds unique id to generated note, notelist is stringified for array order 
function dataBase(id, notesList) {
        notes.stringify(i)
        fs.writeFileSync
          path.join(__dirname, "../db/db.json"),
          JSON.stringify({notes: notesList}, null)         
      }
  function addNewNote(body, notesList) {
    const newNote = body
    notesList.push(newNote);
    fs.writeFileSync(
      path.join(__dirname, "../db/db.json"),
      JSON.stringify({notes: notesList}, null)
    );
    return newNote;
  };

  module.exports = {
    dataBase,
    addNewNote};