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
    const [errorMessage, setErrorMessage] = useState('');

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
                if (!response.ok) {
                    throw new Error(`Error ${response.status}: La fecha ingresada no es válida.`);
                }            
                const data = await response.json();
                setApod([data]); //lo pongo como array para que funcione el putoo map
                setErrorMessage(""); //limpiamos el mensaje de error cuando la solicitud es exitosa
            }catch(error){
                // console.error("Error fetching data:", error);
                setErrorMessage(error.message); // Guardo el mensaje de error en el estado
            }
        }
    };
    //elimina la fecha buscada y se ejecuta de nuevo el fetch para traer 12 randomsss
    const handleReset = () => {
        setFiltroApod(''); 
        fetchApod();
    };

    return (
        <div className=" relative min-h-screen overflow-hidden">
            <video autoPlay muted loop className="fixed top-0 left-0 w-full h-full object-cover -z-10">
                <source src="../../public/logo/espacio2.mp4" type="video/mp4" />
            </video>
            <Header key={clave} />
            <h1 className="text-5xl font-extrabold text-blue-100 mb-4 drop-shadow-lg text-center  opacity-60">{t('welcome')}</h1>
            <h3 className="text-xl mb-8 text-center text-white font-bold drop-shadow-md  opacity-70">{t('home.instruction')}</h3>
            <div className='flex flex-col items-center justify-center w-full gap-4'>
                {errorMessage && <p className="text-red-500 font-semibold">{errorMessage}</p>}
                <input type="date" value={filtroApod} onChange={handleChange} className=" bg-white w-40 rounded-sm w-xs size-8 opacity-70" />
                <button className='w-34 mt-1 mb-4 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer opacity-70' onClick={handleReset}>{t('home.boton')}</button>
            </div>
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