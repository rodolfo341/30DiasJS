// 01 Obtenga la entrada del usuario usando el aviso ("Ingrese su edad:"). 
//      Si el usuario tiene 18 años o más, muestre el mensaje: 
//      'Tiene la edad suficiente para conducir', 
//      pero si no tiene 18 años, brinde otro mensaje que indique 
//      que debe esperar la cantidad de años que necesita para cumplir 18.

// let edad = prompt('ingrese edad')
// if ( edad >= 18 ) {
//     console.log('Tiene la edad suficiente para conducir')
// } else {
//     console.log('debe esperar ' + ( 18 - edad ) + ' para cumplir 18')
// }

// 02 Compara los valores de myAge y yourAge usando if... else. 
// Según la comparación, registre el resultado en la consola 
// indicando quién es mayor (tú o yo). Utilice prompt(“Ingrese su edad:”) 
// para obtener la edad como entrada.

let miEdad = 25
let tuEdad = prompt('Ingresen su edad:')
if ( miEdad > tuEdad ) {
    console.log('Eres ' + ( miEdad - tuEdad ) + ' menor que yo' )
} else if ( tuEdad > miEdad ) {
    console.log('Eres ' + ( tuEdad - miEdad ) + ' mayor que yo' )
} else {
    console.log('Tenemos la misma edad')
}
