import React from "react";
import { useState,useEffect } from "react";
import styles from './UserNotes.module.css'
import UserNote from './UserNote'

function UserNotes({selectedNote}) {
  const [finalArray, setFinalArray] = useState([]);
  // const [notesArray, setNotesArray] = useState([]);
  let groupName = selectedNote.groupName;

  useEffect(() => {
    // Fetch data from localStorage after component mounts
    const data = JSON.parse(localStorage.getItem(groupName)) || [];
    // setNotesArray(data);

    // Create newNotesArray
    let newNotesArray = data.map((ele) => (
      <UserNote key={ele.time} time={ele.time} notes={ele.notes} />
    ));
    setFinalArray(newNotesArray);
  }, [finalArray,groupName]);

  return (
    <div className={styles.UserNotes}>
      {finalArray}
    </div>
  )
}

export default UserNotes;