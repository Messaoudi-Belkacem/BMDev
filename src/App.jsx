import { Navbar } from './components'
import {Footer, Hero} from './conatiners'
import {Skills} from './conatiners'
import {Work} from './conatiners'
import './main.css'
import './scrollbar.css'
import React, { useState, useEffect } from 'react';

function App() {

  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return(
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <Hero darkMode={darkMode}/>
      <Skills/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default App
