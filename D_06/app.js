const frutas = []

const fruta = prompt('que fruta?')
frutas.push(fruta)

while(confirm('otra fruta?')){
    const fruta = prompt('que fruta?')
    frutas.push(fruta)
}

for(const fruta of frutas){
    console.log(fruta)
}
