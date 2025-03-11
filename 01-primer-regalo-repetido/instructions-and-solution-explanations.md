# Instrucciones y explicacion de la solucion dada

## Problema

**Santa Claus** ha recibido una lista de números mágicos que representan regalos, pero algunos de ellos están duplicados y deben ser eliminados para evitar confusiones. Además, **los regalos deben ser ordenados en orden ascendente antes de entregárselos a los elfos.**

Tu tarea es escribir una función que reciba una lista de números enteros (que pueden incluir duplicados) y **devuelva una nueva lista sin duplicados, ordenada en orden ascendente.**

---

## Explicación de los requerimientos solicitados

* Recibimos una lista de números que representan los regalos.
* La lista recibida puede contener duplicados.
* Debemos devolver una lista ordenada sin los números duplicados.

## Solución propuesta

```javascript
function prepareGifts(gifts) {
    const deleteDuplicates = [...new Set(gifts)];
    const ordenatedGift = deleteDuplicates.sort((a, b) => a - b);
    return ordenatedGift;
}
```

## Explicacion paso a paso de la solucion

### Eliminar duplicados

Para eliminar duplicados, usamos una estructura de datos llamada Set. Su sintaxis sería la siguiente:

```js
new Set(iterable)
```

Set no permite elementos ya existentes dentro de su estructura, por lo que al intentar introducir algún elemento duplicado, no entra en el Set.

En nuestro caso, almacenamos el iterable obtenido de la estructura Set en una variable llamada **deleteDuplicates**, luego de haberla distribuido en un array con un spread operator, como se aprecia en el siguiente código:

```js
const deleteDuplicates = [...new Set(gifts)];

// Ejemplo con algunos valores para apreciar el valor obtenido

const gifts = [3, 1, 2, 3, 4, 2, 5]; // Se observan valores repetidos en la lista

const deleteDuplicates = [...new Set(gifts)];

console.log(deleteDuplicates); // Mostraría el valor [3, 1, 2, 4, 5]
```

### Ordenar la lista dada

Para ordenar los elementos, usamos el método sort, el cual ordena los elementos según una función dada, como lo vemos en las siguientes líneas de código:

```js
deleteDuplicates.sort((a, b) => a - b)
```

La función hace lo siguiente: itera a través del array desde el primer valor, el cual asigna como primer argumento (a), y el segundo valor del array como el argumento (b), para luego hacer una comparación.

En este caso, la operación a realizar es la resta del primer argumento al segundo argumento (a - b). Esto nos retornará un valor igual, mayor o menor a cero. Según sea el caso, sucederá lo siguiente: probemos con los valores obtenidos en el ejemplo de Set.

```js

const gift = [3, 1, 2, 3, 4, 2, 5] // se observan valores repetidos en la lista

const deleteDuplicates = [...new Set(gifts)] //deleteDuplicates = [3, 1, 2, 4, 5]

deleteDuplicates.sort((a, b) => a - b)
```   

 1. **Resultado > 0** (invertirá los valores de a y b evaluados en la función).

	* Para la primera iteración, tendríamos 3 - 1 = 2 (un número mayor a 0), por lo que se invertirían los valores, quedando deleteDuplicates así: [1, 3, 2, 4, 5].
	* Para el siguiente caso, sucedería se comportaria igual, ya que el resultado de 3 - 2 = 1 (un número positivo), quedando la lista con los valores [1, 2, 3, 4, 5].

2.	**Resultado < 0** (los valores permanecerán sin invertirse en la lista).

	*	Para la tercera iteración, 3 - 4 = -1 (número menor a cero), por lo que el array permanece igual.
	* Para los casos siguientes, ocurrirá lo mismo, ya que se obtendrán números negativos, devolviendo el array ordenado de la siguiente manera: [1, 2, 3, 4, 5].
  
3. **Resultado = 0** (en este caso, significaría que los números son iguales, por lo que permanecerían iguales en sus posiciones dentro del array).

## Conclusión
Con esto entendido, solo queda retornar el valor obtenido y obtendríamos la respuesta deseada para los casos dados, según las condiciones solicitadas.