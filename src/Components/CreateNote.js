import React from 'react'
import NewNote from './NewNote'

function CreateNote({setCreate}) {
  return (
    <div >
        <NewNote setCreate={setCreate} />
    </div>
  )
}

export default CreateNote