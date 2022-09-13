class Persona {

    constructor(nombre,edad){
        this._nombre = nombre;
        this._edad = edad;
        let _dni ;
    }

    set estableceDni(valor){
        this._dni = valor;
    }

    get regresarDni(){
        return this._dni;
    }

    saludar(){
        console.log('mi nombre es ' + this._nombre + '. tengo ' + this._edad + 'años. Mi dni es:' + this._dni);
    }

}

let objPersona1 = new Persona('Josué', 24);
objPersona1.estableceDni = "666";
objPersona1.saludar();
console.log(objPersona1.regresarDni);