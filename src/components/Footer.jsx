import '../assets/scss/footer.scss';
import logo from '../assets/images/kasa_logo_white.png';

function Footer() {
    return (
        <footer>
            <img id="logo" src={logo} alt="Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;