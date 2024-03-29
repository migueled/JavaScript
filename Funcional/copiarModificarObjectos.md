# Copiar y modificar objetos en JavaScript

En JavaScript tenemos diferentes formas de copiar y modificar elementos o variables, normalmente, basta con asignar dos variables e indicar que la segunda es igual a la primera:
```
let a = 1
let b = a

console.log(a, b) // 1, 1
```

De esta forma podemos copiar el valor de otra variable y realizar modificaciones más adelante:

```
let a = 1
let b = a
b += 1

console.log(a, b) // 1, 2
```

Sin embargo, todo esto cambia cuando trabajamos con objetos. Así como aprendimos en la clase anterior, los objetos se comportan distinto al resto de datos primitivos dentro de JavaScript.

Cuando asignamos el valor de una variable de tipo objeto a otras variables, en realidad, estamos copiando la referencia al objeto inicial. Esto quiere decir que, a pesar de que modifiquemos la copia de nuestras variables de tipo objeto, en realidad, estamos modificando el objeto original y, por lo tanto, todas las variables con la referencia a este objeto que acabamos de modificar:

```
let car = {
        color: 'red',
        year: 2019,
        km: 0,
}

let car2 = car
car2.color = 'blue'

console.log(car, car2) // ambos objetos tienen color azul, no solo `car2`
```

En vez de copiar los valores de nuestros objetos, cuando utilizamos el = lo que copiamos es la referencia al objeto con sus respectivos valores. Esto lo podemos solucionar utilizando la función Object.assign:

```
let car = {
        color: 'red',
        year: 2019,
        km: 0,
}

let car2 = Object.assign({} , car)
car2.color = 'blue'

console.log(car, car2) // `car` es de color rojo y `car2` de color azul
```

Sin embargo, este método no es suficiente para copiar y modificar objetos con subobjetos por el mismo problema de las referencias. La mejor manera copiar los valores de nuestros objetos en vez de sus referencias es utilizando las funciones JSON.parse y JSON.stringify:

```
let car = {
        color: 'red',
        year: 2019,
        km: 0,
        owner: {
                name: 'David',
                age: 25
        }
}

let car2 = JSON.parse(JSON.stringify(car))
car2.owner.age += 1

console.log(car, car2) // el dueño de `car2` es un año mayor al dueño de `car`
```