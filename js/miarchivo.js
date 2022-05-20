
class Productos {
  constructor(bebida, precio, stock) {
    this.bebida = bebida.toUpperCase();
    this.precio = parseFloat(precio);
    this.stock = parseInt(stock);
  }
}

let CantidadArticulos = Number(prompt("Cuantas bebidas deseas agregar?"));
const arrayBebibas = [];

for (let i = 0; i<CantidadArticulos; i++) {
  arrayBebibas[i] = new Productos(
    prompt("Ingrese el nombre de la bebida: "),
    prompt("Ingrese el precio del producto: "),
    prompt("Ingrese el stock del producto: ")
  )
}


console.log(arrayBebibas);