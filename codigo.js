class Usuario {
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre,
        this.apellido = apellido,
        this.libros = libros,
        this.mascotas = mascotas
    }
       getFullName() {
            return `${this.nombre} ${this.apellido}`;
        }

        addMascota(nombre) {
            this.mascotas.push(nombre);
        }

        countMascotas() {
            return this.mascotas.length;
        }

        addBook(titulo, autor) {
            this.libros.push({titulo, autor});
        }

        getBookNames(){
        return this.libros.map(libro => libro.titulo);
    }
    
    
}
    let usuario = new Usuario ("delfina", "lopez", [], []); 
    let usuario2 = new Usuario ("bruno", "gonzales", [], []);
    let usuario3 = new Usuario ("rodrigo", "garcia", [], []);


    usuario.addMascota("perro")
    usuario2.addMascota("gato")
    usuario3.addMascota("tortuga")
    usuario3.addMascota("conejo")

    usuario.addBook("la voz del lago","Delinsky")
    usuario2.addBook("Alquimista","coelho")
    usuario3.addBook("Flowers in the Attic","V. C. Andrews")

    console.log("el usuario es : ",usuario);
    console.log("el usuario es : ",usuario2);
    console.log("el usuario es : ",usuario3);

    console.log("cantidad de mascotas: ", usuario.countMascotas());
    console.log("cantidad de mascotas: ", usuario2.countMascotas());
    console.log("cantidad de mascotas: ", usuario3.countMascotas());
    console.log("titulos de libros :",usuario.getBookNames());
    console.log("titulos de libros :",usuario2.getBookNames());
    console.log("titulos de libros :",usuario3.getBookNames());


