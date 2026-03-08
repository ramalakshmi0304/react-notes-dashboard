import React, { useContext } from 'react'
import { NotesContext } from './NotesContext'

const Dashboard = () => {

    const [notes, setNotes] = useContext(NotesContext)

    const handleSubmit = (e) => {
        e.prevent.default()

        if (!notes) {
            alert("submit the notes")
            return;
        }
        console.log(notes)
        setNotes("")
    }
    return (
        <div>
            <h2>dashboard</h2>
            <input type="text" placeholder='type a new note' value={notes} onChange={(e) = setNotes(e.target.value)}/>
                <button onClick={handleSubmit}>add note</button>
        </div>


    )
}

export default Dashboard;