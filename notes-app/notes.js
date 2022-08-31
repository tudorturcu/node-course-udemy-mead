const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote)
    {
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)

        console.log(chalk.bgGreen('New note added'))
    }
    else 
    {
        console.log(chalk.bgRed('Note title taken'))
    }

    
}

const removeNote = (title) => {
    const notes = loadNotes()

    const remainingNotes = notes.filter((note) => {
        return note.title !== title
    })
    
    const deletedNote = notes.filter((note) => {
        return note.title === title
    })
 
    
    if (deletedNote.length > 0)
    {
        saveNotes(remainingNotes)
        console.log(chalk.bgGreen('Note removed!'))
    }
    else 
    {
        console.log(chalk.bgRed('No note found!'))
    }
}

const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.bgYellow('Your notes'))

    notes.forEach(note => {
        console.log(note.title);
    })
}

const readNote = (title) => {
    const notes = loadNotes()

    const noteToBeRead = notes.find((note) => note.title === title)

    if (noteToBeRead)
    {
        console.log(chalk.bgGreen(noteToBeRead.title))
        console.log(noteToBeRead.body)
    }
    else
    {
        console.log(chalk.bgRed('No note found :('))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJsON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch (e) {
        return []
    }

}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}