import './App.css'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Favoritos from '../pages/Favoritos/Favoritos';
import { ROUTES } from './const/routes';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* en Element y entre llaves van los components de cada pagina que creemos. Ej {<Home/>} o {<Contacto/>} */}
          <Route path={ROUTES.home} element={<Home/>} />
          <Route path={ROUTES.favoritos} element={<Favoritos/>} />
          <Route path="/contact" element={<h1>Contact</h1>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
