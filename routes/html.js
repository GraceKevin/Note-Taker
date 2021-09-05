// npm install

const router = require ('express').Router();
const path = require ('path');
const {networkInterfaces} = require('os');

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "public/index.html"))
});

router.get("./notes", (req, res) => {
    res.sendFile(path.join(__dirname + "public/notes.html"))
});

router.delete("./api/notes/:id", (req, res) => {
    res.sendFile(path.join(__dirname, "db/db.json"));
    for (let i = 0; i < newNotes.length; i++)
        if (newNotes[i].id == req.params.id) {
            newNotes.splice(i, 1);
            break
        }
})

module.exports = router;