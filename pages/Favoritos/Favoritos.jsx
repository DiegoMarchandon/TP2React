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

    const favs = JSON.parse(localStorage.getItem("favoritos")) || [];

    return (
        <div>
            <Header />
        <div className='flex-grow flex flex-wrap gap-4 p-4 justify-center'>
            {Object.values(favs).map((item) =>(
                <Card
                key={item.date}  
                imageUrl={item.url || item.hdurl} 
                title={item.title}
                date={item.date}
                itemRef={item}
            />
            ))}
            {/* Boludeando con el boton */}
            {/* <button className=" border cursor-pointer" onClick={onClickNavigateToHomeHandler}>Ir a Home</button> */}
            {/* {console.log("favoritos: ",favs)}; */}
            <Footer/>
        </div>
        </div>
    );
}
export default Favoritos;