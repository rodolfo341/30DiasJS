
// 01 Declare una variable llamada desafío y asígnele un valor inicial '30 días de JavaScript'.
let desafio = "30 dias de JavaScript";
/*
// 02 Imprima la cadena en la consola del navegador usando console.log()
console.log("2.- uso de console.log(): " + desafio);

// 03 Imprima la longitud de la cadena en la consola del navegador usando console.log()
console.log("3.- longitud de la cadena con .length: " + " \"" + desafio + "\"" + " es: " + desafio.length);

// 04 Cambie todos los caracteres de cadena a letras mayúsculas usando el método toUpperCase()
console.log("4.- todo en mayusculas con .toUpperCase(): " + desafio.toUpperCase());

// 05 Cambie todos los caracteres de la cadena a letras minúsculas usando el método toLowerCase()
console.log(`5.- todo en minusculas con toLowerCase(): ${desafio.toLowerCase()}`); 

// 06 Corta (segmenta) la primera palabra de la cadena usando el método substr() o substring()
console.log(`6.- primera palabra con sunstring(): ${desafio.substring(0,2)}`);

// 07 Corta la frase Days Of JavaScript de 30 Days Of JavaScript.
console.log(`7.- convertir en array de cada cadena con .split(" ")${desafio.split(" ")}`);

// 08 Verifique si la cadena contiene una palabra dias usando el método includes()
let palabras = desafio.split(/\s+/);
let palabra = "dias";
let encontrado = palabras.includes(palabra);

if(encontrado){
    console.log(`8.- la palabra ${palabra} se encuentra`);
} else {
    console.log(`8.- la palabra ${palabra} no se encuentra`);
}

// 09 Divide la cadena en un array usando el método split()
console.log(`9.- cadena "desafio" duvidida en un array de palabras: ${desafio.split()}`);

// 10 Divida la cadena 30 días de JavaScript en el espacio usando el método split()
let newDesafio = desafio.split(" ");
console.log(`10.- cadena "desafio" dividida en un array usando espacio " ": ${newDesafio}`);
newDesafio.forEach(item => {
    console.log(`\t ${item}`)
})

// 11 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' 
// divide la cadena en la coma y cámbiala a una matriz.
let empresas = "'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'";
console.log(`11.- la cadena ${empresas} `)
let newEmpresas = empresas.split(","); 
console.log(`ahora un array de empresas:`);

newEmpresas.forEach(empresa => {
    console.log(`\t ${empresa}`);
})


// 12 Cambie 30 días de JavaScript a 30 días de Python usando el método replace().
console.log("12 Cambie 30 días de JavaScript a 30 días de Python usando el método replace().")
let aRemplazar = "dias";
let paraReemplazar = "semanas";
newDesafio = desafio.replace(aRemplazar,paraReemplazar);
console.log(`cadena desafio: ${desafio}`);
console.log(`cadena newDesafio: ${newDesafio}`);

// 13 ¿Cual es el carácter en el índice 12 en la cadena '30 días de JS'? Utilice el método charAt().
console.log(`caracter en el indice 12:'${desafio.charAt(12)}'`);

// 14 ¿Cuál es el código de carácter de J en la cadena '30 días de JavaScript' usando charCodeAt()
console.log(`el unicode de "j" en la posición 11 es ${desafio.charCodeAt(11)}`);

// 15 Use indexOf para determinar la posición de la primera aparición de a en 30 días de JavaScript
console.log(desafio.indexOf("a"));

// 16 Utilice lastIndexOf para determinar la posición de la última aparición de a en 30 días de JavaScript.
console.log(`ultimo indice de la letra "a" el el string desaio: ${desafio.lastIndexOf("a")}`);

// 17 Usa indexOf para encontrar la posición de la primera aparición de la palabra porque en la siguiente oración:
//   'No puedes terminar una oración con porque porque porque es una conjunción'
*/
let cadena = "No puedes terminar una oración con porque porque porque es una conjunción";
/*
console.log(`primera aparición de "porque" en la cadena: ${cadena.indexOf("porque")}`);
console.log("hola");

// 18 Usa lastIndexOf para encontrar la posición de la última aparición de la palabra porque en la siguiente oración:
//   'No puedes terminar una oración con porque porque porque es una conjunción'
console.log(`Última aparición de "porque" en la cadena: ${cadena.lastIndexOf("porque")}`);

// 19 Usa search para encontrar la posición de la primera aparición de la palabra porque en la siguiente oración:
//   'No puedes terminar una oración con porque porque porque es una conjunción'
console.log(cadena.search("porque"));

// 20 Use trim() para eliminar cualquier espacio en blanco final al principio y al final de una cadena. Por ejemplo, 
//   '30 días de JavaScript'.
let desafio2 = " 30 dias de JavaScript ";
console.log(desafio2);
console.log(`uso dee strim() elimina espacios en blanco l principio y al final de la cadena ${desafio2.trim()}`);

// 21 Use el método startsWith() con la cadena 30 días de JavaScript y haga que el resultado sea verdadero
console.log(`devuelve true ya que comienza en 30 (startsWith): ${desafio.startsWith(30)}`);
*/

// 22 Use el método endsWith() con la cadena 30 días de JavaScript y haga que el resultado sea verdadero
console.log(`devuelve true por que la última palabra es "JavaScripyt" (endsWitch): {desafio.endsWith("JavaScript")}`);



/*
// 23 Usa el método match() para encontrar todos los a en 30 días de JavaScript
console.log(desafio.match("a"));

// 24 Use concat() y fusione '30 días de' y 'JavaScript' en una sola cadena, '30 días de JavaScript'
let dias = "30 dias de";
console.log(dias.concat(" ","JavaScript"));

// 25 Use el método repeat() para imprimir 30 días de JavaScript 2 veces
console.log(desafio.repeat(2));
*/