"use strict";

var crearObjeto = function crearObjeto(nombre, apellido) {
  return {
    nombre: nombre,
    apellido: apellido,
    mostrarObjeto: function mostrarObjeto() {
      return "su nombre es : ".concat(nombre, " y su apellido  ").concat(apellido);
    }
  };
};

console.log(crearObjeto("Pablito", "Escovilla").mostrarObjeto());