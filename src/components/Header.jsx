import logo from '../assets/images/kasa_logo_pink.png'
import '../assets/scss/header.scss'

function Header() {
    return (
        <header>
            <img id="logo" src={logo} alt="Kasa" />
            <ul className="nav">
                <li className="nav__accueil"><a href="#">Accueil</a></li>
                <li className="nav__apropos"><a href="#">À propos</a></li>
            </ul>
        </header>
    );
}

export default Header;