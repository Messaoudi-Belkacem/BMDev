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
            description: 'Home Seeker is an Android app developed as a school project to simplify finding and managing home listings. Built with Jetpack Compose, it delivers a responsive and user-friendly interface. I independently implemented the backend using Java Spring and MySQL, focusing on efficient and scalable data management. This project allowed me to enhance my technical skills by exploring modern technologies and combining intuitive design with robust functionality.' 
        },
        { 
            projectName: 'MoviesDB',
            imageSrc: MoviesDBCover,
            technologies: ['Kotlin', 'Jetpack compose', 'Retrofit', 'Room', 'Dagger hilt', 'Coil'],
            href: 'https://github.com/Messaoudi-Belkacem/MoviesDB',
            description: 'Movies DB is an Android app developed to explore the latest tools and libraries in Android development while offering a seamless way to browse and manage movie data. Built with Jetpack Compose, the app features a modern, declarative UI. It utilizes Dagger Hilt for dependency injection, Retrofit and OkHttp for API interactions, and Coil for fast image loading. Paging 3 ensures smooth data handling from the TMDB API, while Room and DataStore manage local and preference data efficiently. Lottie Animations and ConstraintLayout Compose add dynamic visuals and complex layouts, creating a polished and responsive user experience. This project allowed me to deepen my skills with modern technologies and overcome challenges such as TMDB API limitations.' 
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