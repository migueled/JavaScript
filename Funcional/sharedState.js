/*
Shared State significa que diferentes métodos trabajan
 a partir de una misma variable. y, así como aprendimos 
 en clases anteriores, cuando modificamos variables con
 el mismo objeto de referencia podemos encontrarnos con
 algunos problemas y obtener resultados inesperados a
 pesar de ejecutar el mismo código y recibir los mismos
 parámetros:
*/

const a = {
    value : 2
}

const addOne = () => a.value += 1       //mutan a la variable a
const timesTwo = () => a.value *= 2

addOne( a )
timesTwo( a )

console.log( a.value ) //6

timesTwo( a )
addOne( a )

console.log( a.value ) //5

/*
Para resolver este tipo de problemas debemos utilizar la
programación funcional, en vez de modificar la variable
original, nuestras funciones deben copiar y modificar sus
argumentos:
*/

const b = {
    value : 2
}

const addOne = b => Object.assign( {} , b , { value: b.value + 1} )
const timesTwo = b => Object.assign( {} , b , { value: b.value * 1} )

addOne( b )
timesTwo( b )

console.log( addOne( timesTwo( b ) ) ) //6

console.log( b.value ) //2