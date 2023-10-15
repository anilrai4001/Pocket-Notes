import React from 'react'
import styles from './EditNotes.module.css'
import DefaultSection from './DefaultSection';
import DisplayNotes from './DisplayNotes';

function EditNotes({defaultSection,selectedNote}) {
    

    if(defaultSection===true){
        return <DefaultSection/>
    }
    return (
        <div className={styles.EditNotes}>
            <DisplayNotes selectedNote={selectedNote} />
        </div>
    )
}

export default EditNotes