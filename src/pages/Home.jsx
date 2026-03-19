import '../assets/scss/Home.scss';
// Inclure le titre
import Title from '../components/TitleBckgrd';
// Inclure les cards
import CardsList from '../components/CardsList';

import imgHome from '../assets/images/bckgrdTitle.png'
function Home() {
    return (
        <div>
            {/* inclure le titre
            Inclure les cards   */}
            <Title img={imgHome} children="Chez vous, partout et ailleurs" />
            <CardsList />
        </div>
    );
}

export default Home;
