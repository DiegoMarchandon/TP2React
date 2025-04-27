import {useNavigate} from 'react-router-dom'
import { ROUTES } from '../../src/const/routes';

function Header() {
    
    const navigate = useNavigate();
    const onClickNavigateToFavoritosHandler = () =>{
        navigate(ROUTES.favoritos)
    }
    return (
        <header className="bg-[#0d1b2aff] text-white p-4 mb-2">
            <div className="container mx-auto flex justify-between items-center p-4">
                <img className="w-30 " src="/logo/logo.png" alt="Logo" />
                <ul className="flex space-x-6 text-xl" >
                    <li className="cursor-pointer hover:text-gray-300" onClick={onClickNavigateToFavoritosHandler}>Favoritos</li>
                    <li className="cursor-pointer hover:text-gray-300">Otra página??</li>
                </ul>
            </div>
        </header>
    );
}

export default Header;