import HomeSeekerLogo from '../../assets/logo-home-seeker.svg'
import MoviesDBLogo from '../../assets/logo-moviesdb.svg'
import HomeSeekerCover from '../../assets/cover-home-seeker.png'
import MoviesDBCover from '../../assets/cover-moviesdb.png'
import {Project} from '../../components';
import './work.css'

function Work() {
    const projects = [
        { 
            projectName: 'HomeSeeker',
            imageSrc: HomeSeekerCover,
            technologies: ['Kotlin', 'Jetpack compose', 'Java', 'Spring', 'MYSQL', 'Retrofit', 'Room', 'Dagger hilt', 'Coil'],
            href: 'https://github.com/Messaoudi-Belkacem/HomeSeeker',
            description: 'Aliqua elit voluptate Lorem anim enim dolor nisi anim eu veniam culpa adipisicing anim. Laborum eu nisi proident pariatur sit mollit tempor quis laborum sunt. Laborum eiusmod qui est cillum cupidatat nostrud ipsum aliquip exercitation voluptate qui eu. Excepteur sint irure quis consectetur. Reprehenderit eu nostrud laborum velit Lorem dolor enim consequat laboris.' 
        },
        { 
            projectName: 'MoviesDB',
            imageSrc: MoviesDBCover,
            technologies: ['Kotlin', 'Jetpack compose', 'Retrofit', 'Room', 'Dagger hilt', 'Coil'],
            href: 'https://github.com/Messaoudi-Belkacem/MoviesDB',
            description: 'Excepteur occaecat aute nostrud ea fugiat consequat occaecat proident amet reprehenderit quis consectetur tempor labore. Eu ipsum laboris eu officia exercitation voluptate elit officia ut proident elit. Lorem sint aute laborum exercitation. Dolor minim nostrud velit sint sunt laborum aute cillum fugiat nulla. Commodo aliquip mollit laboris exercitation minim sit ad. Voluptate est consectetur nulla Lorem ut eiusmod reprehenderit eiusmod dolore. Ut quis consequat excepteur ut velit sunt cupidatat irure adipisicing id.' 
        },
      ];
    return(
        <section id='work'>
            <div className='bmdev__work'>
                <div className='bmdev__work-tag'>
                    <p>Work</p>
                </div>
                <div className='bmdev__work-text'>
                    <p>Some of the noteworthy projects I have built:</p>
                </div>
                <div className='bmdev__work-projects'>
                    {projects.map((item, index) => (
                        <Project 
                            key={index}
                            imageSrc={item.imageSrc}
                            projectName={item.projectName}
                            description={item.description}
                            technologies={item.technologies}
                            href={item.href}
                        />
                    ))}
                </div>
            </div>
        </section>   
    )
}

export default Work