import '../assets/scss/LogementDescrip.scss';

function LogementDescrip({ logement }) {
    return (
        <div className="logementDescription">
            <h2 className="logementDescription__title">{logement.title}</h2>
            <p className='logementDescription__location'>{logement.location}</p>
            <div className="logementDescription__tags">
                {logement.tags.map((tag, index) => (
                    <p key={index} className="logementDescription__tags--tag">
                        {tag}
                    </p>
                ))}
            </div>
        </div>
    );
}

export default LogementDescrip;