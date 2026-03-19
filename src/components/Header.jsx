import logo from '../assets/images/kasa_logo_pink.png'
import '../assets/scss/header.scss'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <img id="logo" src={logo} alt="Kasa" />
            <ul className="nav">
                <li className="nav__accueil"><Link to={'/'}>Accueil</Link></li>
                <li className="nav__apropos"><Link to={'/about'}>À propos</Link></li>
            </ul>
        </header>
    );
}

export default Header;