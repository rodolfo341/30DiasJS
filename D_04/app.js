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

// let miEdad = 25
// let tuEdad = prompt('Ingresen su edad:')
// if ( miEdad > tuEdad ) {
//     console.log('Eres ' + ( miEdad - tuEdad ) + ' menor que yo' )
// } else if ( tuEdad > miEdad ) {
//     console.log('Eres ' + ( tuEdad - miEdad ) + ' mayor que yo' )
// } else {
//     console.log('Tenemos la misma edad')
// }

// 03 Si a es mayor que b, devuelve 'a es mayor que b'; 
//     de lo contrario, 'a es menor que b'. 
//     Trate de implementarlo de maneras diferentes

// let a = parseInt(prompt("a: "));
// let b = parseInt(prompt("b: "));

// 04 (a > b) ? console.log('a es mayor que b') : console.log('a es menor que b');

// Los números pares son divisibles por 2 y el resto es cero. 
// ¿Cómo verificar si un número es par o no usando JavaScript?

// let a = parseInt(prompt('a = '))

// if ( ( a % 2 ) == 0 ) {
//     console.log("Es par")
// } else {
//     console.log("No es par")
// }

// nivel 02 ej 01 Escriba un código que pueda calificar a los estudiantes de acuerdo con sus puntajes:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

// let nota = parseInt(prompt('Nota: '))
// if ( nota < 0 || nota > 100) { console.log('Error!') } 
// else if ( nota < 50 ) { console.log('F') } 
// else if ( nota < 60 ) { console.log('D') } 
// else if ( nota < 70 ) { console.log('C') } 
// else if ( nota < 90 ) { console.log('B') } 
// else if ( nota <= 100 ) { console.log('A') }

// nivel 02 ej 02 Consulta si la temporada es Otoño, Invierno, Primavera o Verano. 
// Si la entrada del usuario es :
// Septiembre, Octubre o Noviembre, la temporada es Otoño.
// Diciembre, Enero o Febrero, la temporada es Invierno.
// Marzo, Abril o Mayo, la temporada es Primavera
// Junio, Julio o Agosto, la temporada es Verano

let mes = parseInt(prompt('ingrese mes \n 1) Septiembre, Octubre o Noviembre \n 2) Diciembre, Enero o Febrero \n 3) Marzo, Abril o Mayo \n 4) Junio, Julio o Agosto'));

if ( mes == 1 ) {
    console.log('la temporada es Otoño.')
} else if ( mes == 2 ) {
    console.log('la temporada es Invierno.')
} else if ( mes == 3 ) {
    console.log('la temporada es Primavera.')
} else if ( mes == 4 ) {
    console.log('la temporada es Veranp.')
} else {
    console.log('Error!')
}