Ventajas y desventajas de usar
* Callbacks
    Ventaja: Función que recibe una función que va a ejecutar una función, corren en cualquier navegador
    Desventajas: Estructura tosca y mucha anidación[Callback Hell], flujo poco intuitivo, no manejamos acepciones.
* Promises
    Ventajas: Fácilmente enlazable[ muchos then ], más fácil de leer, nos permiten capacidad de trabajar con asincronía.
    Desventajas: No maneja excepciones, tenemos un catch, propensos a errores si no retornamos las llamadas, requiere un polyfill, transpilar el código para que sea funcional en todos los navegadores.
* Async
    Ventajas: Uso de try catch, trabajar fluidamente, más fáciles de leer, esperar que algo está sucediendo.
    Desventajas: Esperar por cada uno de los llamados, en caso de muchas llamadas tenemos que esperarlas, requiere polyfill.
