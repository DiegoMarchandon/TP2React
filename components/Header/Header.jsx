import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../src/const/routes';
import { useEffect, useState } from 'react'
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

function Header() {
    const { t } = useTranslation();

    const navigate = useNavigate();
    const onClickNavigateToFavoritoHandler = () => {
        navigate(ROUTES.favoritos)
    }
    const onClickNavigateToHomeHandler = () => {
        navigate(ROUTES.home)
    }

    const [contador, setContador] = useState(0);
    useEffect(() => {
        const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
        setContador(favoritos.length);
    }, []);

    const handleLanguageChange = (event) => {
        const newLanguage = event.target.value;
        i18next.changeLanguage(newLanguage);
        localStorage.setItem("language", newLanguage); // Guarda el idioma seleccionado
    };
    return (
        <header className="bg-[#0d1b2aff] text-white p-4 mb-2">
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center p-4 space-y-4 sm:space-y-0">
                <img className="w-24 sm:w-30 cursor-pointer transition duration-300 hover:brightness-125 hover:contrast-150 hover:drop-shadow-lg"
                    src="/logo/logo.png" alt="Logo" onClick={onClickNavigateToHomeHandler} />
                <ul className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 text-lg sm:text-xl w-full sm:w-auto">
                    <li className="cursor-pointer hover:text-gray-300 flex items-center space-x-2"
                        onClick={onClickNavigateToFavoritoHandler} >
                        <span>{t('header.favorites')}</span>
                        <span className="p-2 relative">
                            {contador > 0 && (
                                <span className="animate-ping absolute h-9 w-7 rounded-full bg-blue-400 opacity-75"></span>
                            )}
                            <span className="relative inline-flex bg-blue-600 text-white rounded-full px-2 py-1 text-sm sm:text-lg">
                                {contador}
                            </span>
                        </span>
                    </li>
                    <li
                        className="cursor-pointer hover:text-gray-300"
                        onClick={onClickNavigateToHomeHandler}>
                        Home
                    </li>
                </ul>
                {/* Selector de idioma */}
                <select className="bg-blue-600 text-white p-2 rounded-md cursor-pointer w-32 sm:w-auto"
                    onChange={handleLanguageChange} defaultValue={localStorage.getItem("language") || "en"}>
                    <option value="en">English</option>
                    <option value="es">Español</option>
                </select>
            </div>
        </header>
    );
}
export default Header;