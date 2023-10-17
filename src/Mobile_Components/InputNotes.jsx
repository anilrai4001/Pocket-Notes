import React, { useState } from 'react'
import Enter from '../Assets/enter.png'
import styles from './InputNotes.module.css'

function InputNotes({selectedNote}) {
  const [text,setText] = useState('');

  const handleEnter = (e)=>{
    if(e.key==='Enter'){
      e.preventDefault();
      handleSaveNotes();
    }
  }

  const handleNotes = (e)=>{
    let newText = e.target.value;
    setText(newText);
  }
  
  const handleSaveNotes = ()=>{
    if(text.trim()!==''){
      let nextNote = {time:new Date(),notes:text}
      let notesArray = JSON.parse(localStorage.getItem(selectedNote.groupName)) || [];
      notesArray.push(nextNote);
      localStorage.setItem(selectedNote.groupName,JSON.stringify(notesArray));
      setText('');
    }
  }

  return (
    <div className={styles.InputNotes} >
      <textarea placeholder='Enter your text here...........' onKeyDown={handleEnter} onChange={handleNotes} value={text}></textarea>
      <img src={Enter} alt='Save' onClick={handleSaveNotes}/>
    </div>
  )
}

export default InputNotes