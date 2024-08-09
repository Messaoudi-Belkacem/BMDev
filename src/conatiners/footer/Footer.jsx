import githubImage from '../../assets/github-icon.svg'
import facebookImage from '../../assets/facebook-icon.svg'
import instagramImage from '../../assets/instagram-icon.svg'
import linkedInImage from '../../assets/linkedin-icon.svg'
import mailImage from '../../assets/icon-mail.svg'
import callImage from '../../assets/icon-call.svg'
import copyImage from '../../assets/icon-copy.svg'
import './footer.css'

function Footer() {

    const phoneNumber = '+213 664813680';
    const email = 'wailmessaoudi806@gmail.com';

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                alert(`${text} copied to clipboard!`);
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    };

    return(
        <div className='bmdev__footer'>
            <div className='bmdev__footer-main'>
                <div className='bmdev__footer-main-head'>
                    <div className='bmdev__footer-main-head-tag'>
                        <p>Get in touch</p>
                    </div>
                    <div className='bmdev__footer-main-head-text'>
                        <p>
                            What’s next? Feel free to reach out to me if you're looking for<br/>
                            a developer, have a query, or simply want to connect.
                        </p>
                    </div>
                </div>
                <div className='bmdev__footer-main-contact'>
                    <div className='bmdev__footer-main-contact-email'>
                        <a href={`mailto:${email}`} className="email-link">
                            <img className='icon' src={mailImage}></img>
                        </a>
                        <p>{email}</p>
                        <img className='icon' src={copyImage} onClick={() => copyToClipboard(email)}></img>
                    </div>
                    <div className='bmdev__footer-main-contact-phone'>
                        <img className='icon' src={callImage}></img>
                        <p>{phoneNumber}</p>
                        <img className='icon' src={copyImage} onClick={() => copyToClipboard(phoneNumber)} ></img>
                    </div>
                </div>
                <div>
                    <div className='bmdev__footer-main-extra'>
                        <p>You may also find me on these platforms!</p>
                        <div className="bmdev__footer-main-extra-links">
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
                </div>
            </div>
            <div className='bmdev__footer-copyrights'>
                <p>© 2024 | Coded with ❤️️ by Messaoudi Blekacem</p>
            </div>
        </div>
    )
}

export default Footer