import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Card from '../../components/Card/Card';
import { useFavoritos } from '../../src/context/favsContext';
import { Earth } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function Favoritos() {
    const { t } = useTranslation();

    const { favoritos } = useFavoritos();
    const [clave, setClave] = useState(0);

    const refrescarHijo = () => {
        setClave(clave + 1);
    };

    return (
        <div className="bg-radial-[at_50%_75%] from-sky-200 via-blue-300 to-indigo-900 to-90% min-h-screen flex flex-col">
            <Header key={clave} />
            <div className="flex-grow flex flex-wrap gap-4 p-4 justify-center">
                {favoritos.length > 0 ? (
                    favoritos.map((item) => (
                        <Card
                            key={item.date}
                            imageUrl={item.url || item.hdurl}
                            title={item.title}
                            date={item.date}
                            itemRef={item}
                            refrescar={refrescarHijo}
                        />
                    ))
                ) : (
                    <div className="flex flex-col items-center justify-center flex-grow w-full">
                        <Earth size={80} className="opacity-50" />
                        <h1 className="text-2xl font-bold opacity-50">{t('favoritos.mensaje')}</h1>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}
export default Favoritos;