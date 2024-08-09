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
                    I'm an Android developer with over a year of experience,
                    specializing in Jetpack Compose, Kotlin, and Java Spring.
                    I'm passionate about crafting mobile experiences that are seamless, engaging, and performance-driven.
                    My focus is on building applications that are not only highly functional but also intuitive and visually striking.
                    Despite my relatively short time in the industry, I approach each project with enthusiasm and a commitment to innovation that continues to drive my passion for development.
                    </p>
                </div>
                <div className="bmdev__hero-content-info">
                    <div className="bmdev__hero-content-info-location">
                        <IoLocationOutline className="location-icon"/>
                        <p>Batna, Algeria</p>
                    </div>
                    <div className="bmdev__hero-content-info-availability">
                        <div className="ellipse-icon-div">
                            <IoEllipse className="ellipse-icon"/> 
                        </div>                   
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