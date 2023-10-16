import React, { useState, useEffect } from 'react';
import styles from './NewGroup.module.css';

function NewGroup({ setNewGroup }) {
  const [groupName, setGroupName] = useState('');
  const [groupColor, setGroupColor] = useState('');
  
  const colorOptions = ['#B38BFA', '#FF79F2', '#43E6FC', '#F19576', '#0047FF', '#6691FF'];

  const handleCreate = () => {
    if (groupName && groupColor) {
      const notesGroups = JSON.parse(localStorage.getItem('NotesGroups')) || [];
      notesGroups.push({ groupName, groupColor });
      localStorage.setItem('NotesGroups', JSON.stringify(notesGroups));
      setNewGroup(false);
    }
  };

  const handleGroupName = (e) => {
    const newGroupName = e.target.value;
    setGroupName(newGroupName);
  };

  const handleGroupColor = (selectedColor) => {
    setGroupColor(selectedColor);
  };

  

  useEffect(() => {
    const handleMouseDown = (e) => {
      if (!e.target.closest(`.${styles.createGroup}`)) {
        setNewGroup(false);
      }
    };
    document.addEventListener('mousedown', handleMouseDown);
    return () => document.removeEventListener('mousedown', handleMouseDown);
  }, []);

  return (
    <div className={styles.NewGroup}>
      <div className={styles.createGroup}>
        <div>Create New Notes Group</div>
        <label>
          <span>Group Name</span>
          <input
            type="text"
            placeholder="Enter your group name...."
            value={groupName}
            onChange={handleGroupName}
          />
        </label>
        <label>
          <span>Choose Color</span>
          <div className={styles.colorContainer}>
            {colorOptions.map((color, index) => (
              <div
                key={index}
                style={{ backgroundColor: color }}
                className={`${styles.color} ${color === groupColor ? styles.border : ''}`}
                onClick={() => handleGroupColor(color)}
              ></div>
            ))}
          </div>
        </label>
        <div className={styles.create} onClick={handleCreate}>
          Create
        </div>
      </div>
    </div>
  );
}

export default NewGroup;
