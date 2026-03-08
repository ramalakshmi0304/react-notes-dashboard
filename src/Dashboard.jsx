import React from 'react'

const dashboard = () => {
 
 const [notes,setNotes]=useState(null)
 
    return (
    <div>
      <h2>dashboard</h2>  
      <input type="text" placeholder='type a new note' value={notes}/>
      <button onClick={handleSubmit}>add note</button>

        
        </div>
  )
}

export default dashboard