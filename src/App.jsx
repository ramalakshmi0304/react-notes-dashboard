import React from 'react'
import Dashboard from './dashboard'
import { NotesProvider } from './NotesContext'


const App = () => {
  return (
    <div>
      <NotesProvider>
        <Dashboard />
      </NotesProvider>

    </div>
  )
}

export default App