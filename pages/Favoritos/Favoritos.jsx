import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Card from '../../components/Card/Card';
import { useFavoritos } from '../../src/context/favsContext';
import { Earth } from 'lucide-react';

function Favoritos(){
    const [favs, setFavs] = useState([]);
    const [contador, setContador] = useState(0);
    useEffect(() => {
        const { favoritos: favoritos } = useFavoritos();
        setFavs(favoritos);
        setContador(favoritos.length);
    }, []);
    return (
        <div className='bg-radial-[at_50%_75%] from-sky-200 via-blue-300 to-indigo-900 to-90%'>
            <Header />
            <div className='flex-grow flex flex-wrap gap-4 p-4 justify-center'>
                    {contador > 0 ? (
                        favs.map((item) => (
                            <Card
                                key={item.date}
                                imageUrl={item.url || item.hdurl}
                                title={item.title}
                                date={item.date}
                                itemRef={item}
                            />
                        ))
                        ) : (
                        <div className='flex flex-col items-center justify-center h-full'>
                            <Earth size={80} className='opacity-50' />
                            <h1 className='text-2xl font-bold opacity-50'>No hay agregados a favoritos</h1>
                        </div>
                    )}
                <Footer/>
            </div>
        </div>
    );
}
export default Favoritos;