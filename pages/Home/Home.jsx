import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import { useTranslation } from 'react-i18next';

function Home() {
    const { t } = useTranslation();
    const [clave, setClave] = useState(0);
    const [apod, setApod] = useState([]);
    const [filtroApod, setFiltroApod] = useState('');

    const refrescarHijo = () => {
        setClave(clave + 1);
    };
    const fetchApod = async () => {
        try {
            const response = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=G57yQ8LZkubQWfqf9tKr81jGNhi3CsM39XtIJiQu&count=12`
            );
            const data = await response.json();
            setApod(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchApod();
    }, []);

    //cuando cambia la fecha hago otra llamada
    const handleChange = async (event) => {
        const selectedDate = event.target.value;
        setFiltroApod(selectedDate);
        if(selectedDate === ''){
            //si no hay fecha vuelve a traer 12 randomss
            setApod(data);
        }else{
            //si se elige una fecha traer solo esa en especifica
            try{
                const response = await fetch(
                    `https://api.nasa.gov/planetary/apod?api_key=G57yQ8LZkubQWfqf9tKr81jGNhi3CsM39XtIJiQu&date=${selectedDate}`
                );
                const data = await response.json();
                setApod([data]); //lo pongo como array para que funcione el putoo map
            }catch(error){
                console.error("Error fetching data:", error);
            }
        }
    };
    //elimina la fecha buscada y se ejecuta de nuevo el fetch para traer 12 randomsss
    const handleReset = () => {
        setFiltroApod(''); 
        fetchApod();
    };

    return (
        <div className="min-h-screen flex flex-col bg-radial-[at_50%_75%] from-sky-200 via-blue-300 to-indigo-900 to-90%">
            <Header key={clave} />
            <div className='flex flex-col items-center justify-center w-full gap-4'>
                <input type="date" value={filtroApod} onChange={handleChange} className=" bg-white w-40 rounded-sm w-xs size-8 opacity-70" />
                <button className='w-34 mt-1 mb-4 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer' onClick={handleReset}>Limpiar fecha</button>
            </div>
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