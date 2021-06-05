const addToList = ( list , item , quantify ) => { //Mutable
    list.push({
        item,
        quantify
    })
    return list
}

const addToList = ( list , item , quantify ) => { //Inmutable
    const newList = JSON.parse( JSON.stringify( list ) )
    newList.push({
        item,
        quantify
    })

    return newList
}

/*
La inmutabilidad en las propiedades o atributos de un objeto es fundamental para poder predecir su comportamiento o valor (estado) en el futuro.
Al crear nuevos objetos cambiados (mutados), sin alterar el objeto original, nos aseguramos de estar siendo muy explícitos al hacer modificaciones,
reduciendo el riesgo de cambios indeseados o hechos por simple descuido o desconocimiento. Esta característica es especialmente útil en todo 
lo relacionado a las pruebas de software o testings.

Como vimos en clases anteriores, la inmutabilidad se hace particularmente necesaria en el manejo de objetos,
ya que estos, por defecto, se están pasando siempre por referencia y no por valor.
*/