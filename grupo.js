export default class Grupo {
    constructor(){
        this.inicio = null;
    }

    agregar(nuevo){
        if(this.inicio == null){
            this.inicio = nuevo;
        } else {
            let temp = this.inicio;

            while(temp.siguiente != null){
                temp = temp.siguiente;
            }
            temp.siguiente = nuevo;
        }
    }

    listar(){
        let temp = this.inicio;

        if(this.inicio == null){
            console.log("No hay personas registradas");
        } else {
            do{
            console.log(`Código: ${temp.getCode()} Nombre: ${temp.getName()}`);

            temp = temp.siguiente;
            } while(temp != null);
        }
    }
}