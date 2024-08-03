import githubImage from '../../assets/github-icon.svg'
import facebookImage from '../../assets/facebook-icon.svg'
import mailImage from '../../assets/icon-mail.svg'
import callImage from '../../assets/icon-call.svg'
import copyImage from '../../assets/icon-copy.svg'
import './footer.css'

function Footer() {
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
                        <img src={mailImage}></img>
                        <p>wailmessaoudi806@gmail.com</p>
                        <img src={copyImage}></img>
                        <img src=''></img>
                    </div>
                    <div className='bmdev__footer-main-contact-phone'>
                        <img src={callImage}></img>
                        <p>+213 664813680</p>
                        <img src={copyImage}></img>
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