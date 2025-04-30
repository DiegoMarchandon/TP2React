// usamos un contexto global con React Context para poder compartir y actualizar
//  la lista de favoritos desde cualquier componente
import { createContext, useContext, useEffect, useState } from "react";

// Creamos el contexto
const favsContext = createContext();

// Hook para usarlo fácilmente desde otros componentes
export const useFavoritos = () => useContext(favsContext);

// Componente proveedor
export const FavoritosProvider = ({ children }) => {
  const [favoritos, setFavoritos] = useState(() => {
    return JSON.parse(localStorage.getItem("favoritos")) || [];
  });

  // Cada vez que cambia el array de favoritos, lo guardamos en localStorage
  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);

  // Función para modificar favoritos ( handCardClick)
  const toggleFavorito = (item) => {
    const index = favoritos.findIndex(f => f.date === item.date);
    if (index !== -1) {
      setFavoritos(prev => prev.filter((_, i) => i !== index));
    } else {
      setFavoritos(prev => [...prev, { ...item }]); // Clonamos para evitar referencias compartidas
    }
  };

  return (
    // con componente.Provider le brindamos a los componentes hijos/envueltos la posibilidad de acceder a valores sin necesidad de recibirlos como props
    // evitamos el "prop drilling" (pasar props profundamente de padre a hijo a nieto, etc)
    <favsContext.Provider value={{ favoritos, toggleFavorito }}>
      {children}
    </favsContext.Provider>
  );
};
