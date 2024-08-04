import { IoLocationOutline } from "react-icons/io5";
import { IoEllipse } from "react-icons/io5";
import myImage from '../../assets/professional-picture.png';
import githubImage from '../../assets/github-icon.svg'
import facebookImage from '../../assets/facebook-icon.svg'
import instagramImage from '../../assets/instagram-icon.svg'
import linkedInImage from '../../assets/linkedin-icon.svg'
import './hero.css'

function Hero() {
    return(
        <div className="bmdev__hero">
            <div className="bmdev__hero-content">
                <div className="bmdev__hero-content-text">
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
                <div className="bmdev__hero-content-info">
                    <div className="bmdev__hero-content-info-location">
                        <IoLocationOutline className="icon"/>
                        <p>Batna, Algeria</p>
                    </div>
                    <div className="bmdev__hero-content-info-availability">
                        <IoEllipse className="icon"/>                       
                        <p>Available for new projects</p>
                    </div>
                </div>
                <div className="bmdev__hero-content-links">
                    <a href="https://github.com/Messaoudi-Belkacem" target="_blank">
                        <img src={githubImage}></img>
                    </a>
                    <a href="https://www.facebook.com/waile.messaoudi/" target="_blank">
                        <img src={facebookImage}></img>
                    </a>
                    <a href="https://www.instagram.com/waile.massudi/" target="_blank">
                        <img src={instagramImage}></img>
                    </a>
                    <a href="https://www.linkedin.com/in/belkacem-messaoudi-a95591230/" target="_blank">
                        <img src={linkedInImage}></img>
                    </a>
                </div>
            </div>
            <div className="bmdev__hero-image">
                <img src={myImage}></img>
            </div>
        </div>
    )
}

export default Hero