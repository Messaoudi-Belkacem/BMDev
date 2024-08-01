import { IoLocationOutline } from "react-icons/io5";
import { IoEllipse } from "react-icons/io5";
import myImage from '../../assets/Pro.jpg';
import './hero.css'

function Hero() {
    return(
        <div className="bmdev__hero">
            <div className="bmdev__hero-content">
                <h1>Hi, I’m Belkacem 👋</h1>
                <p>
                    I'm a full stack developer (React.js & Node.js)
                    with a focus on creating (and occasionally designing)
                    exceptional digital experiences that are fast, accessible, 
                    visually appealing, and responsive. Even                        
                    though I have been creating web applications for over 7 years, 
                    I still love it as if it was something new.
                </p>
                <div className="bmdev__hero-content-location">
                    <IoLocationOutline className="icon"/>
                    <p>Batna, Algeria</p>
                </div>
                <div className="bmdev__hero-content-availability">
                    <IoEllipse className="icon"/>                       
                    <p>Available for new projects</p>
                </div>
            </div>
        </div>
    )
}

export default Hero