import Paysage from '../assets/images/about_img.png'
import '../assets/scss/About.scss'

function About() {
    return (
        <div>
            <div className='banner'>
                <img className='banner__paysage' src={Paysage} alt="montagne" />
            </div>
            <div className='contener'>

                <div className='contener__widget'>
                    <p>Fiabilité</p><i class="fa-solid fa-chevron-up"></i>
                </div>

                <div className='contener__widget'>
                    <p>Respect</p><i class="fa-solid fa-chevron-up"></i>
                </div>

                <div className='contener__widget'>
                    <p>Service</p><i class="fa-solid fa-chevron-up"></i>
                </div>

                <div className='contener__widget'>
                    <p>Sécurité</p><i class="fa-solid fa-chevron-up"></i>
                </div>

            </div>
        </div>
    );
}

export default About;
