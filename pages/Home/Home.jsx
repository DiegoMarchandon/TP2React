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
    const [orden, setOrden] = useState('');

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

    // Ordenar los elementos según el filtro de fecha
    const handleOrder = (event) => {
        let valorSeleccionado = event.target.value;
        setOrden(valorSeleccionado); // Guardamos el valor seleccionado en el estado
    };

    // Función para ordenar los elementos apod según el filtro
    const ordenarApod = (apod) => {
        if (orden === 'masNueva') {
            return apod.sort((a, b) => new Date(b.date) - new Date(a.date));
        } else if (orden === 'masVieja') {
            return apod.sort((a, b) => new Date(a.date) - new Date(b.date));
        }
        return apod; // Si no hay orden, devolvemos los elementos sin modificar
    };

    // Aplica el orden a los elementos cuando cambia el estado `apod` o `orden`
    const apodOrdenado = ordenarApod(apod);

    window.addEventListener('scroll', function() {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            console.log('El usuario ha llegado al final de la página');
        }
    });
    

    return (
        <div className=" relative min-h-screen overflow-hidden">
            <video autoPlay muted loop className="fixed top-0 left-0 w-full h-full object-cover -z-10">
                <source src="/logo/espacio2.mp4" type="video/mp4" />
            </video>
            <Header key={clave} />
            <div className="relative w-full h-[113vh] overflow-visible">
                <img src="../../public/logo/agujeroNegro.png" alt="Agujero Negro" className="w-full h-full object-cover opacity-80"
                    style={{
                        WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
                        maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
                    }}
                />
                
               {/*texto encima, alineado a un costado */}
                <div className="absolute top-0/4 left-5 max-w-lg text-white">
                    <h2 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg mb-4">
                        APOD
                    </h2>
                    <p className="text-lg md:text-2xl font-semibold drop-shadow-md">
                        {t('home.informacion')}
                    </p>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full gap-6 py-10">
            <div className="text-center space-y-4">
                <h3 className="text-2xl text-white font-semibold drop-shadow-md opacity-80">
                    {t('home.instruction')}
                </h3>
            </div>

            {/*input de fecha + boton */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
                <input type="date" value={filtroApod} onChange={handleChange} className="bg-white w-40 rounded-md px-4 py-2 shadow-md opacity-80 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
                <button onClick={handleReset} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-md transition transform hover:-translate-y-1 shadow-md opacity-90">
                    {t('home.boton')}
                </button>
            </div>

            {/*mensaje de error si existe */}
            {errorMessage && (
                <p className="text-red-400 font-semibold mt-2">
                    {errorMessage}
                </p>
            )}

            {/*select para orden */}
            <div className="flex flex-col items-center gap-3 mt-6">
                <h6 className="text-md text-gray-300 font-semibold drop-shadow-md">
                {t('home.instruction2')}
                </h6>
                <select name="selectAntiguedad" id="selectAntiguedad" onClick={handleOrder} className="bg-white rounded-xl px-4 py-2 w-36 shadow-md opacity-80 focus:outline-none focus:ring-2 focus:ring-blue-400">
                    <option value=""></option>
                    <option value="masNueva">Más nueva</option>
                    <option value="masVieja">Más antigua</option>
                </select>
            </div>
            </div>
            <div className="flex-grow flex flex-wrap gap-4 p-4 justify-center">
                {
                // console.log(apod),
                apodOrdenado.map((item) => (
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
            {/* <p className='text-white'>final de pagina</p> */}
            <button className='block mx-auto gap-2 mt-4 mb-5 w-md bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1' onClick={fetchApod}>{t('home.botonTraer')}</button>
            <Footer />
        </div>
    );
}
export default Home;