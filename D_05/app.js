// Nivel 01 ej 
// 01 Declara un array vacío.
const arreglo1 = Array();
const arreglo2 = [];
console.log(arreglo1);
console.log(arreglo2);

// ej 02 Declara un array com mas de 5 elementos.
const arreglo = [1, 2, 3, 4, 5, 6];
console.log(arreglo);

// ej 03 Encuentra la longitud de tu array.
console.log(arreglo.length);

// ej o4 Obtenga el primer elemento, el elemento del medio y el último elemento de un array.
console.log(arreglo[0])
console.log(arreglo[arreglo.length / 2])
console.log(arreglo[arreglo.length - 1])

// ej 05 Declara un array llamado mixedDataTypes,
// coloque diferentes tipos de datos en el array y encuentre la longitud del array.
// El tamaño del array debe ser mayor que 5.
const mixedDataTypes = [5, "hola", true, 3, 3.5, "chao"]
console.log(mixedDataTypes.length)

// ej 06 Declare un variable array de nombre itCompanies y
// asignarles valores iniciales
// Facebook, Google, Microsoft, Apple, IBM, Oracle y Amazon.
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

// ej 07 Imprima el array usando console.log().
console.log(itCompanies)

// ej 08 Imprima el número de empresas en el array.
console.log(itCompanies.length)

// ej 09 Imprima el número de empresas en el array.Imprime la primer empresa , la intermedia y la última empresa
console.log(itCompanies[0])
console.log(itCompanies[Math.trunc(itCompanies.length / 2)])
console.log(itCompanies[itCompanies.length - 1])

// // Nivel 01 ej 10 Imprime cada empresa.
for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i])
}

// Nivel 01 ej 11 Cambie el nombre de cada empresa a mayúsculas uno por uno e imprímalos.
for (let i = 0; i < itCompanies.length; i++) {
    itCompanies[i] = itCompanies[i].toUpperCase()
}
console.log(itCompanies)

// Nivel 01 ej 12 Imprime el array como una oración:
// Facebook, Google, Microsoft, Apple, IBM, Oracle y Amazon son grandes empresas de TI.
console.log(itCompanies[0] + ', ' + itCompanies[1] + ', ' + itCompanies[2] + ', ' + itCompanies[3] + ', ' + itCompanies[4] + ', ' + itCompanies[5] + ', ' + itCompanies[6] + ' y ' + itCompanies[7] + 'son grandes empresas IT ')

// // Nivel 01 ej 13 Compruebe si existe una determinada empresa en el array itCompanies.
// // Si existe, retorna la empresa; de lo contrario, retorna la empresa no existe
// let bandera = false
// for ( let i = 0; i < itCompanies.length ; i++ ){
//     if ( itCompanies[i] == 'Apple' ){
//         console.log(itCompanies[i])
//         bandera = true
//     }
// }
// if ( bandera == false ) {
//     console.log('la empresa no existe')
// }

// // Nivel 01 ej 14 Filtre las empresas que tienen más de una 'o' sin el método filter()
// let itCompaniesFiltradas = [];

// for (var i = 0; i < itCompanies.length; i++) {
//   var count = 0;
//   for (var j = 0; j < itCompanies[i].length; j++) {
//     if (itCompanies[i][j] === 'o' || itCompanies[i][j] === 'O') {
//       count++;
//     }
//   }
//   if (count > 1) {
//     itCompaniesFiltradas.push(itCompanies[i]);
//   }
// }

// console.log(itCompaniesFiltradas);

// // Nivel 01 ej 15 Ordene el array usando el método sort()
// itCompanies.sort()
// console.log(itCompanies)

// // Nivel 01 ej 16 Invierte la array usando el método reverse()
// itCompanies.reverse()
// console.log(itCompanies)

// Nivel 01 ej 17 Cortar las primeras 3 empresas del array
// Nivel 01 ej 18 Cortar las últimas 3 empresas del array
// Nivel 01 ej 19 Cortar la empresa o empresas intermedias de TI del array
// Nivel 01 ej 20 Eliminar la primera empresa de TI del array
// Nivel 01 ej 21 Eliminar la empresa o empresas intermedias de TI del array
// Nivel 01 ej 22 Elimine la última empresa de TI del array
// Nivel 01 ej 23 Eliminar todas las empresas de TI
// itCompanies.splice(0,itCompanies.length)
// console.log(itCompanies)

// Nivel 02
// ej 01 Cree un archivo de countries.js separado y
// almacene el array de países en este archivo,
// cree un archivo separado web_techs.js y
// almacene el array de webTechs en este archivo.
// Acceda a ambos archivos en el archivo main.js

// Ej 02 Primero elimine todos los signos de puntuación y
// cambie de string a array y cuente el número de palabras en el array
/*let text =
    "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

let puntuacion = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
let textoSinPuntuacion = "";

for (let i = 0; i < text.length; i++) {
    if (puntuacion.indexOf(text[i]) === -1) {
        textoSinPuntuacion += text[i];
    }
}
console.log(text);
console.log(textoSinPuntuacion)

arrayText = text.split(" ")
console.log(arrayText)
console.log(arrayText.length)
*/
// ej 03 En el siguiente carrito de compras agregue, elimine, edite artículos
// Agregue 'Meat' al comienzo de su carrito de compras si aún no se ha agregado
// Agregue 'Sugar' al final de su carrito de compras si aún no se ha agregado
// Elimine 'Honey' si es alérgico a la miel (honey)
// Modificar Tea a 'Green Tea'
/*
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
shoppingCart.unshift('Meat')

shoppingCart.push('Sugar')
shoppingCart[3] = 'Green Tea'
console.log(shoppingCart)
*/
// ej 06 Concatene las siguientes dos variables y guardelas en una variable fullStack.
/*const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];

const fullStack = frontEnd + backEnd
console.log(fullStack);
*/
// Nivel 3

// El siguiente es un array de 10 edades de estudiantes:

// - Ordene el array y encuentre la edad mínima y máxima
// - Encuentre la edad media (un elemento intermedio o dos elementos intermedios divididos por dos)
// - Encuentre la edad promedio (todos los elementos divididos por el número de elementos)
// - Encuentre el rango de las edades (max menos min)
// - Compare el valor de (mín - promedio) y (máx - promedio), use el método _abs()_
/*
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()
console.log(ages)
console.log(ages[0])
console.log(ages[ages.length - 1])

let acum = 0
for (let i = 0; ages.length - 1; i++) {
    acum += ages[i]
}

let media = acum / ages.length
console.log(media)

console.log(ages[ages.length - 1] - ages[0])
*/