import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoM from '../../assets/images/logo.jpg'
import LogoJ from '../../assets/images/juang.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoM} alt='logo' />
            <img className='sub-logo' src={LogoJ} alt='juang' />
        </Link>
        <nav>
            <NavLink exact='true' activeclassname='active' to='/'>
                <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='about-link' to='/about'>
                <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
            </NavLink>
        </nav>
        <ul>
        <li>
            <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/juan-galvan1/">
                <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
            </a>
        </li>
        <li>
            <a target="_blank" rel='noreferrer' href="https://www.github.com/Juang1908">
                <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
            </a>
        </li>
        <li>
            <a target="_blank" rel='noreferrer' href="https://www.juang1908.github.io/Portfolio-Website/">
                <FontAwesomeIcon icon={faYoutube} color='#4d4d4e' />
            </a>
        </li>
        </ul>
    </div>
)

export default Sidebar;