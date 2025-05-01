import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../src/const/routes';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
// import { HeartPlus, SquareChevronRight } from 'lucide-react';
import { HeartPlus, SquareChevronRight } from 'lucide-react';
import { useFavoritos } from '../../src/context/favsContext';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function Detalles() {

    const { date } = useParams(); // Extrae la fecha de la URL
    const favItems = JSON.parse(localStorage.getItem("favoritos")) || [];
    const { favoritos, toggleFavorito } = useFavoritos();
    const [clave, setClave] = useState(0);

    const refrescarHijo = () => {
        setClave(clave + 1);
    };
    const estaEnFavoritos = favoritos.some(dato => dato.date === date);

    function handleCardClick() {
        favItems[Object.keys(favItems).length] = detail;
        localStorage.setItem("favoritos", JSON.stringify(favItems));
    }

    const navigate = useNavigate();
    const [detail, setDetail] = useState();
    const getDetail = async () => {
        try {
            const detailResult = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=4yQBISZwlEIF9qeQOdIsi5rrdCARw2U1Api9GdlH&date=${date}`,

            );
            if (!detailResult.ok) {
                navigate(ROUTES.notfound);
                return;
            }
            const detail = await detailResult.json();
            setDetail(detail);
        } catch (error) {
            return <h1>Error al cargar la página</h1>
        }
    };
    useEffect(() => {
        getDetail();
    }, [date]);
    if (detail === undefined) {
        return <h1>Loading....</h1>;
    }

    return (
        <div className='min-h-screen flex flex-col bg-radial-[at_50%_75%] from-sky-200 via-blue-300 to-indigo-900 to-90%'>
            <Header key={clave} />
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col items-center gap-6">
                    <div className="relative w-[90%] max-w-4xl sm:w-3/4">
                        <button onClick={() => toggleFavorito(detail, refrescarHijo)} className={`cursor-pointer absolute top-2 right-2 ${estaEnFavoritos ? 'text-green-500' :
                            'text-blue-500'} hover:text-red-500 transition-colors duration-300`}>
                            <HeartPlus size={35} strokeWidth={2} /></button>
                        <img
                            src={detail.hdurl}
                            alt={detail.title}
                            className="w-full object-cover rounded-lg shadow-lg"
                        />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-800 text-center sm:text-4xl">
                        {detail.title}
                    </h1>
                    <div className="text-gray-600 text-lg leading-relaxed max-w-3xl text-center">
                        {detail.explanation.split('\n').map((paragraph, index) => (
                            <p key={index} className="mb-4">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default Detalles;