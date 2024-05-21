function max(x,y,z){
    if ( x>y && x>z ){
        return x
    } else if ( y>x && y>z ){
        return y
    } else {
        return z
    }
}

const x = parseInt(prompt('x'))
const y = parseInt(prompt('y'))
const z = parseInt(prompt('x'))

console.log(`el mayor es ${max(x,y,z)}`)