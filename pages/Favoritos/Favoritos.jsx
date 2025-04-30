import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Card from '../../components/Card/Card';
import { useFavoritos } from '../../src/context/favsContext';
import { Earth } from 'lucide-react';
function Favoritos(){

    const { favoritos } = useFavoritos();

    return (
        <div className='bg-radial-[at_50%_75%] from-sky-200 via-blue-300 to-indigo-900 to-90%'>
            <Header />
        <div className='flex-grow flex flex-wrap gap-4 p-4 justify-center'>
            {favoritos.length > 0 ? (
                
                favoritos.map((item) =>(
                    <Card
                    key={item.date}  
                    imageUrl={item.url || item.hdurl} 
                    title={item.title}
                    date={item.date}
                    itemRef={item}
                />
                ))
            ):(
                <div className='flex flex-col items-center justify-center h-full'>
                    <Earth size={80} className='opacity-50' />
                    <h1 className='text-2xl font-bold opacity-50'>No hay agregados a favoritos</h1>
                </div>
            )}
            {/* Boludeando con el boton */}
            {/* <button className=" border cursor-pointer" onClick={onClickNavigateToHomeHandler}>Ir a Home</button> */}
            {/* {console.log("favoritos: ",favs)}; */}
            <Footer/>
        </div>
        </div>
    );
}
export default Favoritos;