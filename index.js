const Contenedor = require("./contenedor")

const p1 = {
    "articulo":"shampoo",
    "precio":500,
    "id": 1

}
const p2 = {
    "articulo":"sjabon",
    "precio":100,
    "id": 2

}
const p3 = {
    "articulo":"acondicionador",
    "precio":300,
    "id": 3

}

async function main(){
    const contenedor = new Contenedor("./productos.txt");

    console.log("Mostrando Productos")
    let objs = await contenedor.getAll();
    console.log("objs");


console.log("guardando Producto 1")
let idp1 = await contenedor.save(p1)
console.log("id de p1:",idp1,);

console.log("guardando Producto 2")
let idp2 = await contenedor.save(p2)
console.log("id de p2:",idp2,);

console.log("guardando Producto 3")
let idp3 = await contenedor.save(p3)
console.log("id de p3:",idp3,);

console.log("Mostrando Productos")
     objs = await contenedor.getAll();
    console.log("objs");

    console.log("Por id");
    const res = await contenedor.getById(idp1);
    console.log("res", res );

    console.log("Elimino por id");
    objs = await contenedor.deleteById(1);
    

    console.log("borrando todo");
    objs = await contenedor.deleteAll();

}

main ()