import '../assets/scss/Logements.scss';
// création de la page logements
import { useParams, Navigate } from 'react-router-dom';
// appel json logement data
import logements from '../data/logements.json';

import { useState } from 'react';

function Logements() {
    const { id } = useParams();
    const logement = logements.find((logement) => logement.id === id);
    const [currentPicture, setCurrentPicture] = useState(0);

    if (!logement) {
        return <Navigate to="/404" />;
    }

    //images carousel
    const pictures = logement.pictures
    //total images
    const total = pictures.length

    // action fleche droite
    const next = () => {
        setCurrentPicture(currentPicture === total - 1 ? 0 : currentPicture + 1)
    }


    // action fleche gauche
    const previous = () => {
        setCurrentPicture(currentPicture === 0 ? total - 1 : currentPicture - 1)
    }

    // Note sur 5 étoiles
    const rating = Number(logement.rating)

    return (
        <div>
            <div className='carousel'>

                <i className=" carousel__arrow carousel__arrow--left fa-solid fa-chevron-left " onClick={previous}></i>

                <i className=" carousel__arrow carousel__arrow--right fa-solid fa-chevron-right" onClick={next}></i>

                <img className='carousel__banner' src={pictures[currentPicture]} alt={logement.title} />

                <div className="carousel__counter">
                    {currentPicture + 1}/{total}
                </div>

            </div>

            <div className='infoLogement'>


                <div className='logementDescription'>

                    <h1 className='logementDescription__title'>{logement.title}</h1>
                    <p className='logementDescription__location'>{logement.location}</p>

                    <div className='logementDescription__tags'>
                        {logement.tags.map((tag, index) => (
                            <p key={index} className='logementDescription__tags--tag'>{tag}</p>
                        ))}
                    </div>

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

        </div>
    )
}

export default Logements