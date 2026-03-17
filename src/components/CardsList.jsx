import '../assets/scss/CardsList.scss';

//Appel json logement data
import logements from '../data/logements.json';

//maping pour cards
function CardsList() {
    return (
        <div className="cards-list">
            {logements.map((logement) => (
                <div key={logement.id} className="cards-list__card">
                    <img src={logement.cover} alt={logement.title} />
                    <div className="cards-list__card--content">
                        <h3>{logement.title}</h3>

                    </div>
                </div>
            ))}
        </div>
    );
}

export default CardsList;