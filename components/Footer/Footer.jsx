
function Footer() {
    return (
        <footer className="bg-[#415a77ff] text-white py-6 mt-auto">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center text-center">
                    <div className="text-center  ">
                        <p className="text-lg ">© {new Date().getFullYear()} Todos los derechos reservados</p>
                        <p className="text-lg text-white-300 mt-1">Desarrollado con React y Tailwind CSS</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer