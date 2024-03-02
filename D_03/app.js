// //  01  Declare las siguientes variables; 
// //     firstName, 
// //     lastName, 
// //     country, 
// //     city, 
// //     age, 
// //     isMarried, 
// //     year 
// // y asignar un valor, 
// // use el operador typeof para verificar diferentes tipos de datos.

// let firstName = "Rodolfo"
// let lastName = "Aravena"
// let country = "Chile"
// let city = "Santiago"
// let age = 52
// let isMarried = true 
// let year = 2024 

// console.log(typeof firstName)
// console.log(typeof lastName)
// console.log(typeof country)
// console.log(typeof city)
// console.log(typeof age)
// console.log(typeof isMarried)
// console.log(typeof year)

// //  02  Verifique si typeof '10' es igual a 10
// console.log(typeof 10)
// console.log(typeof '10')

// // 03 Verifique si parseInt('9.8') es igual a 10
// let num = '10'
// console.log(typeof num)
// console.log(typeof parseInt(num))

// // 04 Verifique cualquier valor booleano true o false.
// //      Escriba tres declaraciones de JavaScript que proporcionen un valor verdadero.
// //      Escriba tres declaraciones de JavaScript que proporcionen un valor falso.

// let valorVerdadero1 = true
// let valorVerdadero2 = ( 10 == 10 )
// let valorVerdadero3 = ( 2 > 1 )
// console.log(valorVerdadero1)
// console.log(valorVerdadero2)
// console.log(valorVerdadero3)

// let valorFalso1 = false
// let valorFalso2 = ( 10 != 10 )
// let valorFalso3 = ( 2 < 1 )
// console.log(valorFalso1)
// console.log(valorFalso2)
// console.log(valorFalso3)

// // 05 Calcule primero el resultado de la siguiente expresión de comparación sin usar console.log(). 
// //    Después de decidir el resultado, confirmelo usando console.log()
// // 01 4 > 3
// // 02 4 >= 3
// // 03 4 < 3
// // 04 4 <= 3
// // 05 4 == 4
// // 06 4 === 4
// // 07 4 != 4
// // 08 4 !== 4
// // 09 4 != '4'
// // 10 4 == '4'
// // 11 4 === '4'
// // 12 Encuentre la longitud de Python y jargon y haga una declaración de comparación falsa.
// console.log( 4 > 3 )
// console.log( 4 >= 3 )
// console.log( 4 < 3 )
// console.log( 4 <= 3 )
// console.log( 4 == 4 )
// console.log( 4 === 4 )
// console.log( 4 != 4 )
// console.log( 4 !== 4 )
// console.log( 4 != '4' )
// console.log( 4 == '4' )
// console.log( 4 === '4' )
// console.log('python'.length)
// console.log('jargo'.length)
// console.log('python'.length == 'jargo'.length )

// // 06 Calcule primero el resultado de las siguientes expresiones sin usar console.log(). 
// //    Después de decidir el resultado, confirmelo usando console.log()

// //         01 4 > 3 && 10 < 12
// //         02 4 > 3 && 10 > 12
// //         03 4 > 3 || 10 < 12
// //         04 4 > 3 || 10 > 12
// //         05 !(4 > 3)
// //         06 !(4 < 3)
// //         07 !(false)
// //         08 !(4 > 3 && 10 < 12)
// //         09 !(4 > 3 && 10 > 12)
// //         10 !(4 === '4')
// //         11 No hay 'on' tanto en dragon como en python
// console.log( 4 > 3 && 10 < 12 )
// console.log( 4 > 3 && 10 > 12 )
// console.log( 4 > 3 || 10 < 12 )
// console.log( 4 > 3 || 10 > 12 )
// console.log( !(4 > 3) )
// console.log( !(4 < 3) )
// console.log( !(false) )
// console.log( !(4 > 3 && 10 < 12) )
// console.log( !(4 > 3 && 10 > 12) )
// console.log( !(4 === '4' ))
// console.log('dragon'.includes('on'))
// console.log('python'.includes('on'))

// // 07 Utilice el objeto Date para realizar las siguientes actividades
// //         01 ¿Qué año es hoy?
// //         02 ¿Qué mes es hoy con un número?
// //         03 ¿Qué fecha es hoy?
// //         04 ¿Qué día es hoy con un número?
// //         05 ¿Cuál es la hora actual?
// //         06 ¿Cuántos minutos hay actualmente?
// //         07 Averigüe el número de segundos transcurridos desde el 1 de enero de 1970 hasta ahora.

// let fecha = new Date()
// console.log(fecha.getFullYear())

// console.log(fecha.getMonth() + 1 )

// console.log(fecha.getDate())

