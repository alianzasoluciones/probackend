const {promises: fs  } = require("fs");


class Contenedor{

    constructor(ruta){
        this.ruta = ruta;
    }

    async save(obj){
       
        const objs = await this.getAll();

        let newId;
         if (objetos.length == 0){
            newId = 1;

         }else { 
            const newId = objs[objs.length - 1].id +1;
            
        }

        const newObj ={...obj, id: newId}
        objs.push(newObj)
    
        try {
        await fs.writeFile(this.ruta, JSON.stringify(objs, null, 2))
        return newId
       } catch (error) {
        throw new Error(`Error al guardar: ${error}`);
       }
    }
    
    async getById(id){
        const objs = await this.getAll();
        const obj = objs.find(x => x.id == id);
        return obj;

    }
    async getAll(){
         try {
            const objs= await fs.readFile(this.ruta, "utf-8")
            return JSON.parse(objetos  )
         } catch(error){
            return []
        }
       }
    
       async deleteById(id){

        let collection = []
        await fs.readFile(`./${this.ruta}`, "utf-8")
        .then( contenido => {
            let col = JSON.parse(contenido)
            for (const ob of col) {
                if(ob.id !=id){
                    collection.push(ob)
                }
            }
        })
        .catch( err => console.log(err));
        await fs.writeFile(`./${this.ruta}`, JSON.stringify(collection));
        console.log("objeto borrado");

    }
    async deleteAll(){
        await fs.writeFile(`./${this.ruta}`, "");
        console.log(" todos los objetos borrados");

    }
}


module.exports = Contenedor
