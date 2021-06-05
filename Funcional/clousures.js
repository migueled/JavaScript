//Closures: Es una función que retorna otra función

function buildSum( a ) {
    return function( b ) {
        return a + b
    }
}

const addFive = buildSum( 5 )
console.log( addFive( 5 ) ) //10
/****/
const buildSum = a => b => a + b