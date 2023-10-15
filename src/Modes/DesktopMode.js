import React, { useState, useRef, useEffect } from 'react'
import AllNotes from '../Components/AllNotes'
import EditNotes from '../Components/EditNotes'
import CreateNote from '../Components/CreateNote'

function DesktopMode() {
  const [create, setCreate] = useState(false);
  const [defaultSection,setDefaultSection] = useState(true);
  const [selectedNote,setSelectedNote] = useState(null);
  const popupRef = useRef(null);

  const handleOutsideClick = (event)=>{
    if(popupRef.current && !popupRef.current.contains(event.target))
      setCreate(false);
    
  }

  useEffect(()=>{
    document.addEventListener('mousedown',handleOutsideClick);
    return ()=>document.removeEventListener('mousedown',handleOutsideClick);
  },[])

  return (
    <div className='DesktopMode' style={{width:'100vw',height:'100vh',display:'flex'}}>
      <AllNotes setCreate={setCreate} setDefaultSection={setDefaultSection} setSelectedNote={setSelectedNote} />
      <EditNotes defaultSection={defaultSection} selectedNote={selectedNote} />
      {create ? (
        <div style={{height:'100vh',width:'100vw',backgroundColor: '#2F2F2FBF',position:'absolute',top:'0'}}>
          <div ref={popupRef} >
            <CreateNote setCreate={setCreate} />
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default DesktopMode