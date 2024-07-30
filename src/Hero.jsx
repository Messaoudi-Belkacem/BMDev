import { IoLocationOutline } from "react-icons/io5";

function Hero() {
    return(
        <div className="hero-section">
            <div className="column">
                <div className="content">
                    <h1>Hi, I’m Belkacem 👋</h1>
                    <p>
                        I'm a full stack developer (React.js & Node.js)
                        with a focus on creating (and occasionally designing)
                        exceptional digital experiences that are fast, accessible, 
                        visually appealing, and responsive. Even
                        though I have been creating web applications for over 7 years, 
                        I still love it as if it was something new.
                    </p>
                </div>
                <div className="group">
                    <div className="location">
                        <IoLocationOutline size={24}/>
                        <p>Batna, Algeria</p>
                    </div>
                    <div className="availability">
                        <p>Available for new projects</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero