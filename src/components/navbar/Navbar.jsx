import MenuIcon from '../../assets/icon-menu.svg'
import CloseIcon from '../../assets/icon-close.svg'
import React, { useState } from 'react';
import './navbar.css';

function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return(
        <div className="navbar">
            <h1>BM</h1>
            <div className="navbar-right-content">
                <nav>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#work">Work</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
                <div id="vertical-divider"></div>
                <button className="button">Download CV</button>
            </div>
            <div className="navbar-menu">
                {toggleMenu
                ? <img src={CloseIcon} color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                : <img src={MenuIcon} color="#fff" size={27} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className="navbar-menu_container">
                        <hr/>
                        <div className="navbar-menu_container-links">
                            <p><a href="#home">Home</a></p>
                            <p><a href="#about">About</a></p>
                            <p><a href="#skills">Skills</a></p>
                            <p><a href="#work">Work</a></p>
                            <p><a href="#contact">Contact</a></p>
                        </div>
                        <hr/>
                        <button className="button">Download CV</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar