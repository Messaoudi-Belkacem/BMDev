import {Technology} from '../../components';
import javascriptIcon from '../../assets/icon-javascript.svg'
import reactIcon from '../../assets/icon-react.svg'
import nodejsIcon from '../../assets/icon-nodejs.svg'
import javaIcon from '../../assets/icon-java.svg'
import springIcon from '../../assets/icon-spring.svg'
import cIcon from '../../assets/icon-c.svg'
import kotlinIcon from '../../assets/icon-kotlin.svg'
import composeIcon from '../../assets/icon-compose.svg'
import htmlIcon from '../../assets/icon-html.svg'
import cssIcon from '../../assets/icon-css.svg'
import pythonIcon from '../../assets/icon-python.svg'
import flaskIcon from '../../assets/icon-flask.svg'
import './skills.css'


function Skills() {
    const technologies = [
        { name: 'Javascript', imageSrc: javascriptIcon, href: 'https://www.javascript.com/' },
        { name: 'React', imageSrc: reactIcon, href: 'https://react.dev/' },
        { name: 'Node.js', imageSrc: nodejsIcon, href: 'https://nodejs.org/en' },
        { name: 'Java', imageSrc: javaIcon, href: 'https://www.java.com/en/' },
        { name: 'Spring', imageSrc: springIcon, href: 'https://spring.io/' },
        { name: 'C', imageSrc: cIcon, href: 'https://www.learn-c.org/' },
        { name: 'Kotlin', imageSrc: kotlinIcon, href: 'https://kotlinlang.org/' },
        { name: 'Jetpack Compose', imageSrc: composeIcon, href: 'https://developer.android.com/compose' },
        { name: 'HTML', imageSrc: htmlIcon, href: 'https://www.w3schools.com/html/' },
        { name: 'CSS', imageSrc: cssIcon, href: 'https://web.dev/learn/css' },
        { name: 'Python', imageSrc: pythonIcon, href: 'https://www.python.org/' },
        { name: 'Flask', imageSrc: flaskIcon, href: 'https://flask.palletsprojects.com/en/3.0.x/' },
      ];
    return(
        <div className='bmdev__skills'>
            <div className='bmdev__skills-tag'>
                <p>Skills</p>
            </div>
            <div className='bmdev__skills-text'>
                <p>The skills, tools and technologies I am really good at:</p>
            </div>
            <div className='bmdev__skills-technologies'>
                {technologies.map((tech, index) => (
                    <Technology key={index} imageSrc={tech.imageSrc} name={tech.name} />
                ))}
            </div>
        </div>
    )
}

export default Skills