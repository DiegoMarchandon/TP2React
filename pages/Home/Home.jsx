import {useNavigate} from 'react-router-dom'
import { ROUTES } from '../../src/const/routes';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function Home(){
    const navigate = useNavigate();
    const onClickNavigateToFavoritosHandler = () =>{
        navigate(ROUTES.favoritos)
    }
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            {/* Boludeando con el boton */}
            <button className=" border cursor-pointer"  onClick={onClickNavigateToFavoritosHandler}> ir a Favoritos</button>
                <h1  className=" text-xl text-center">Contenido del Homee</h1>
            <Footer/>
        </div>
    );
}
export default Home;