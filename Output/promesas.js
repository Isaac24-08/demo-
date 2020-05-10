"use strict";

var promesa = new Promise(function (resolve, reject) {
  var resultado = false;

  if (resultado) {
    resolve();
  } else {
    reject();
  }
});
promesa.then(function () {
  alert("La operacion tuvo mucho exito");
});
promesa["catch"](function () {
  alert("Eres un pringao");
});