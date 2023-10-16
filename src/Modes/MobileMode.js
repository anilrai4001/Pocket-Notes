import React, { useState } from 'react'
import AllGroups from '../Mobile_Components/AllGroups'
import NewGroup from '../Mobile_Components/NewGroup';
import DisplayNotes from '../Mobile_Components/DisplayNotes';

function MobileMode() {
  const [newGroup,setNewGroup] = useState(false);
  const [displayNotes, setDisplayNotes] = useState(false);
  const [selectedNote,setSelectedNote] = useState(null);

  return (
    <div style={{width:'100vw',height:'100vh'}}>
      <AllGroups setNewGroup={setNewGroup} setDisplayNotes={setDisplayNotes} setSelectedNote={setSelectedNote} />
      {newGroup ? <NewGroup setNewGroup={setNewGroup}/> : null}
      {displayNotes ? <DisplayNotes setDisplayNotes={setDisplayNotes} selectedNote={selectedNote} /> : null}
    </div>
  )
}

export default MobileMode