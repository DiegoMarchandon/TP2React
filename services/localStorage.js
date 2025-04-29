const lenguaje = {
    lenguajePref: "es"
};

const favoritos = [
    // formato de ejemplo: 
    /* [
        fechaID: " ", //usamos la fecha como ID porque es la foto DEL dia, y no se repite
        titulo: " ",
        url:" ", //como la URL en HD no está en todas las imagenes, usamos la común. O en su defecto, un operador lógico para indicar que si no está la imagen en HD, usemos la otra.

    ],
    [...]
    */
];

localStorage.setItem("language",JSON.stringify(lenguaje));
localStorage.setItem("favoritos",JSON.stringify(favoritos));