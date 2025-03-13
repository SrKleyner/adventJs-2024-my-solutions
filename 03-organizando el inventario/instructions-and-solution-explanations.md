# Instrucciones y explicacion de la solucion dada

## Problema

Santa Claus 🎅 está revisando el inventario de su taller para preparar la entrega de regalos. Los elfos han registrado los juguetes en un array de objetos, pero la información está un poco desordenada. Necesitas ayudar a Santa a organizar el inventario.

Recibirás un array de objetos, donde cada objeto representa un juguete y tiene las propiedades:

* name: el nombre del juguete (string).
* quantity: la cantidad disponible de ese juguete (entero).
* category: la categoría a la que pertenece el juguete (string).

 Escribe una función que procese este array y devuelva un objeto que organice los juguetes de la siguiente manera:

*	Las claves del objeto serán las categorías de juguetes.
*	Los valores serán objetos que tienen como claves los nombres de los juguetes y como valores las cantidades totales de cada juguete en esa categoría.
*	Si hay juguetes con el mismo nombre en la misma categoría, debes sumar sus cantidades.
* Si el array está vacío, la función debe devolver un objeto vacío {}.

---

## Explicación de los requerimientos solicitados

El objetivo principal es organizar un inventario de juguetes dado en un array de objetos, agrupándolos por categoría y sumando las cantidades de juguetes con el mismo nombre dentro de cada categoría.

###	Requerimientos Solicitados:

+	**Agrupación por Categoría:** Los juguetes deben organizarse en un objeto donde las claves sean las categorías (por ejemplo, "toys", "sports").
+	**Agrupación por Nombre:** Dentro de cada categoría, los juguetes deben agruparse por nombre, y se debe sumar la cantidad total de cada juguete.
+	**Manejo de Duplicados:** Si hay juguetes con el mismo nombre en la misma categoría, sus cantidades deben sumarse.
+ **Manejo de Array Vacío:** Si el array de entrada está vacío, la función debe devolver un objeto vacío ({}).

###	Pasos para Alcanzar el Objetivo:

+ **Iterar el Array:** Recorrer el array de juguetes uno por uno.
Agrupar por Categoría: Crear o acceder a un objeto dentro del objeto principal que corresponda a la categoría del juguete actual.
+ **Agrupar por Nombre:** Dentro de la categoría, crear o actualizar la cantidad del juguete correspondiente a su nombre.
+ **Sumar Cantidades:** Si el juguete ya existe en la categoría, sumar la cantidad actual a la cantidad existente.
+ **Devolver Objeto Organizado:** Devolver el objeto que contiene los juguetes organizados por categoría y nombre.


## Solución propuesta

```javascript
function organizeInventory(inventory) {
    const organizedInventory = inventory.reduce((globalObject, { name, quantity, category }) => {
        globalObject[category] ??= {};
        globalObject[category][name] = ~~globalObject[category][name] + quantity;
        return globalObject;
    }, {});
    return organizedInventory;
}
```

## Resultado esperado
```
const inventory = [

{ name: 'doll', quantity: 5, category: 'toys' },

{ name: 'car', quantity: 3, category: 'toys' },

{ name: 'ball', quantity: 2, category: 'sports' },

{ name: 'car', quantity: 2, category: 'toys' },

{ name: 'racket', quantity: 4, category: 'sports' }

]

organizeInventory(inventory)

// Resultado esperado:

{
	toys: {
	doll: 5,
	car: 5
	},

	sports: {
	ball: 2,
	racket: 4
}
}
```

## Explicacion paso a paso de la solucion

1-. `inventory.reduce((globalObject, { name, quantity, category }) => { ... }, {});`:

*	Se utiliza el método `reduce()` para iterar sobre el array `inventory` y construir un nuevo objeto (`organizedInventory`).

>[!NOTE]
> El metodo reduce fue explicado con anterioridad en el reto ["02 Enmarcando nombres metodo map()"](https://github.com/SrKleyner/adventJs-2024-my-solutions/blob/main/02-enmarcando-nombres/instructions-and-solution-explanations.md#map)

*	`globalObject`: Es el acumulador, que inicialmente es un objeto vacío (`{}`).

*	`{ name, quantity, category }`: Se utiliza la desestructuración de objetos para extraer las propiedades `name`, `quantity` y `category` de cada juguete en el array.

>[!NOTE]
>**La sintaxis de desestructuración** es una expresión de JavaScript que permite desempacar valores de arreglos o propiedades de objetos en distintas variables. simplificando la extracción de las propiedades del objeto.

2-. `globalObject[category] ??= {};`: 
*	Este es el operador de coalescencia nula (`??=`).

*	Verifica si `globalObject[category]` es `null` o `undefined`.

*	Si es así, asigna un objeto vacío (`{}`) a `globalObject[category]`. Esto asegura que cada categoría tenga su propio objeto para almacenar los juguetes.

>[!NOTE]
>**asignacion de Coalescencia Nula** (`??=`): Este operador es útil para asignar un valor predeterminado a una variable solo si esa variable es `null` o `undefined`

3-.	`globalObject[category][name] = ~~globalObject[category][name] + quantity;`:

*	`~~globalObject[category][name]`: Este es el operador de doble negación (`~~`). Se utiliza como un atajo para convertir el valor de `globalObject[category][name]` a un número entero si el valor es undefined (es decir, el juguete no existe aún en esa categoría), `~~undefined` devuelve `0`.

*	`~~globalObject[category][name] + quantity`: Se suma la cantidad actual del juguete (`quantity`) a la cantidad existente (o `0` si no existe).

*	`globalObject[category][name] = ...`: Se actualiza la cantidad del juguete en el objeto `globalObject`.

>[!NOTE]
>**Operador de Doble Negación (`~~`)**: Este operador se utiliza para convertir un valor a un entero. Es más rápido que `Math.floor()` o `parseInt()` en algunos casos.

4-.	`return globalObject;`:

*	Se devuelve el objeto `globalObject` actualizado en cada iteración.
 

5-.	`return organizedInventory;` :

*	Se devuelve el objeto final `organizedInventory`, que contiene los juguetes organizados por categoría y nombre. Llegando asi a obtener el resultado esperado.