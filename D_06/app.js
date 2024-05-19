
// Usa el bucle para iterar de 0 a 100 e imprimir la suma de todos los pares y la suma de todos los impares. Imprimir suma de pares y suma de impares como un array

let acum = 0
let acum2 = 0
for ( let i=0 ; i <=100 ; i++ ) {
    if ( i%2 === 0 ){
        acum += i
    } else {
        acum2 += i
    }
}
console.log([acum,acum2])