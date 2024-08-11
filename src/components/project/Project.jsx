import PropTypes from 'prop-types';
import Tag from '../tag/Tag';
import OpenIcon from '../../assets/icon-open.svg'
import './project.css'


function Project({ projectName, description, imageSrc, href, technologies}) {
    return(
        <div className='__bmdev-project'>
            <div className='__bmdev-project-thumbnail'>
                <img src={imageSrc}></img>
            </div>
            <div className='__bmdev-project-content'>
                <h3>{projectName}</h3>
                <p>{description}</p>
                <div className='__bmdev-project-technologies'>
                    {technologies.map((item, index) => (
                        <Tag key={index} text={item}/>
                    ))}
                </div>
                <div className='__bmdev-project-content-action'>
                    <a href={href} target='_blank'>
                        <img className='icon' src={OpenIcon} />
                    </a>
                </div>
            </div>
        </div>
    )
}

Project.propTypes = {
    projectName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired
  };

export default Project