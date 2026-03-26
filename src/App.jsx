import './App.scss';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />

      <main>
        {/* Affichage du contenu de la page  */}
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default App;
