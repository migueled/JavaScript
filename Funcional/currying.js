/*
Gracias a los closures es posible implementar el Currying,
descomponer funciones complejas en otras funciones más pequeñas
donde cada función recibe un solo argumento. A continuación un ejemplo:
*/
const buildSum = a => b => a + b
const tag = t => content => `<${ t }>${ content }</${ t }>`

function sumThreeNumbers( a , b , c ) { //Sin Currying
    return a + b + c
}

console.log( sumThreeNumbers( 1 , 2 , 3 ) ) // 6

function sumThreeNumbers( a ) {//con Currying
    return function( b ) {
            return function( c ) {
                    return a + b + c
            }
    }
}

console.log( sumThreeNumbers(1)(2)(3) ) // 6