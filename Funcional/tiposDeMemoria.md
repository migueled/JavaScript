# Objetos y Tipos de Memoria en JavaScript

Un objeto es una referencia a un espacio en memoria, cada vez que creamos un objeto, este se guarda en la memoria (no sabemos exactamente dónde) y podemos acceder a su valor gracias a las coordenadas.

Existen dos tipos de memoria: Stack y Heap.
La memoria Stack es mucho más rápida y nos permite almacenar los datos de forma ““ordenada”” y en JavaScript la utilizamos para guardar datos primitivos, como booleanos, números o strings. En cambio, los objetos utilizan la memoria Heap, una memoria que nos permite guardar grandes cantidades de información pero con un poco menos de velocidad.

Estos dos conceptos nos van a ayudar mucho a la hora de copiar objetos cuando utilizamos la programación funcional.

En otras palabras, las variables primitivas se almacenan y se acceden por valor, mientras que las variables de tipo objeto se almacenan y acceden por referencia.

Es por esta razón que al declarar una constante primitiva no podemos cambiar luego su valor, pero al declarar una constante de tipo objeto, si podemos cambiar en cualquier momento los atributos o propiedades que tiene definidos internamente.