# Instrucciones y explicacion de la solucion dada

## Problema

¡Es hora de poner el árbol de Navidad en casa! 🎄 Pero este año queremos que sea especial. Vamos a crear una función que recibe la altura del árbol (un entero positivo entre 1 y 100) y un carácter especial para decorarlo.

La función debe devolver un string que represente el árbol de Navidad, construido de la siguiente manera:

- El árbol está compuesto de triángulos de caracteres especiales.
- Los espacios en blanco a los lados del árbol se representan con guiones bajos \_.
- Todos los árboles tienen un tronco de dos líneas, representado por el carácter #.
- El árbol siempre debe tener la misma longitud por cada lado.
- Debes asegurarte de que el árbol tenga la forma correcta usando saltos de línea \n para cada línea.

## Explicación de los requerimientos solicitados

El objetivo principal es crear una representación de un árbol de Navidad en forma de cadena de texto, donde la altura del árbol y el carácter de decoración son personalizables.

### Requerimientos Solicitados:

1. **Altura Personalizable**: El árbol debe tener una altura especificada por un número entero positivo.

2. **Decoración Personalizable**: El árbol debe estar decorado con un carácter especial proporcionado.

3. **Forma de Triángulo**: El árbol debe ser triangular, aumentando en anchura con cada nivel desde el tope hasta dos lineas por encima de la representacion del tronco.

4. **Espacios en Blanco**: Los espacios a los lados del árbol deben representarse con guiones bajos (\_).

5. **Tronco**: El árbol debe tener un tronco de dos líneas, representado por el carácter #.

6. **Alineación Centrada**: El árbol debe estar centrado, con la misma cantidad de guiones bajos a cada lado.

7. **Saltos de Línea**: Cada línea del árbol debe estar separada por un salto de línea (\n), exceptuando el ultimo tronco.

### Pasos para Alcanzar el Objetivo:

1.  Construir el Triángulo: Crear las líneas del triángulo del árbol, aumentando el número de caracteres de decoración en cada línea.
2.  Agregar Espacios Laterales: Agregar guiones bajos a los lados de cada línea para centrar el árbol.
3.  Construir el Tronco: Crear las dos líneas del tronco del árbol, centradas.
4.  Concatenar Líneas: Concatenar todas las líneas del árbol en una sola cadena, separadas por saltos de línea.

## Solución propuesta

```javaScript
    function createXmasTree(height, ornament) {
    let xmasTree = "";

    for (let i = 1; i <= height; i++) {
        const wall = "_".repeat(height - i);
        xmasTree += `${wall}${ornament.repeat(i + (i - 1))}${wall}\n`;
    }
    const base = "_".repeat(height - 1);
    xmasTree += `${base}#${base}\n${base}#${base}`;

    return xmasTree;
}
```
## Resultado esperado

```javaScript
const tree3 = createXmasTree(6, '@')
console.log(tree3)
/*
_____@_____
____@@@____
___@@@@@___
__@@@@@@@__
_@@@@@@@@@_
@@@@@@@@@@@
_____#_____
_____#_____
*/
```

## Explicacion paso a paso de la solucion

1.  `function createXmasTree(height, ornament) { ... }`:

    +   Se define una función llamada createXmasTree que toma la altura del árbol y el carácter de decoración como argumentos.

2.  `let xmasTree = "";`:

    +   Se inicializa una cadena vacía llamada `xmasTree` para almacenar el árbol construido.

3.  `for (let i = 1; i <= height; i++) { ... }`:

    +   Se inicia un bucle `for` que itera desde 1 hasta la altura del árbol.
    +   En cada iteración, `i` representa el nivel actual del árbol.

4.  `const wall = "_".repeat(height - i);`:

    +   Se calcula la cantidad de guiones bajos necesarios para centrar la línea actual.
    +   `height - i` representa la cantidad de espacios necesarios a cada lado.
    + `"_".repeat(...)` crea una cadena con la cantidad calculada de guiones bajos.
        >[!NOTE]
        >Se explica el funcionamiento del metodo  [reduce()](https://github.com/SrKleyner/adventJs-2024-my-solutions/blob/main/02-enmarcando-nombres/instructions-and-solution-explanations.md#repeat) en el 2do reto.

5.  ```xmasTree += `${wall}${ornament.repeat(i + (i - 1))}${wall}\n`;```:

    +   Se construye la línea actual del árbol utilizando plantillas de cadena.
    +   `${wall}`: Se agregan los guiones bajos laterales.
    +   `${ornament.repeat(i + (i - 1))}`: Se agregan los caracteres de decoración. i + (i - 1) calcula la cantidad de caracteres necesarios para el nivel actual.
    +   \n: Se agrega un salto de línea para separar las líneas.
    + `xmasTree += ...`: Se agrega la línea construida a la cadena xmasTree.

6.  `const base = "_".repeat(height - 1);`:

    +   Se calcula la cantidad de guiones bajos necesarios para centrar el tronco.
    +   height - 1 representa la cantidad de espacios necesarios a cada lado del tronco.

7.  ``` xmasTree += `${base}#${base}\n${base}#${base}`;```:

    +   Se construye el tronco del árbol utilizando plantillas de cadena.

        >[!NOTE]
        >Plantillas de Cadena: Las plantillas de cadena (template literals) (son los acentos invertidos)se utilizan para construir cadenas de manera más legible, permitiendo la interpolación de variables y expresiones.

    +   ``` `${base}#${base}\n${base}#${base}`;```: 
        +   Se agregan las dos líneas del tronco, separadas por un salto de línea.
8.  `xmasTree += ...`: Se agrega el tronco a la cadena xmasTree.

9.  `return xmasTree;`:

    +   Se devuelve la cadena xmasTree que representa el árbol de Navidad completo.