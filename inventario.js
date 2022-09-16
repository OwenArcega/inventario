class Inventario{
    constructor(){
        this.arreglo = [];
    }

    agregar(item){
    for(let i = 0; i < this.arreglo.length; i++){
        if(this.arreglo[i].codigo === item.codigo){
            return false;
        }
    }
        this.arreglo.push(item);
        return true;
    }

    eliminar(codigo){
        let aux = 0;
        for(let i = 0; i < this.arreglo.length; i++){
            if(this.arreglo[i].codigo === codigo){
                aux = this.arreglo[i];
                for(let j = i + 1;j < this.arreglo.length;j++){
                    this.arreglo[j-1] = this.arreglo[j];
                }
                this.arreglo[this.arreglo.length-1] = aux;
                this.arreglo.pop();
            }
        }
    }

    listar(){
        let listado = "";

        for(let i = 0; i<this.arreglo.length; i++){
            listado += "<" + this.arreglo[i].codigo + "> Nombre: " + this.arreglo[i].nombre
            + " Costo: " + this.arreglo[i].costo + " Cantidad: " + this.arreglo[i].cantidad + "<br>";
        }
        return listado;
    }

    listarInverso(){
    
    let listadoInv = "";
    for(let i = this.arreglo.length-1; i>=0; i--){
        listadoInv += "<" + this.arreglo[i].codigo + "> Nombre: " + this.arreglo[i].nombre
            + " Costo: " + this.arreglo[i].costo + " Cantidad: " + this.arreglo[i].cantidad + "<br>";
    }
    return listadoInv;
    }

    buscar(codigo){
        let elemento = "";
        for(let i = 0; i < this.arreglo.length; i++){
            if(this.arreglo[i].codigo === codigo){
                return this.arreglo[i];
            }
        }
        return null;
    }

insertar(item,posicion){
    if(!!this.arreglo[posicion-1]){
        for(let i = this.arreglo.length-1; i >= posicion-1; i--){
            this.arreglo[i+1] = this.arreglo[i];
        }
    }
    this.arreglo[posicion-1] = producto;
}
}