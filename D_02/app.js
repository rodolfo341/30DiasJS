
// 01 Declare una variable llamada desafío y asígnele un valor inicial '30 días de JavaScript'.
let desafio = "30 dias de JS";

// 02 Imprima la cadena en la consola del navegador usando console.log()
console.log(desafio);

// 03 Imprima la longitud 7de la cadena en la consola del navegador usando console.log()
console.log("longitud de la ladena " + " \"" + desafio + "\"" + " es: " + desafio.length);

// 04 Cambie todos los caracteres de cadena a letras mayúsculas usando el método toUpperCase()
console.log(desafio.toUpperCase());

// 05 Cambie todos los caracteres de la cadena a letras minúsculas usando el método toLowerCase()
console.log(desafio.toLowerCase());

// 06 Corta (segmenta) la primera palabra de la cadena usando el método substr() o substring()
console.log(desafio.substring(0,2));

// 07 Corta la frase Days Of JavaScript de 30 Days Of JavaScript.
console.log(desafio.split(" "));

// 08 Verifique si la cadena contiene una palabra dias usando el método includes()
console.log(desafio.includes("dias"));

// 09 Divide la cadena en un array usando el método split()
console.log(desafio.split());

// 10 Divida la cadena 30 días de JavaScript en el espacio usando el método split()
console.log(desafio.split(" "));

// 11 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' divide la cadena en la coma y cámbiala a una matriz.
let empresas = "'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'";
console.log(empresas.split(","));

// 12 Cambie 30 días de JavaScript a 30 días de Python usando el método replace().
console.log(desafio.replace("JS","Python"));

// 13 ¿Cual es el carácter en el índice 12 en la cadena '30 días de JS'? Utilice el método charAt().
console.log(desafio.charAt(12));


// 14 ¿Cuál es el código de carácter de J en la cadena '30 días de JavaScript' usando charCodeAt()
// 15 Use indexOf para determinar la posición de la primera aparición de a en 30 días de JavaScript
// 16 Utilice lastIndexOf para determinar la posición de la última aparición de a en 30 días de JavaScript.
// 17 Usa indexOf para encontrar la posición de la primera aparición de la palabra porque en la siguiente oración:
//   'No puedes   terminar una oración con porque porque porque es una conjunción'
// 18 Usa lastIndexOf para encontrar la posición de la última aparición de la palabra porque en la siguiente oración:
//   'No puedes terminar una oración con porque porque porque es una conjunción'
// 19 Usa buscar para encontrar la posición de la primera aparición de la palabra porque en la siguiente oración:
//   'No puedes terminar una oración con porque porque porque es una conjunción'
// 20 Use trim() para eliminar cualquier espacio en blanco final al principio y al final de una cadena. Por ejemplo, 
//   '30 días de JavaScript'.
// 21 Use el método startsWith() con la cadena 30 días de JavaScript y haga que el resultado sea verdadero
// 22 Use el método endsWith() con la cadena 30 días de JavaScript y haga que el resultado sea verdadero
// 23 Usa el método match() para encontrar todos los a en 30 días de JavaScript
// 24 Use concat() y fusione '30 días de' y 'JavaScript' en una sola cadena, '30 días de JavaScript'
// 25 Use el método repeat() para imprimir 30 días de JavaScript 2 veces