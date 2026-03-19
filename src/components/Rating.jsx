import '../assets/scss/Rating.scss'


function rating({ rate }) {

    // Note sur 5 étoiles
    const rating = Number(rate);

    return (

        <div className='star'>
            {Array.from({ length: 5 }, (_, index) => (
                <i key={index} className={index < rating ? "fa-solid fa-star star__full" : "fa-solid fa-star star__empty"}></i>
            ))}
        </div>
    )
}

export default rating