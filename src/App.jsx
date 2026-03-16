import './App.scss';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <header>
        <h1>Kasa</h1>
        {/* plus tard : nav avec liens */}
      </header>

      <main>
        <Outlet />  {/* ici arrivent Home, About, etc. */}
      </main>
    </div>
  );
}

export default App;
