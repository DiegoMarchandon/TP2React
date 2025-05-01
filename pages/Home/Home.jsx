import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../src/const/routes';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import { useTranslation } from 'react-i18next';

function Home() {
    const { t } = useTranslation();

    const navigate = useNavigate();
    const onClickNavigateToFavoritosHandler = () => {
        navigate(ROUTES.favoritos)
    }
    const [clave, setClave] = useState(0);

    const refrescarHijo = () => {
        setClave(clave + 1);
    };

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
        <div className="min-h-screen flex flex-col bg-radial-[at_50%_75%] from-sky-200 via-blue-300 to-indigo-900 to-90%">
            <Header key={clave} />
            <h1>{t('home.description')}</h1>
            <div className="flex-grow flex flex-wrap gap-4 p-4 justify-center">
                {apod.map((item) => (
                    <Card
                        key={item.date}
                        imageUrl={item.url || item.hdurl}
                        title={item.title}
                        date={item.date}
                        itemRef={item} //de ejemplo
                        refrescar = {refrescarHijo}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
}
export default Home;