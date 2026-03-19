import { useState } from 'react'
import '../assets/scss/Carousel.scss'


function Carousel({ images }) {

    const [currentPicture, setCurrentPicture] = useState(0);

    const hasManyPictures = images.length > 1;
    const previous = () => setCurrentPicture(currentPicture - 1);
    const next = () => setCurrentPicture(currentPicture + 1);

    return (
        <div className="carousel">
            {hasManyPictures && (
                // SI il y a plus d'une image ALORS:
                <>
                    <i
                        className="carousel__arrow carousel__arrow--left fa-solid fa-chevron-left"
                        onClick={previous}
                    ></i>
                    <i
                        className="carousel__arrow carousel__arrow--right fa-solid fa-chevron-right"
                        onClick={next}
                    ></i>
                    <div className="carousel__counter">
                        {currentPicture + 1}/{images.length}
                    </div>
                </>
            )}

            <img className="carousel__banner" src={images[currentPicture]} alt={images.title} />




        </div>
    );
}

export default Carousel;

