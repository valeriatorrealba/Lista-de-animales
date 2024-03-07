class Propietario {
    constructor(nombreDueno, direccion, telefono) {
        this.nombreDueno = nombreDueno;
        this.direccion = direccion;
        this.telefono = telefono;
    }
    datosPropietario() {
        return `El nombre del dueño es: ${this.nombreDueno}. El domicilio es: ${this.direccion}, y el número telefónico de contacto: ${this.telefono}`;
    }
}

class Animal extends Propietario {
    constructor(nombreDueno, direccion, telefono, tipo) {
        super(nombreDueno, direccion, telefono);
        this._tipo = tipo;
    }
    get tipo() {
        return `El tipo de animal es un: ${this._tipo}`;
    }
}

class Mascota extends Animal {
    constructor(nombreDueno, direccion, telefono, tipo, nombreAnimal, enfermedad) {
        super(nombreDueno, direccion, telefono, tipo);
        this._nombreAnimal = nombreAnimal;
        this._enfermedad = enfermedad;
    }
    get nombreAnimal() {
        return this._nombreAnimal;
    }
    set nombreAnimal(nombreAnimal) {
        this._nombreAnimal = nombreAnimal;
    }
    get enfermedad() {
        return this._enfermedad;
    }
    set enfermedad(enfermedad) {
        this._enfermedad = enfermedad;
    }
}

let formulario = document.querySelector('form');
let agregar = (event) => {
    event.preventDefault();
    let propietario = document.getElementById("propietario").value;
    let telefono = document.getElementById("telefono").value;
    let direccion = document.getElementById("direccion").value;
    let nombreMascota = document.getElementById("nombreMascota").value;
    let tipo = document.getElementById("tipo").value;
    let enfermedad = document.getElementById("enfermedad").value;
    
    const mascotas = {
        "perro": new Mascota(propietario, direccion, telefono, tipo, nombreMascota, enfermedad),
        "gato": new Mascota(propietario, direccion, telefono, tipo, nombreMascota, enfermedad),
        "conejo": new Mascota(propietario, direccion, telefono, tipo, nombreMascota, enfermedad)
    };

    let mascotaSeleccionada = mascotas[tipo];
    mostrarResultado(mascotaSeleccionada);
}

let mostrarResultado = (valor) => {
    let resultado = document.querySelector('#resultado ul');
    resultado.innerHTML= "";
    let li1 = document.createElement("li");
    li1.innerHTML = `${valor.datosPropietario()}`;
    let li2 = document.createElement("li");
    li2.innerHTML = `${valor.tipo}, mientras que el nombre de la mascota es ${valor.nombreAnimal} y la enfermedad es ${valor.enfermedad}`;
    resultado.appendChild(li1);
    resultado.appendChild(li2);
}

formulario.addEventListener("submit", agregar);