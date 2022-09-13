class Persona{
    constructor(nombre,edad){
        this._nombrePersona = nombre;
        this._edadPersona = edad;
    }

    datosPersona(){
        return "Nombre " + this._nombrePersona + ". Edad: " + this._edadPersona;
    }
}
//Palabra reservada "extends" para heredar de una clase
class Alumno extends Persona{
    constructor(nombre, edad, matricula){
       super(nombre,edad);
       this._matriculaAlumno = matricula;
    }

    mostrarDatos(){
        console.log("Alumno: "+ super.datosPersona() + ". Matricula: " + this._matriculaAlumno);
    }
}

class Profesor extends Persona{
    constructor(nombre, edad){
        super(nombre, edad);
    }
        //Utilizando getter & setter
        set sDepartamento(valor){
            this.departamento = valor;
        }
        get gDepartamento(){
            return this.departamento
        }
       
    imprimirDatos(){
        console.log("Profesor: "+ super.datosPersona() + ". Departamento: " + this.departamento);
    }
}

//let objPersona1 = new Persona("Josue", 24)
//console.log(objPersona1.datosPersona());

let objAlumno = new Alumno("Josué Espino", 24, "016018671");
console.log(objAlumno.datosPersona());//Método desde la clase Padre 
objAlumno.mostrarDatos(); //Método desde la clase hija

let objProfesor = new Profesor("Francisco", 45);
objProfesor.sDepartamento = "Sistemas"; //Agregando valor a DEpartamento 
objProfesor.imprimirDatos();