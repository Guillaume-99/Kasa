import '../assets/scss/Logements.scss';
// création de la page logements
import { useParams, Navigate } from 'react-router-dom';
// appel json logement data
import logements from '../data/logements.json';
//appel Carousel
import Carousel from '../components/Carousel.jsx';

function Logements() {
    const { id } = useParams();
    const logement = logements.find((logement) => logement.id === id);


    if (!logement) {
        return <Navigate to="/404" />;
    }





    // Note sur 5 étoiles
    const rating = Number(logement.rating)

    return (
        <div>

            <div>

                <Carousel images={logement.pictures} />
            </div>



            <div className='ownerLogement'>

                <div className='ownerLogement__host'>
                    <p className='ownerLogement__host--name'>{logement.host.name}</p>
                    <img className='ownerLogement__host--img' src={logement.host.picture} alt={logement.host.name} />
                </div>

                <div className='ownerLogement__rating'>
                    {Array.from({ length: 5 }, (_, index) => (
                        <i key={index} className={index < rating ? "fa-solid fa-star star--full" : "fa-solid fa-star star--empty"}></i>
                    ))}
                </div>

            </div>

        </div>


    )
}

export default Logements
