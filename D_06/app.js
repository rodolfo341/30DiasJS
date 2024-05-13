
// declaro la función
function numAleatorioRango(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// invoco la función
console.log(numAleatorioRango(1, 11))

const miNumero = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
console.log(miNumero(1, 11))

