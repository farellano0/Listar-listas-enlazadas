export default class Persona {
    constructor(codigo, nombre){
        this.nombre = nombre;
        this.codigo = codigo;
        this.siguiente = null;
    }

    getName(){
        return this.nombre;
    }

    getCode(){
        return this.codigo;
    }
}