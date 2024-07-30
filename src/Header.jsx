function Header() {
    return(
        <header>
            <h1>BM</h1>
            <div className="right-content">
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Skills</a></li>
                        <li><a href="#">work</a></li>
                        <li><a href="#">contact</a></li>
                    </ul>
                </nav>
                <div className="divider"></div>
                <button className="btn">Download CV</button>
            </div>
        </header>
    )
}

export default Header