# Coerción
Es la forma en la que podemos cambiar un tipo de valor a otro, existen dos tipos de coerción:

* Coerción implícita
Es cuando el lenguaje nos ayuda a cambiar el tipo de valor.
* Coerción explicita
Es cuando obligamos a que cambie el tipo de valor.

## Coerción implícita

```
var a = 4 + "7" //47 => String
var b = 4 * "7" //28 => Number
```

## Coerción explicita
```
var a = 20
var b = a + ""
var c = String( a ) // 20 => String
var d = Number( c ) // 20 => Number
```