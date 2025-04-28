
function Footer() {
    return (
        // <div className="flex flex-col justify-between min-h-screen">
        //     <div className="flex-grow">
        <footer className="bg-gray-900 text-gray-300 py-8 fixed bottom-0 w-full">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
                    <div className="text-center md:text-left">
                        <p className="text-sm">
                            Tecnicatura en desarrolo web<br></br> Programación web avanzada <br></br> 2025
                        </p>
                    </div>
                    <div className="flex flex-col items-center gap-2 md:flex-row md:gap-6">
                        <a href="https://api.nasa.gov/" target="_blank"
                            rel="noopener noreferrer" className="text-sm hover:text-white transition-colors">
                            APIs abiertas de la NASA
                        </a>
                    </div>
                </div>
                <hr className="my-6 border-gray-700" />
                <div className="text-center">
                    <p className="text-xs text-gray-500">
                        Imágenes y datos proporcionados por la NASA. Desarrollado con React y Tailwind CSS.
                    </p>
                </div>
            </div>
        </footer>
        //     </div>
        // </div>
    );
}
export default Footer