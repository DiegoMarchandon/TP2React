import {useNavigate} from 'react-router-dom'
import { ROUTES } from '../../src/const/routes';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';

function Home(){
    // variable que va a almacenar los items en favoritos
    // const itemsFavoritos = {};
    const favItems = JSON.parse(localStorage.getItem("favoritos")) || {};
    
    const navigate = useNavigate();
    const onClickNavigateToFavoritosHandler = () =>{
        navigate(ROUTES.favoritos)
    }
    
    const [apod, setApod] = useState([]);
    useEffect(() => {


        const fetchApod = async () => {
            try {
                const response = await fetch(
                    "https://api.nasa.gov/planetary/apod?api_key=G57yQ8LZkubQWfqf9tKr81jGNhi3CsM39XtIJiQu&count=12"
                );
                const data = await response.json();
                console.log(data); //probandoo
                setApod(data); 
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
    
        fetchApod(); 
    }, []);



    return (
        <div className="min-h-screen flex flex-col bg-[#dfe1e1ff]">
            <Header />
            <div className="flex-grow flex flex-wrap gap-4 p-4 justify-center">
            {apod.map((item) => (
                <Card
                    key={item.date}  
                    imageUrl={item.url || item.hdurl} 
                    title={item.title}
                    date={item.date}
                    arregloJSON={favItems}
                    itemRef = {item} //de ejemplo
                />
            ))}
            </div>
            {/* Boludeando con el boton */}
            {/* <button className=" border cursor-pointer"  onClick={onClickNavigateToFavoritosHandler}> ir a Favoritos</button> */}
            <Footer/>
        </div>
    );
}
export default Home;