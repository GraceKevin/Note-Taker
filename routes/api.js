// npm install

const router = require ('express').Router();
const fs = require ('fs');
const util = require ('util');

const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)

// router - api

router.get("/api/notes", async (req, res) => {
    const notes = await readFile("db/db.json", "utf-8");
    const notesArr = JSON.parse(notes) || [];
    res.json(notesArr);
})

router.post("/api/notes", async (req, res) => {
    const notes = await readFile("db/db.json", "utf-8");
    const notesArr = JSON.parse(notes) || [];
    console.log(req. body);
    const newNotes = 
    {
        title: req.body.title, 
        text: req.body.text, 
        id: 2
    };
    const newNotesArr = notesArr.concat(newNotes);
    const lastNotes = writeFile("db/db.json", JSON.stringify(newNotesArr));
    res.json(lastNotes)
})

module.exports = router;