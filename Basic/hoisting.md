El Hoisting es un proceso del compilador de JavaScript, que consiste en que la declaracion de las variables y las funciones son llevadas al inicio del codigo, sin importar su posicion, para su procesamiento, sin embargo, la inicializacion de las variables no es llevada al inicio del codigo para su compilacion, sino solo su declaracion, lo cual suele dar espacio a errores cuando se declara una variable sin inicializarla y se procesa en el codigo antes de haber llegado a su inicializacion, lo cual nos suele dar una variable con valor undefined, ya que la variable sí fue almacenada en memoria, pero no se le asigno un valor hasta despues de su ejecución.

Aqui un ejemplo de esto:
```
saludo();

function saludo() {
    console.log("Hola " + nombre);
}

var nombre = "Aaron";
```

El output de este codigo seria el siguiente:

```
Hola undefined
```

Debido a que como lo hemos dicho, la variable se tomo en cuenta y se le asigno memoria, sin embargo, el compilador no la inicializo y se le dio el valor de undefined, y con ese valor se ingreso a la funcion, y ya despues de correr la funcion se le asigno el valor.

Este comportamiendo se puede entender facilmente si se comprenden estos dos puntos esenciales:

* Las funciones siempre se mueven arriba del scope. Por lo tanto, podemos elegir donde declararlas y usarlas.
* La declaración de las variables se mueven arriba del scope, pero no la asignación. Antes de usar una variable, habrá que crearla y asignarla.
En base al segundo punto, fue por eso que se cometio el error de usar la variable antes de inicializarla, pues sin problema el compilador le asigna memoria, pero no el valor hasta despues.

Basicamente por pasos, lo que hizo el compilador fue esto:

Tenemos el codigo asi:

```
saludo();

function saludo() {
    console.log("Hola " + nombre);
}

var nombre = "Aaron";
```

El compilador toma las funciones y variables y las “sube” en el codigo, sin inicializar variables:

```
var nombre;

function saludo() {
    console.log("Hola " + nombre);
}

saludo();

var nombre = "Aaron";
```

Le asigna memoria a la variable y le da el valor de undefined al suceder la asignacion de memoria

```
var nombre = undefined;

function saludo() {
    console.log("Hola " + nombre);
}

saludo();

nombre = "Aaron";
```

Y como hemos visto, la variable se asigna como undefined y posteriormente su utiliza al llegar a la linea:
```
saludos()
```

pues ahi lo que hace es ejecutar la funcion que ya fue procesada, pero con un valor de la variable que aun no se le asigno, quedando como undefined.

Despues de correr la funcion, le asigna el valor correcto a la variable ya declarada:

```
var nombre = "Aaron";

function saludo() {
    console.log("Hola " + nombre);
}

saludo();
```

Pero ya es demasiado tarde, pues la funcion ya fue ejecutada.

* Es por eso que se tiene como buena practica declarar e inicializar tanto variables como funciones al inicio de nuestro programa, sin importar donde sean utilizadas, pues de esta manera se evita usarlas antes de ser inicializadas.

Debemos saber que el hoisting solo sucede con las palabras claves var y function, por lo tanto esto nos dice que solo se da en las versiones de ECMAScript 5 o Inferiores, ya que en la version 6 y superiores se permite la declaracion de variables con let y const, que son dos nuevas variables que no activan hoisting.