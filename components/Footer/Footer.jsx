import { Rocket, Twitter, Github } from 'lucide-react';

function Footer() {
    return (

        <footer className="bg-gray-900 text-gray-300 py-8  w-full ">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
                    <div className="text-center md:text-left">
                        <p className="text-sm">
                            Tecnicatura en desarrolo web<br></br> Programación web avanzada <br></br> 2025
                        </p>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <div className="flex justify-center gap-4">
                            <a href="https://twitter.com/NASA" target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm hover:text-white transition-colors"
                                title="Seguinos en Twitter"
                            > <Twitter size={20} className="text-gray-300 hover:text-white" />
                            </a>
                            <a href="https://github.com/DiegoMarchandon/TP-React2" target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm hover:text-white transition-colors"
                                title="Ver el repositorio en GitHub"
                            > <Github size={20} className="text-gray-300 hover:text-white" />
                            </a>
                        </div>
                        <div className="flex items-center gap-2">
                            <a href="https://api.nasa.gov/" target="_blank" rel="noopener noreferrer"
                                className="text-sm hover:text-white transition-colors"
                            > APIs abiertas de la NASA
                            </a> <Rocket size={20} className="text-gray-300" />
                        </div>
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
    );
}
export default Footer