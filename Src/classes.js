
class Usuario {

    constructor(nombres, apellidos, edad){

    this.nombres = nombres;
    this.apellidos= apellidos;
    this.edad= edad;
    
    }

    mostrarInfo(){

        return `
            <b>Nombre : </b> ${this.nombres} <br/>
            <b>Apellido : </b> ${this.apellidos} <br/>
            <b>Edad : </b> ${this.edad} <br/>
            <hr/>
        `
    }
}


class Estudiante extends Usuario{

    constructor(nombres, apellidos, edad, carrera){

        super(nombres, apellidos, edad);

        this.carrera = carrera;
    }

    mostrarInfo(){

        return `
            <b>Nombre : </b> ${this.nombres} <br/>
            <b>Apellido : </b> ${this.apellidos} <br/>
            <b>Edad : </b> ${this.edad} <br/>
            <b>Carrera : </b> ${this.carrera} <br/>
            <hr/>
        `   

    }
}

const horacio = new Usuario("Horacio", "Escovilla", 50);
document.write(horacio.mostrarInfo());

const segismundo = new Estudiante("Segismundo", "Perez", 45, "Desarrolador web");
document.write(segismundo.mostrarInfo());


