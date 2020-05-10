
const crearObjeto = (nombre, apellido) => {

    return {
        nombre,
        apellido,

        mostrarObjeto: () => {
            return `su nombre es : ${nombre} y su apellido  ${apellido}`;
        }
    }
}

console.log(crearObjeto("Pablito", "Escovilla").mostrarObjeto());