// console.log(fecha.getDay())

// console.log(fecha.getHours())

// console.log(fecha.getMinutes())

// console.log(fecha.getTime())
// console.log(Date.now())

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
// let m = 2; 
// let b = -2; 
// let x_interseccion = (0 - b) / m;
// let y_interseccion = m * 0 + b;

// console.log('Pendiente: ' + m);
// console.log('Intersección X: ' + x_interseccion);
// console.log('Intersección Y: ' + y_interseccion);

// 06 La pendiente es m = (y2-y1)/(x2-x1). 
//  Encuentra la pendiente entre el punto (2, 2) y el punto (6,10)

// let x1 = 2;
// let y1 = 2;
// let x2 = 6;
// let y2 = 10;
// const pendiente = (y2 - y1) / (x2 - x1);
// console.log('La pendiente es: ' + pendiente);

// 07 Compare la pendiente de las dos preguntas anteriores.
// 08 Calcula el valor de 
//     y (y = x2 + 6x + 9). 
// Trate de usar diferentes valores de x y 
// averigüe en qué valor de x y es 0.

// let equis = 1
// let yGriega = 2 * equis + 6 * equis + 9
// console.log(yGriega)

// 08 Calcula el valor de y (y = x2 + 6x + 9). 
// Trate de usar diferentes valores de x y averigüe en qué valor de x y es 0.

// equis = -1;
// yGriega = equis * 2 + 6 * equis + 9
// console.log(yGriega)

// 09 Escriba un script con prompt 
// que solicite al usuario que ingrese 
//          las horas y 
//          la tarifa por hora. 
// ¿Calcular el salario de la persona?

// Ingrese horas: 40
// Introduce la tarifa por hora: 28
// Su ganancia semanal es 1120

// let horas = prompt('Ingrese horas:')
// let tarifa = prompt('Introduce la tarifa por hora:')
// console.log('Su ganancia semanal es ' + ( horas * tarifa ))

// 10 Si la longitud de su nombre es mayor que 7, 
//      diga que su nombre es largo; de lo contrario, diga que su nombre es corto.

// let nombre = "rodolfo"
// if ( nombre.length > 7) {
//     console.log("su nombre es largo")
// } else {
//     console.log("su nombre es corto")
// }

// 11 Compare la longitud de su nombre y la longitud de su apellido y debería obtener este resultado.

// let firstName = "Asabeneh";
// let lastName = "Yetayeh";

// Tu primer nombre, Asabeneh, es más largo que tu apellido, Yetayeh.

// let nombre = "Rodolfo"
// let apellido = "Aravena"
// if ( nombre.length > apellido.length ){
//     console.log("Tu nombre es, " + nombre + " es mas largo que tu apellido, " + apellido)
// } else if ( apellido.length > nombre.length ){
//     console.log("Tu apellido es, " + apellido + " es mas largo que tu nombre, " + nombre)
// } else {
//     console.log("Tu nombre, " + nombre + " es igual a tu apellido, " + apellido)
// }

// 12 Declare dos variables miEdad y tuEdad y asignarles los valores iniciales y myAge y yourAge.

// let miEdad = 250
// let tuEdad = 25
// if ( miEdad > tuEdad ) {
//     console.log("soy " + ( miEdad - tuEdad ) + "años mayor que tu")
// } else if ( tuEdad > miEdad ) {
//     console.log("eres " + ( tuEdad - miEdad ) + "años mayor que yo")
// } else {
//     console.log("tenemos la misma edad")
// }

// 13 Usando prompt, obtenga el año en que nació el usuario y, 
//      si el usuario tiene 18 años o más, permita que el usuario conduzca, 
//      si no dígale que espere una cierta cantidad de años.


//  Introduzca el año de nacimiento: 1995
//  Tienes 25 años. Tienes la edad suficiente para conducir.

// Introduzca el año de nacimiento: 2005
// Tienes 15 años. Podrás conducir después de 3 años.

// let anioNacimiento = prompt("introdusca el año de nacimiento: ")
// if ( ( 2024 - anioNacimiento ) >= 18 ) {
//     console.log("Tienes la edad suficiente para conducir.")
// } else {
//     console.log("debe esperar " + ( 18 - ( 2024 - anioNacimiento )))
// }

// 14 Escriba un script que solicite por prompt al usuario que ingrese el número de años. 
//      Calcular el número de segundos que puede vivir una persona. 
//      Supongamos que alguien vive solo cien años

// Ingrese el número de años de vida: 100
//  Viviste 3153600000 segundos.

let edad = prompt('Ingrese el numero de años de vida: ')
let segundos = edad * 365 * 24 * 60 * 60
console.log('Viviste ' + segundos + ' segundos' )

