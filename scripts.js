let cantidad = 0


cantidad = Number(prompt("Cuantos Pesos desea cambiar?"))

class Moneda{
    constructor(nombre, valor) {
        this.nombre = nombre;
        this.valor   = valor;
    }
}
this.convertir = function() {
    alert("Usted puede comprar " + cantidad * moneda1.valor + " " + moneda1.nombre + " o " + cantidad * moneda2.valor + " " + moneda2.nombre + " o " + cantidad * moneda3.valor + " " + moneda3.nombre + " o " + cantidad * moneda4.valor + " " + moneda4.nombre + "." );
} 



const moneda1 = new Moneda("Dolares", 0.0096);
const moneda2 = new Moneda("Euros", 0.0085); 
const moneda3 = new Moneda("Pesos Uruguayos", 2.34)
const moneda4 = new Moneda("Pesos Chilenos", 7.91);


console.log(this.convertir());