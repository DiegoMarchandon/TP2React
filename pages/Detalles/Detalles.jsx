import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../src/const/routes';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function Detalles() {
    const { date } = useParams(); // Extrae la fecha de la URL

    console.log(date);
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
        <div class='min-h-screen flex flex-col'>
            <Header />
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col items-center gap-6">
                    <img
                        src={detail.hdurl}
                        alt={detail.title}
                        className="w-[90%] max-w-4xl object-cover rounded-lg shadow-lg sm:w-3/4"
                    />
                    <h1 className="text-3xl font-bold text-gray-800 text-center sm:text-4xl">
                        {detail.title}
                    </h1>
                    <p className="text-gray-600 text-lg leading-relaxed max-w-3xl text-center">
                        {detail.explanation}
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default Detalles;