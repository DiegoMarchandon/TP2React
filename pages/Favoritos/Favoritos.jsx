import {useNavigate} from 'react-router-dom'
import { ROUTES } from '../../src/const/routes';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function Favoritos(){
    const navigate = useNavigate();
    const onClickNavigateToHomeHandler = () =>{
        navigate(ROUTES.home)
    }
    return (
        <div className='min-h-screen flex flex-col'>
            <Header/>
            {/* Boludeando con el boton */}
            <button className=" border  cursor-pointer " onClick={onClickNavigateToHomeHandler}>Ir a Home</button>
            <h1 className=" text-xl text-center">Estas en FAVORITOS perra</h1>
            <Footer/>
        </div>
    );
}
export default Favoritos;