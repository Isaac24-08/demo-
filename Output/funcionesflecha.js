"use strict";

var nombres = ["Pablo", "Emilio", "Escobar", "Gabiria"];
var nombreCaracteres = nombres.map(function (nombre) {
  return "".concat(nombre, " tiene  ").concat(nombre.length, " letras");
});
console.log(nombreCaracteres);