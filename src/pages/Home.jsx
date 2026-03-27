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
            <Title img={imgHome} children={<h1 className='bckgrd__img--title'>Chez vous, partout et ailleurs</h1>} />
            <CardsList />
        </div>
    );
}

export default Home;
