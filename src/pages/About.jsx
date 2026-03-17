import Paysage from '../assets/images/about_img.png'
import '../assets/scss/About.scss'
import Accordion from '../components/Accordion'

function About() {
    return (
        <div>
            <div className='banner'>
                <img className='banner__paysage' src={Paysage} alt="montagne" />
            </div>
            <div className='contener'>

                <Accordion title="Fiabilité">Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</Accordion>

                <Accordion title="Respect">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</Accordion>

                <Accordion title="Service">La qualité du service est au cœur de notre engagement chez kasa. Nous veillons à ce que chaque intéraction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance. </Accordion>

                <Accordion title="Sécurité">La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien qu'à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les stantards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</Accordion>

            </div>
        </div>
    );
}

export default About;
