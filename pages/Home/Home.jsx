import {useNavigate} from 'react-router-dom'
import { ROUTES } from '../../src/const/routes';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';

function Home(){
    const navigate = useNavigate();
    const onClickNavigateToFavoritosHandler = () =>{
        navigate(ROUTES.favoritos)
    }
    
    const [apod, setApod] = useState([]);
    useEffect(() => {
        const fetchApod = async () => {
            try {
                const response = await fetch(
                    "https://api.nasa.gov/planetary/apod?api_key=G57yQ8LZkubQWfqf9tKr81jGNhi3CsM39XtIJiQu&count=10"
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
            <div class="flex-grow flex flex-wrap gap-4 p-4 justify-center">
            {apod.map((item) => (
                <Card
                    key={item.date}  
                    imageUrl={item.url || item.hdurl} 
                    title={item.title}
                    date={item.date}
                    onClick={() => handleCardClick(item)} //de ejemplo
                />
            ))}
            </div>
            {/* Boludeando con el boton */}
            <button className=" border cursor-pointer"  onClick={onClickNavigateToFavoritosHandler}> ir a Favoritos</button>
                <h1  className=" text-xl text-center">Contenido del Homee</h1>
            <Footer/>
        </div>
    );
}
export default Home;