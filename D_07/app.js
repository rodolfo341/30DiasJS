const gato ={
    nombre: "Tom",
    edad: 10,
    enemigos: ['agua','perro'],
    comer: (alimento) => {
        console.log(`el gato ${this.nombre} esta comiendo ${alimento}`)
    }
}

gato.comer('pollo')