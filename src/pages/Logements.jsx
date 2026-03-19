import '../assets/scss/Logements.scss';
// création de la page logements
import { useParams, Navigate } from 'react-router-dom';
// appel json logement data
import logements from '../data/logements.json';
//appel Carousel
import Carousel from '../components/Carousel.jsx';
//appel Owner
import Owner from '../components/Owner.jsx';
//appel Rating
import Rating from '../components/Rating.jsx';
//appel LogementDescrip
import LogementDescrip from '../components/LogementDescrip.jsx';
//appel Accordion
import Accordion from '../components/Accordion.jsx';

function Logements() {
    const { id } = useParams();
    const logement = logements.find((logement) => logement.id === id);

    if (!logement) {
        return <Navigate to="/404" />;
    }


    return (

        <div className='logement'>

            <Carousel images={logement.pictures} />

            <div className='infoLogement'>

                <div>

                    <LogementDescrip logement={logement} />

                </div>

                <div className='owners'>

                    <Owner owner={logement.host} />

                    <Rating rate={logement.rating} />

                </div>


            </div>

            <div className='accordionSection'>

                <Accordion className='accordionSection__description' title="Description" >
                    <p>{logement.description}</p>
                </Accordion>

                <Accordion className='accordionSection__equipements' title="Equipements" >
                    <ul>
                        {logement.equipments.map((equipment, index) => (
                            <li key={index}>{equipment}</li>
                        ))}
                    </ul>
                </Accordion>

            </div>

        </div>

    )
}

export default Logements
