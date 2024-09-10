import { IoLocationOutline } from "react-icons/io5";
import { IoEllipse } from "react-icons/io5";
import myImageLight from '../../assets/professional-picture-light.png';
import myImageDark from '../../assets/professional-picture-dark.png';
import githubImage from '../../assets/github-icon.svg'
import facebookImage from '../../assets/facebook-icon.svg'
import instagramImage from '../../assets/instagram-icon.svg'
import linkedInImage from '../../assets/linkedin-icon.svg'
import './hero.css'

function Hero({darkMode}) {
    return(
        <section id="home">
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
                        <a href="https://github.com/Messaoudi-Belkacem" target="_blank" rel="noreferrer">
                            <img className="icon" src={githubImage} alt="Github" />
                        </a>
                        <a href="https://www.facebook.com/waile.messaoudi/" target="_blank" rel="noreferrer">
                            <img className="icon" src={facebookImage} alt="Facebook" />
                        </a>
                        <a href="https://www.instagram.com/waile.massudi/" target="_blank" rel="noreferrer">
                            <img className="icon" src={instagramImage} alt="Instagram" />
                        </a>
                        <a href="https://www.linkedin.com/in/belkacem-messaoudi-a95591230/" target="_blank" rel="noreferrer">
                            <img className="icon" src={linkedInImage} alt="LinkedIn" />
                        </a>
                    </div>
                </div>
                <div className="bmdev__hero-image">
                    <img src={darkMode ? myImageDark : myImageLight} alt="my profile pic" />
                </div>
            </div>
        </section>
    )
}

export default Hero