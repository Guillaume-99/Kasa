import logo from '../assets/images/kasa_logo_pink.png'
import '../assets/scss/header.scss'
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header>
            <img id="logoHeader" src={logo} alt="Kasa" />
            <ul className="nav">
                <li className="nav__accueil"><NavLink to={'/'} className={'nav-link'}>Accueil</NavLink></li>
                <li className="nav__apropos"><NavLink to={'/about'} className={'nav-link'}>À propos</NavLink></li>
            </ul>
        </header>
    );
}

export default Header;