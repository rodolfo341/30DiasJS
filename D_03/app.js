//  01  Declare las siguientes variables; 
//     firstName, 
//     lastName, 
//     country, 
//     city, 
//     age, 
//     isMarried, 
//     year 
// y asignar un valor, 
// use el operador typeof para verificar diferentes tipos de datos.

let firstName = "Rodolfo"
let lastName = "Aravena"
let country = "Chile"
let city = "Santiago"
let age = 52
let isMarried = true 
let year = 2024 

console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMarried)
console.log(typeof year)

//  02  Verifique si typeof '10' es igual a 10
console.log(typeof 10)
console.log(typeof '10')

// 03 Verifique si parseInt('9.8') es igual a 10
let num = '10'
console.log(typeof num)
console.log(typeof parseInt(num))

// 04 Verifique cualquier valor booleano true o false.
//      Escriba tres declaraciones de JavaScript que proporcionen un valor verdadero.
//      Escriba tres declaraciones de JavaScript que proporcionen un valor falso.

let valorVerdadero1 = true
let valorVerdadero2 = ( 10 == 10 )
let valorVerdadero3 = ( 2 > 1 )
console.log(valorVerdadero1)
console.log(valorVerdadero2)
console.log(valorVerdadero3)

let valorFalso1 = false
let valorFalso2 = ( 10 != 10 )
let valorFalso3 = ( 2 < 1 )
console.log(valorFalso1)
console.log(valorFalso2)
console.log(valorFalso3)

// 05 Calcule primero el resultado de la siguiente expresión de comparación sin usar console.log(). 
//    Después de decidir el resultado, confirmelo usando console.log()
// 01 4 > 3
// 02 4 >= 3
// 03 4 < 3
// 04 4 <= 3
// 05 4 == 4
// 06 4 === 4
// 07 4 != 4
// 08 4 !== 4
// 09 4 != '4'
// 10 4 == '4'
// 11 4 === '4'
// 12 Encuentre la longitud de Python y jargon y haga una declaración de comparación falsa.
console.log( 4 > 3 )
console.log( 4 >= 3 )
console.log( 4 < 3 )
console.log( 4 <= 3 )
console.log( 4 == 4 )
console.log( 4 === 4 )
console.log( 4 != 4 )
console.log( 4 !== 4 )
console.log( 4 != '4' )
console.log( 4 == '4' )
console.log( 4 === '4' )
console.log('python'.length)
console.log('jargo'.length)
console.log('python'.length == 'jargo'.length )

// 06 Calcule primero el resultado de las siguientes expresiones sin usar console.log(). 
//    Después de decidir el resultado, confirmelo usando console.log()

//         01 4 > 3 && 10 < 12
//         02 4 > 3 && 10 > 12
//         03 4 > 3 || 10 < 12
//         04 4 > 3 || 10 > 12
//         05 !(4 > 3)
//         06 !(4 < 3)
//         07 !(false)
//         08 !(4 > 3 && 10 < 12)
//         09 !(4 > 3 && 10 > 12)
//         10 !(4 === '4')
//         11 No hay 'on' tanto en dragon como en python
console.log( 4 > 3 && 10 < 12 )
console.log( 4 > 3 && 10 > 12 )
console.log( 4 > 3 || 10 < 12 )
console.log( 4 > 3 || 10 > 12 )
console.log( !(4 > 3) )
console.log( !(4 < 3) )
console.log( !(false) )
console.log( !(4 > 3 && 10 < 12) )
console.log( !(4 > 3 && 10 > 12) )
console.log( !(4 === '4' ))
console.log('dragon'.includes('on'))
console.log('python'.includes('on'))

// 07 Utilice el objeto Date para realizar las siguientes actividades
//         01 ¿Qué año es hoy?
//         02 ¿Qué mes es hoy con un número?
//         03 ¿Qué fecha es hoy?
//         04 ¿Qué día es hoy con un número?
//         05 ¿Cuál es la hora actual?
//         06 ¿Cuántos minutos hay actualmente?
//         07 Averigüe el número de segundos transcurridos desde el 1 de enero de 1970 hasta ahora.

let fecha = new Date()
console.log(fecha.getFullYear())

console.log(fecha.getMonth() + 1 )

console.log(fecha.getDate())

console.log(fecha.getDay())

console.log(fecha.getHours())

console.log(fecha.getMinutes())

console.log(fecha.getTime())
console.log(Date.now())

/**
 * Nivel 2
 */

// 01 Escriba un script que solicite al usuario que ingrese:
//          la base y la 
//          altura del triángulo y 
//    calcule el área de un triángulo (área = 0,5 x b x h).



// let base = prompt('base: ')
// let alto = prompt('alto: ')
// base = parseFloat(base);
// alto = parseFloat(alto);
// console.log('area = ' + ( ( base * alto ) / 2 ) )

// 02 Escriba un script que solicite al usuario que ingrese 
//             el lado a, 
//             el lado b y 
//             el lado c 
//     del triángulo y 
//     calcule el perímetro del triángulo (perímetro = a + b + c)

// let ladoA = prompt('Lado a:');
// let ladoB = prompt('Lado b:');
// let ladoC = prompt('Lado c:');

// ladoA = parseFloat(ladoA);
// ladoB = parseFloat(ladoB);
// ladoC = parseFloat(ladoC);
// const perimetro = ladoA + ladoB + ladoC;
// console.log('Perímetro = ' + perimetro);

// 03 Obtenga el largo y el ancho usando prompt y calcule 
//     el área del   rectángulo (área = largo x ancho y el 
//     perímetro del rectángulo (perímetro = 2 x (largo + ancho))
//  area = prompt("area: ")
//  area = parseFloat(area)
//  largo = prompt("largo: ")
//  largo = parseFloat(largo)
//  ancho = prompt("ancho: ")
//  ancho = parseFloat(ancho)

//  area = largo * ancho
//  perimetro = 2 * ( largo * ancho )
//  console.log("area: " + area)
//  console.log("perimetro: " + perimetro)

//  04 Obtenga el radio usando prompt y calcule 
//             el área de un círculo (área = pi x r x r) y 
//             la circunferencia de un círculo (c = 2 x pi x r) 
//     donde pi = 3.14.

// let r = prompt("radio: ")
// let area = Math.PI * r * r
// let circ = 2 * Math.PI * r
// console.log("area: " + area)
// console.log("ciucunferencia: " + circ)

// 05 Calcule la pendiente, la intersección X y la intersección Y de y = 2x -2
// Definir la ecuación de la línea y = mx + b
let m = 2; 
let b = -2; 
let x_interseccion = (0 - b) / m;
let y_interseccion = m * 0 + b;

console.log('Pendiente: ' + m);
console.log('Intersección X: ' + x_interseccion);
console.log('Intersección Y: ' + y_interseccion);


