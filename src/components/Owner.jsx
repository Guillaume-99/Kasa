import '../assets/scss/Owner.scss'

function owner({ owner }) {



    return (

        <div className='ownerLogement'>

            <div className='ownerLogement__host'>
                <img className='ownerLogement__host--img' src={owner.picture} alt={owner} />
                <p className='ownerLogement__host--name'>{owner.name}</p>

            </div>


        </div>
    )
}

export default owner