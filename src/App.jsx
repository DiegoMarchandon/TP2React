import './App.css'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Favoritos from '../pages/Favoritos/Favoritos';
import Detalles from '../pages/Detalles/Detalles';
import { ROUTES } from './const/routes';
import { useTranslation } from 'react-i18next';
import './i18n'; 
import NotFound from '../pages/NotFound/NotFound';
import { FavoritosProvider } from './context/favsContext';

function App() {

  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language); // Cambia el idioma
    localStorage.setItem('language', language); // Guarda la preferencia en localStorage
  };


  return (
    <Router>
      <FavoritosProvider>
      <div className="App">
        {/* Botones para cambiar el idioma */}
        {/* <div style={{ padding: '10px', textAlign: 'center' }}>
          <button onClick={() => changeLanguage('es')}>{t('language')} Español</button>
          <button onClick={() => changeLanguage('en')}>{t('language')} English</button>
        </div> */}
        {/* Contenido de la aplicación */}
        <Routes>
          {/* en Element y entre llaves van los components de cada pagina que creemos. Ej {<Home/>} o {<Contacto/>} */}
          <Route path={ROUTES.home} element={<Home/>} />
          <Route path={ROUTES.favoritos} element={<Favoritos/>} />
          <Route path={ROUTES.detalles} element={<Detalles/>} />
          <Route path={ROUTES.notfound} element={<NotFound/>} />
          {/* <Route path="/contact" element={<h1>Contact</h1>} /> */}
        </Routes>
      </div>
      </FavoritosProvider>
    </Router>
  )
}

export default App
