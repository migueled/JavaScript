# Programación funcional
* La programación funcional es una nueva forma de pensar y entender nuestro código.
* El objetivo es crear código más conciso, legible y fácil de probar.
* Existen otros paradigmas como la Programación Orientada a Objetos (POO) y la Programación por Procedimientos.
* Buscamos resolver el “qué hay que hacer” en vez del “cómo lo debemos hacer” (código declarativo).
```
POO
class Person {
        constructor(name, age) {
                this.name = name
                this.age = age
        }
        getOld() {
                this.age += 1
        }
}

let person = new Person('JuanDC', 15)
person.getOld() // 16
```
```
Functional
const juandc = {
        name: 'JuanDC',
        age: 15
}

const getOld = person => Object.assign(
    {},
    person,
    { age: person.age + 1}
)
getOld(juandc) // 16
```