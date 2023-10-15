import React, { useState, useEffect } from 'react';
import DesktopMode from './Modes/DesktopMode';
import MobileMode from './Modes/MobileMode';
import './App.css'


function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

 
  useEffect(() => {
    const handleWindowResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <div className='App'>
      {screenWidth > 425 ? <DesktopMode /> : <MobileMode />}
    </div>
  )
  

}

export default App;
