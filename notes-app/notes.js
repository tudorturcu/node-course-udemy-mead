const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => 'Your notes...'

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => note.title === title)

    if (duplicateNotes.length === 0)
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

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
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
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}