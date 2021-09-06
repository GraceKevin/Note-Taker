// npm install

const {v4: uuidv4} = require('uuid');
const router = require ('express').Router();
// const fs = require ('fs');
// const util = require ('util');
const db = require('../db/db.json');
const { createNewNote, deleteNote } = require('..notes');

const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)

// router - api

router.get("./notes",  (req, res) => {
    let results = notes;

    res.json(results);
});

router.post("./notes",  (req, res) => {
    req.body.id = uuidv4();

    const note = createNote(req.body, notes);

    res.json(note);
});

router.delete('./notes/:id', (req, res) => {
    deleteNote(req.params.id, notes);

    res.json(notes);
});

module.exports = router;