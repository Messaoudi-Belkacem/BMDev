import PropTypes from 'prop-types';
import './project.css'

function Project({ projectName, description, imageSrc}) {
    return(
        <div className='__bmdev-project'>
            <div className='__bmdev-project-thumbnail'>
                <img src={imageSrc}></img>
            </div>
            <div className='__bmdev-project-content'>
                <h3>{projectName}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

Project.propTypes = {
    projectName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired
  };

export default Project