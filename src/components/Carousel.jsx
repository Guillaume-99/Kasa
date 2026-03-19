import { useState } from 'react'
import '../assets/scss/Carousel.scss'


function Carousel({ images }) {

    const [currentPicture, setCurrentPicture] = useState(0);

    const hasManyPictures = images.length > 1;
    const handlePictureChange = (direction) => {
        let newCurrentPicture = currentPicture + direction;
        if (newCurrentPicture < 0) {
            newCurrentPicture = images.length - 1;
        } else if (newCurrentPicture >= images.length) {
            newCurrentPicture = 0;
        }
        setCurrentPicture(newCurrentPicture);
    };

    const previous = () => handlePictureChange(-1);
    const next = () => handlePictureChange(1);

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

