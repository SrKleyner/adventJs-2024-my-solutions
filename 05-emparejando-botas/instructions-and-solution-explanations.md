# Instrucciones y explicacion de la solucion dada

## Problema

Los elfos 🧝🧝‍♂️ de Santa Claus han encontrado un montón de botas mágicas desordenadas en el taller. Cada bota se describe por dos valores:

- type indica si es una bota izquierda (I) o derecha (R).
- size indica el tamaño de la bota.

Tu tarea es ayudar a los elfos a emparejar todas las botas del mismo tamaño que tengan izquierda y derecha. Para ello, debes devolver una lista con los pares disponibles después de emparejar las botas.

¡Ten en cuenta que puedes tener más de una zapatilla emparejada del mismo tamaño!

## Explicación de los requerimientos solicitados

El objetivo principal es emparejar botas mágicas del mismo tamaño que tengan una bota izquierda (I) y una bota derecha (R), y devolver una lista de los tamaños de los pares encontrados.

### Requerimientos Solicitados:

1. Emparejar por Tamaño: Las botas deben emparejarse solo si tienen el mismo tamaño.
2. Emparejar por Tipo: Las botas deben emparejarse solo si una es izquierda (I) y la otra es derecha (R).
3. Devolver Lista de Tamaños: La función debe devolver una lista con los tamaños de los pares encontrados.
4. Manejar Múltiples Pares: La función debe poder encontrar y devolver múltiples pares del mismo tamaño.
5. Manejar Botas Sin Pareja: La función debe ignorar las botas que no tienen una pareja correspondiente.

### Pasos para Alcanzar el Objetivo:

1. Agrupar Botas por Tamaño: Organizar las botas en un objeto, donde las claves sean los tamaños y los valores sean objetos que contengan información sobre las botas izquierdas y derechas de ese tamaño.
2. Identificar Pares: Iterar sobre el objeto de tamaños y buscar pares de botas izquierdas y derechas.
3. Agregar Tamaños a la Lista: Agregar los tamaños de los pares encontrados a una lista.
Devolver Lista de Pares: Devolver la lista de tamaños de los pares encontrados.

## Solución propuesta

```javaScript
    function organizeShoes(shoes) {
    const object = {};
    const pairs = [];
    shoes.forEach((shoe) => {
      const { type, size } = shoe;
			object[size] ??= { type, quantity: 0 };
			if (object[size].type != type){
				pairs.push(size);
				object[size].quantity--;
				if (object[size].quantity === 0) object[size] = undefined;
			}else {
				object[size].quantity++;
			};

    });
    return pairs;
  }
```

## Resultado esperado

```javaScript
const shoes = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 42 }
]

organizeShoes(shoes)
// [38, 42]
```

## Explicacion paso a paso de la solucion

1. `function organizeShoes(shoes) { ... }`:

    * Se define una función llamada organizeShoes que toma un array de botas como argumento.

2. `const object = {};`:

    * Se inicializa un objeto vacío llamado object para almacenar las botas agrupadas por tamaño.

3. `const pairs = [];`:

    *   Se inicializa un array vacío llamado pairs para almacenar los tamaños de los pares encontrados.

4.  `shoes.forEach((shoe) => { ... });`:

    *   Se utiliza el método `forEach()` para iterar sobre el array de `botas`.
En cada iteración, shoe representa una bota individual.

5.  `const { type, size } = shoe;`:

    *   Se utiliza la desestructuración de objetos para extraer las propiedades `type` y `size` de la bota actual.

6.  `object[size] ??= { type, quantity: 0 };`:

    *   Este es el operador de coalescencia nula (`??=`).
    *   Verifica si `object[size]` es `null` o `undefined`.
    *   Si es así, asigna un objeto con las propiedades type y quantity: 0 a object[size]. Esto asegura que cada tamaño tenga su propio objeto para almacenar información sobre las botas.

7.  `if (object[size].type != type) { ... }` `else { ... }`:

    *   Se verifica si el tipo de la bota actual es diferente del tipo de la bota almacenada en `object[size]`.
    *   Si los tipos son diferentes (es decir, tenemos un par), se ejecuta el bloque `if`.
    *   Si los tipos son iguales, se ejecuta el bloque `else`.

8.  Bloque if (Par Encontrado):

    *   `pairs.push(size);`: Se agrega el tamaño del par a la lista pairs.
    *   object[size].quantity--;: Se reduce la cantidad de botas disponibles de ese tamaño en 1.
    *   `if (object[size].quantity === 0) object[size] = undefined;`: Si la cantidad de botas disponibles de ese tamaño llega a `0`, se elimina la entrada correspondiente del objeto `object`.

9.  Bloque `else` (Misma Bota):

    *   `object[size].quantity++;`: Se aumenta la cantidad de botas disponibles de ese tamaño en `1`.

10. `return pairs`;:

    *   Se devuelve la lista pairs que contiene los tamaños de los pares encontrados.