import {Technology} from '../../components';
import javascriptIcon from '../../assets/icon-javascript.svg'
import reactIcon from '../../assets/icon-react.svg'
import nodejsIcon from '../../assets/icon-nodejs.svg'
import './skills.css'


function Skills() {
    const technologies = [
        { name: 'Javascript', imageSrc: javascriptIcon, href: '' },
        { name: 'React', imageSrc: reactIcon, href: '' },
        { name: 'Node.js', imageSrc: nodejsIcon, href: '' },
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