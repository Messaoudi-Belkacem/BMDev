import './navbar.css';

function Navbar() {
    return(
        <div className="navbar">
            <h1>BM</h1>
            <div className="navbar-right-content">
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Skills</a></li>
                        <li><a href="#">work</a></li>
                        <li><a href="#">contact</a></li>
                    </ul>
                </nav>
                <div id="vertical-divider"></div>
                <button className="navbar-right-content-button">Download CV</button>
            </div>
        </div>
    )
}

export default Navbar