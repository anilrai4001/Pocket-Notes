import React from 'react'
import styles from './DefaultSection.module.css'
import backgroundImage from '../Assets/background-image.png'
import lockImage from '../Assets/lock.png'

function DefaultSection() {
  return (
    <div className={styles.DefaultSection}>
      <div className={styles.defaultData}>
        <img src={backgroundImage} alt='Default Background' width='550px'/>
        <div style={{fontSize:'40px'}}>Pocket Notes</div>
        <div style={{fontSize:'19px',textAlign:'center'}}>
          Send and receive messages without keeping your phone online.
          Use Pocket Notes on up to 4 linked devices and 1 mobile phone
        </div>
      </div>
      <div style={{marginTop:'13%', display:'flex',gap:'5px',fontSize:'16px'}}>
        <img src={lockImage} alt='lock' height='16px'/>
        <span>end-to-end encrypted</span>
        </div>

    </div>
  )
}

export default DefaultSection