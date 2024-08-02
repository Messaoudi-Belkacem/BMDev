import HomeSeekerLogo from '../../assets/logo-home-seeker.svg'
import {Project} from '../../components';
import './work.css'

function Work() {
    const projects = [
        { 
            projectName: 'HomeSeeker',
            imageSrc: HomeSeekerLogo,
            technologies: ['Kotlin', 'Jetpack compose', 'Java', 'Spring', 'MYSQL'],
            description: 'Aliqua elit voluptate Lorem anim enim dolor nisi anim eu veniam culpa adipisicing anim. Laborum eu nisi proident pariatur sit mollit tempor quis laborum sunt. Laborum eiusmod qui est cillum cupidatat nostrud ipsum aliquip exercitation voluptate qui eu. Excepteur sint irure quis consectetur. Reprehenderit eu nostrud laborum velit Lorem dolor enim consequat laboris.' },
      ];
    return(
        <div className='bmdev__work'>
            <div className='bmdev__work-tag'>
                <p>Work</p>
            </div>
            <div className='bmdev__work-text'>
                <p>Some of the noteworthy projects I have built:</p>
            </div>
            <div className='bmdev__work-projects'>
                {projects.map((item, index) => (
                    <Project key={index} imageSrc={item.imageSrc} projectName={item.projectName} description={item.description} technologies={item.technologies} />
                ))}
            </div>
        </div>
    )
}

export default Work