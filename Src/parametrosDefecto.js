

 function almacenaDatos(nombre="Laravel", apellido="Laravel", correo="Laravel", telefono="Laravel"){ 
     return `Nombre : ${nombre}, Apellido : ${apellido}, Correo : ${correo}, Telefono : ${telefono}`
    }

    console.log(almacenaDatos("Paco", undefined, "elpapuchulo@hotmail.com", "0999999990"));