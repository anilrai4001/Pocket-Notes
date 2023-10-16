import React, { useState } from 'react';
import styles from './NewNote.module.css';

function NewNote({ setCreate }) {
  const [groupName, setGroupName] = useState('');
  const [groupColor, setGroupColor] = useState('');

  const handleCreate = () => {
    if(groupName && groupColor){
      let notesGroups = JSON.parse(localStorage.getItem('NotesGroups')) || [];
      notesGroups.push({groupName,groupColor});
      localStorage.setItem('NotesGroups',JSON.stringify(notesGroups));
      setCreate(false);
    }
  }

  const handleGroupName = (e) => {
    let newGroupName = e.target.value;
    setGroupName(newGroupName);
    console.log(newGroupName);
  }

  const handleGroupColor = (e) => {
    const selectedColor = e.target.style.backgroundColor;
    setGroupColor(selectedColor);
    console.log(selectedColor);

    
    const colorDivs = document.querySelectorAll(`.${styles.color}`);
    colorDivs.forEach((div) => {
      div.classList.remove(styles.border);
    });

    
    e.target.classList.add(styles.border);
  }

  return (
    <div className={styles.NewNote}>
      <div style={{ fontSize: '25px' }}>Create New Notes group</div>
      <label>
        <span>Group Name</span>
        <input type="text" placeholder='Enter your group name....' onChange={handleGroupName} />
      </label>
      <label>
        <span>Choose Color</span>
        <div style={{ backgroundColor: '#B38BFA' }} className={styles.color} onClick={handleGroupColor}></div>
        <div style={{ backgroundColor: '#FF79F2' }} className={styles.color} onClick={handleGroupColor}></div>
        <div style={{ backgroundColor: '#43E6FC' }} className={styles.color} onClick={handleGroupColor}></div>
        <div style={{ backgroundColor: '#F19576' }} className={styles.color} onClick={handleGroupColor}></div>
        <div style={{ backgroundColor: '#0047FF' }} className={styles.color} onClick={handleGroupColor}></div>
        <div style={{ backgroundColor: '#6691FF' }} className={styles.color} onClick={handleGroupColor}></div>
      </label>
      <div className={styles.create} onClick={handleCreate}>Create</div>
    </div>
  )
}

export default NewNote;
