"use strict";

function almacenaDatos() {
  var nombre = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Laravel";
  var apellido = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Laravel";
  var correo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "Laravel";
  var telefono = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "Laravel";
  return "Nombre : ".concat(nombre, ", Apellido : ").concat(apellido, ", Correo : ").concat(correo, ", Telefono : ").concat(telefono);
}

console.log(almacenaDatos("Paco", undefined, "elpapuchulo@hotmail.com", "0999999990"));