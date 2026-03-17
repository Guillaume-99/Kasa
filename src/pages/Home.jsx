import '../assets/scss/Home.scss';
// Inclure le titre
import Title from '../components/TitleBckgrd';
// Inclure les cards
import CardsList from '../components/CardsList';
function Home() {
    return (
        <div>
            {/* inclure le titre
            Inclure les cards   */}
            <Title />
            <CardsList />
        </div>
    );
}

export default Home;
