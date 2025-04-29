import { HeartPlus, SquareChevronRight } from 'lucide-react';

const Card = ({ imageUrl, title, date, itemRef }) => {
    let arregloJSON = JSON.parse(localStorage.getItem("favoritos")) || [];

    /* función para agregar/eliminar los elementos a favoritos */
    function handleCardClick(itemKey){
        // Obtener datos actuales de favoritos desde localStorage
        console.log("tipo item:",typeof(itemRef)," item: ",itemRef, "arregloJSON: ",arregloJSON);
            // si el elemento ya existe (coinciden las keys)
            const indexFound = Object.values(arregloJSON).findIndex(dato => dato.date === itemKey);
            if(indexFound !== -1){
                // si ya existe, lo elimino del arreglo
                // arregloJSON.splice(indexFound,1);
                delete arregloJSON[indexFound];
            }else{
                // si no existe, lo agrego al arreglo
                arregloJSON[Object.keys(arregloJSON).length] = itemRef;
                // arregloJSON.push(itemRef);
            }
            // reseteo el arreglo de localStorage
            localStorage.setItem("favoritos",JSON.stringify(arregloJSON));
    }
    const estaEnFavoritos = arregloJSON.some(dato => dato.date === date);

    return (
    <div className="relative w-[300px] min-h-[120px] bg-[#1b263bff] rounded-lg p-0 mb-2 flex flex-col justify-between items-start shadow-md transition-all duration-300 ease-in-out transform translate-y-0 hover:translate-y-[-4px] hover:shadow-lg cursor-pointer overflow-hidden">
        <button onClick={handleCardClick} className={`absolute left-63 top-2 ${estaEnFavoritos ? 'text-green-500' : 'text-blue-500'} hover:text-red-500 transition-colors duration-300`}><HeartPlus size={35} strokeWidth={2} /></button>
        <img src={imageUrl} alt={title} className="w-full h-45 object-cover "/>
        <div className="w-full p-4">
            <h3 className="text-white text-center  text-lg ">{title}</h3>
            <p className="text-white text-lg text-center">{date}</p>
            <a href={`/Detalles/${date}`}>
                <button className="flex items-center justify-center gap-2 mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1">
                    Ver detalles
                    <SquareChevronRight size={20} />
                </button>
            </a>
        </div>
    </div>
    );
};

export default Card;