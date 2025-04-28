

const Card = ({ imageUrl, title, date, onClick }) => {
    return (
    <div onClick={onClick} class="w-[300px] min-h-[120px] bg-[#1b263bff] rounded-lg p-0 mb-2 flex flex-col justify-between items-start shadow-md transition-all duration-300 ease-in-out transform translate-y-0 hover:translate-y-[-4px] hover:shadow-lg cursor-pointer overflow-hidden">
        <img src={imageUrl} alt={title} class="w-full h-45 object-cover "/>
        <div class="w-full p-4">
            <h3 class="text-white text-center  text-lg ">{title}</h3>
            <p class="text-white text-lg text-center">{date}</p>
            <a href={`/Detalles/${date}`}>
                <button className="cursor-pointer border">Ver detalles</button>
            </a>
            <button className="border">Favoritos</button>
        </div>
    </div>
    );
};

export default Card;