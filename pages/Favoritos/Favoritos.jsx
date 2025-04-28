import {useNavigate} from 'react-router-dom'
import { ROUTES } from '../../src/const/routes';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Card from '../../components/Card/Card';
import { useEffect,useState } from 'react';

function Favoritos(){
    const navigate = useNavigate();
    const onClickNavigateToHomeHandler = () =>{
        navigate(ROUTES.home)
    }
    
    // const favs = JSON.parse(localStorage.getItem("favoritos")) || {};

/*     const favs = localStorage.getItem("favoritos");
    const [elem,setElem] = useState({});
    useEffect(() => {
        if(favs === null){
            // favs = elem;
            localStorage.setItem("favoritos",elem);
        }else{ //distinto de null

        }
    },[]); */
    // var resultado = Object.values(favs).length === 0 ? "ta vacio" : "hay elementos"; 
    return (
        <div className='min-h-screen flex flex-col'>
            <Header/>
            {/* Boludeando con el boton */}
            <button className=" border  cursor-pointer " onClick={onClickNavigateToHomeHandler}>Ir a Home</button>
            {/* {console.log("favoritos: ",favs)}; */}
            <Footer/>
        </div>
    );
}
export default Favoritos;