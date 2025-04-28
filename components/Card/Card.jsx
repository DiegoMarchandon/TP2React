import { HeartPlus } from 'lucide-react';

const Card = ({ imageUrl, title, date, onClick }) => {
    return (
    <div onClick={onClick} className="relative w-[300px] min-h-[120px] bg-[#1b263bff] rounded-lg p-0 mb-2 flex flex-col justify-between items-start shadow-md transition-all duration-300 ease-in-out transform translate-y-0 hover:translate-y-[-4px] hover:shadow-lg cursor-pointer overflow-hidden">
        <button className="absolute left-63 top-2 text-blue-500 hover:text-red-500 transition-colors duration-300"><HeartPlus size={35} strokeWidth={2} /></button>
        <img src={imageUrl} alt={title} className="w-full h-45 object-cover "/>
        <div className="w-full p-4">
            <h3 className="text-white text-center  text-lg ">{title}</h3>
            <p className="text-white text-lg text-center">{date}</p>
            <a href={`/Detalles/${date}`}>
                <button className="cursor-pointer border">Ver detalles</button>
            </a>
            <button className="border">Favoritos</button>
        </div>
    </div>
    );
};

export default Card;