import PropTypes from 'prop-types';
import './project.css'
import Tag from '../tag/Tag';

function Project({ projectName, description, imageSrc, technologies}) {
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
            </div>
        </div>
    )
}

Project.propTypes = {
    projectName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired
  };

export default Project