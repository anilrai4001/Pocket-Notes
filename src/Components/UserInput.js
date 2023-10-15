import React, { useState } from 'react';
import styles from './UserInput.module.css';
import Enter from '../Assets/enter.png';

function UserInput({ selectedNote }) {
  const [inputText, setInputText] = useState('');

  const handleNotes = (e) => {
    setInputText(e.target.value);
  }
  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      saveNote();
    }
  }

  const handleSave = () => {
    saveNote();
  }

  function saveNote() {
    if (inputText.trim() !== '') {
      const newNotes = { time: new Date(), notes: inputText };
      let notesGroupData = JSON.parse(localStorage.getItem(selectedNote.groupName)) || [];
      notesGroupData = [...notesGroupData, { ...newNotes }];
      localStorage.setItem(selectedNote.groupName, JSON.stringify(notesGroupData));
      setInputText('');
    }
  }

  return (
    <div className={styles.UserInput}>
      <textarea
        placeholder='Enter your text here...........'
        onChange={handleNotes}
        onKeyDown={handleEnter}
        value={inputText}
      ></textarea>
      <img
        src={Enter}
        alt='Enter'
        onClick={handleSave}
        style={{ cursor: 'pointer' }}
      />
    </div>
  )
}

export default UserInput;
