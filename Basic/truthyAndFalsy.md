# Truthy y Falsy
## Falsy

* Boolean() —> sin ningun valor es false
* Boolean(0) —> false
* Boolean(null) —> false
* Boolean(NaN) —> false // NaN es Not and Number
* Boolean(Undefined) —> false
* Boolean(false) —> false
* Boolean("") —> false

## Truthy

* Boolean(1) —> true //cualquier numero que no sea igual a cero es true
* Boolean(“a”) —> true
* Boolean(" ") —> true // siendo un espacio el valor es true
* Boolean([]) —> true // un array nos da un true
* Boolean({}) —> true // un objeto nos da el valor de true
* Boolean(function() {}) —> true //una funcion tambien es true
* Boolean(true) —> true