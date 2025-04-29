import {useNavigate} from 'react-router-dom'
import { ROUTES } from '../../src/const/routes';
import {useEffect, useState} from 'react'

function Header() {
    const navigate = useNavigate();
    const onClickNavigateToFavoritoHandler = () =>{
        navigate(ROUTES.favoritos)
    }
    const onClickNavigateToHomeHandler = () =>{
        navigate(ROUTES.home)
    }

    const [contador, setContador] = useState(0);
    useEffect(() => {
        const favoritos = JSON.parse(localStorage.getItem("favoritos")) || {};
        const favoritosArray = Object.values(favoritos);
        setContador(favoritosArray.length);
        // console.log(favoritos.length)           // PROBAnDOO
        console.log(favoritosArray.length)
    }, []);
    return (
        <header className="bg-[#0d1b2aff] text-white p-4 mb-2">
            <div className="container mx-auto flex justify-between items-center p-4">
                <img className="w-30 cursor-pointer transition duration-300 hover:brightness-125 hover:contrast-150 hover:drop-shadow-lg" src="/logo/logo.png" alt="Logo" onClick={onClickNavigateToHomeHandler}/>
                <ul className="flex space-x-6 text-xl" >
                    <li className="cursor-pointer hover:text-gray-300" onClick={onClickNavigateToFavoritoHandler}>
                        Favoritos
                        <span className="p-2 ">
                            {contador > 0 && (
                            <span className="animate-ping absolute h-9 w-7 rounded-full bg-blue-400 opacity-75"></span>
                        )}
                        <span className="relative inline-flex bg-blue-600 text-white rounded-full px-2 py-1 text-lg">
                            {contador}
                        </span>
                    </span>
                    </li>
                    <li className="cursor-pointer hover:text-gray-300" onClick={onClickNavigateToHomeHandler}>Home</li>
                </ul>
            </div>
        </header>
    );
}

export default Header;