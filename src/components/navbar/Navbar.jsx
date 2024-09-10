import MenuIcon from '../../assets/icon-menu.svg'
import CloseIcon from '../../assets/icon-close.svg'
import SunIcon from '../../assets/icon-sun.svg';
import MoonIcon from '../../assets/icon-moon.svg';
import Resume from'../../assets/cv.pdf'
import React, { useState } from 'react';
import './navbar.css';

function Navbar({ darkMode, toggleTheme }) {
    const [toggleMenu, setToggleMenu] = useState(false);

    return(
        <div className="navbar">
            <h1>BM</h1>
            <div className="navbar-right-content">
                <nav>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#work">Work</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
                <div id="vertical-divider"></div>
                <button onClick={toggleTheme} className="theme-toggle-button">
                    <img
                        src={SunIcon}
                        alt="Sun Icon"
                        className={`icon sun-icon ${darkMode ? 'hide' : 'show'}`}
                    />
                    <img
                        src={MoonIcon}
                        alt="Moon Icon"
                        className={`icon moon-icon ${darkMode ? 'show' : 'hide'}`}
                    />
                </button>
                <a href={Resume} download="Belkacem_Messaoudi_CV.pdf">
                    <button className="button">Download CV</button>
                </a>
            </div>
            <div className="navbar-menu">
                {toggleMenu
                ? <img src={CloseIcon} color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                : <img src={MenuIcon} color="#fff" size={27} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className="navbar-menu_container">
                        <hr />
                        <div className="navbar-menu_container-links">
                            <p><a href="#home">Home</a></p>
                            <p><a href="#skills">Skills</a></p>
                            <p><a href="#work">Work</a></p>
                            <p><a href="#contact">Contact</a></p>
                        </div>
                        <hr/>
                        <br />
                        <a className="button" href={Resume} download="Belkacem_Messaoudi_CV.pdf">
                            <button className="button">Download CV</button>
                        </a>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar