// Nivel 01 ej 01 Declara un array vacío.
// const arreglo1 = array()
// const arreglo2 = []

// Nivel 01 aj 02 Declara un array com mas de 5 elementos.
// const arreglo = [1,2,3,4,5,6]

// Nivel 1 ej 03 Encuentra la longitud de tu array.
// console.log(arreglo.length)

// Nivel 01 ej o4 Obtenga el primer elemento, el elemento del medio y el último elemento de un array.
// console.log(arreglo[0])
// console.log(arreglo[arreglo.length/2])
// console.log(arreglo[arreglo.length-1])

// Nivel 01 ej 05 Declara un array llamado mixedDataTypes, 
// coloque diferentes tipos de datos en el array y encuentre la longitud del array. 
// El tamaño del array debe ser mayor que 5.
// const mixedDataTypes =[5,"hola", true, 3, 3.5, "chao"]
// console.log(mixedDataTypes.length)

// Nivel 01 ej 06 Declare un variable array de nombre itCompanies y 
// asignarles valores iniciales 
// Facebook, Google, Microsoft, Apple, IBM, Oracle y Amazon.
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

// Nivel 01 ej 07 Imprima el array usando console.log().
console.log(itCompanies)

// Nivel 01 ej 08 Imprima el número de empresas en el array.
console.log(itCompanies.length)

// Nivel 01 ej 09 Imprima el número de empresas en el array.Imprime la primer empresa , la intermedia y la última empresa
console.log(itCompanies[0])
console.log(itCompanies[ Math.trunc(itCompanies.length / 2 )])
console.log(itCompanies[itCompanies.length - 1])

// Nivel 01 ej 10 Imprime cada empresa.
for ( let i = 0; i < itCompanies.length; i++){
    console.log(itCompanies[i])
}

// Nivel 01 ej 11 Cambie el nombre de cada empresa a mayúsculas uno por uno e imprímalos.
// for ( let i = 0; i < itCompanies.length; i++){
//     itCompanies[i] = itCompanies[i].toUpperCase()
// }
console.log(itCompanies)

// Nivel 01 ej 12 Imprime el array como una oración: 
// Facebook, Google, Microsoft, Apple, IBM, Oracle y Amazon son grandes empresas de TI.
console.log(itCompanies[0] + ', ' + itCompanies[1] + ', ' + itCompanies[2] + ', ' + itCompanies[3] + ', ' + itCompanies[4] + ', ' + itCompanies[5] + ', ' + itCompanies[6] + ' y ' + itCompanies[7] + 'son grandes empresas IT ')

// Nivel 01 ej 13 Compruebe si existe una determinada empresa en el array itCompanies. 
// Si existe, retorna la empresa; de lo contrario, retorna la empresa no existe

