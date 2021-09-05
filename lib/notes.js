const fs = require('fs');
const path = require('path');

function createNote(body, notesArr) {
    const note = body;

    notesArr.push(note);

    fs.writeFile(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({
            notes:notesArr
        },
        null,
        2
        )
    );

    return note;
};

module.exports = {
    createNote,
}