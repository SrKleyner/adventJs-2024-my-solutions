# Instrucciones y explicacion de la solucion dada

## Problema

Santa Claus 🎅 quiere enmarcar los nombres de los niños buenos para decorar su taller 🖼️, pero el marco debe cumplir unas reglas específicas. Tu tarea es ayudar a los elfos a generar este marco mágico.

* Dado un array de nombres, debes crear un marco rectangular que los contenga a todos.
* Cada nombre debe estar en una línea, alineado a la izquierda.
* El marco está construido con * y tiene un borde de una línea de ancho.
* La anchura del marco se adapta automáticamente al nombre más largo más un margen de 1 espacio a cada lado.
---

## Explicación de los requerimientos solicitados

El objetivo es crear un marco alrededor de cada nombre en una lista de cadenas, donde:
1.	Ancho Uniforme: El ancho del marco debe ser el mismo para todos los nombres, basado en la longitud del nombre más largo en la lista.
2.	Alineación a la Izquierda: Los nombres deben estar alineados a la izquierda dentro del marco.
3.	Padding Lateral: Se debe agregar un espacio en blanco a cada lado del nombre dentro del marco.
4.	Bordes: Cada línea del marco debe comenzar y terminar con un asterisco (*).

Para lograr esto, necesitamos:

[•	Determinar la longitud del nombre más largo](#obtener-el-largo-de-la-cadena-con-mas-caracteres-contenida-en-la-lista)

[•	Calcular el espacio adicional necesario para cada nombre más corto.](#agregar-los-marcos-laterales)

[•	Construir cada línea del marco con el nombre, el padding y los bordes.](#agregar-los-marcos-laterales)


## Solución propuesta

```javascript
function createFrame(names) {
  const longest = names.reduce((acc, name) => name.length > acc ? name.length : acc, 0);
  const framedNames = names.map(name => {
		const spaces = ' '.repeat(longest - name.length);
		return `* ${name}${spaces} *\n`;
	});

  const frame = '*'.repeat(longest + 4);
  framedNames.push(frame);
  framedNames.unshift(`${frame}\n`);
  
  return `${frame}\n` + framedNames.join('') + frame;
}
```

## Resultado esperado
```
createFrame(['a', 'bb', 'ccc'])

// Resultado esperado:

*******
* a   *
* bb  *
* ccc *
*******
```

## Explicacion paso a paso de la solucion

### Obtener el largo de la cadena con mas caracteres contenida en la lista.

Para determinar la longitud de la cadena más larga dentro de un array de strings, podemos utilizar el método `reduce()`. Este método es ideal para "reducir" un array a un único valor, en este caso, la longitud máxima encontrada.

1-.	Inicialización:
* Comenzamos con un valor inicial de 0, que representa la longitud máxima encontrada hasta el momento. Este valor se pasa como segundo argumento a `reduce()`.

* `reduce()` itera sobre cada elemento del array `names`.

2-.	Acumulador y Elemento Actual:

*	En cada iteración, `reduce()` utiliza dos variables:
	+	**acc (acumulador)**: Almacena la longitud máxima encontrada hasta el momento.
	+	**name (elemento actual)**: Representa la cadena que se está evaluando en la iteración actual.

3-. Comparación de Longitudes:

*	Para cada `name`, comparamos su longitud (`name.length`) con el valor actual del acumulador (`acc`).

*	Si la longitud de `name` es mayor que `acc`, significa que hemos encontrado una cadena más larga. En este caso, actualizamos `acc` con la longitud de `name`.
*	Si la longitud de `name` no es mayor que `acc`, mantenemos el valor actual de `acc`.

#### codigo reduce()
```javaScript
const longest = names.reduce((acc, name) => name.length > acc ? name.length : acc, 0);
```
#### desglose del codigo reduce()

*	`names.reduce(...)`: Aplicamos el método `reduce()` al array `names`.
*	`(acc, name) => ...`: Definimos una función flecha que toma el acumulador (`acc`) y el elemento actual (`name`) como argumentos.
*	`name.length > acc ? name.length : acc`: Esta es una **expresión ternaria** que compara las longitudes y devuelve el valor máximo.
*	`0`: El valor inicial del acumulador.

### construir marcos laterales y calcular espacio adicional.

Para lograr este objetivo debemos tomar en cuenta los requerimientos ya enumerados con anterioridad

*	[Requerimientos](#explicación-de-los-requerimientos-solicitados)

#### Solucion con metodos map() y repeat()
```javaScript
const framedNames = names.map(name => {
    const spaces = ' '.repeat(longest - name.length);
    return `* ${name}${spaces} *\n`;
});
```

####Explicación de los métodos utilizados:

#### map():

Crea un nuevo array con los resultados de llamar a una función proporcionada en cada elemento del array original.

en este caso lo vemos asi:

```js
names.map(name => { ... })
```
>[!NOTE]
>Para cada `name` en el array, la función flecha dentro de `map()` se ejecuta, transformando cada elemento del array `names` en un nuevo elemento. `map()` Es ideal para transformar cada elemento de un array, sin modificar el array original.

#### repeat():

>[!NOTE] 
>Para entenderlo con mas claridad: el método `repeat()` crea una cadena que **repite** tantas veces se le especifique en su argumento la cadena que le llama. Por ejemplo, `"*".repeat(3)` regresa "\***" (3 asteriscos).
>
>
```js
const spaces = ' '.repeat(longest - name.length);
```

En donde `longest - name.length`,  Calcula la diferencia entre la longitud del nombre más largo y la longitud del nombre actual. **Esta diferencia representa la cantidad de espacios adicionales necesarios.**

para nuestro ejemplo estaria devolviendo la cantidad de espacios en blanco que corresponden al resultado de evaluar `longest - name.length` y los almacena en la variable `spaces`. 

---

Para terminar con la construccion del marco de nombres solicitados se construye la línea del marco utilizando plantillas de cadena (template literals), retornando el resultado del método `map()` de la siguiente manera
 
 ```js
 return `* ${name}${spaces} *\n`
 ```

y almacenando estos valores en la variable `framedNames`

---

### Construir marco superior e inferior

Para finalizar con la construcción del marco que contiene los nombres debemos colocar el marco superior e inferior y como es solicitado en el enunciado devolver una cadena con los valores obtenidos hasta el momento. 
Como ya deben estar suponiendo, si se entendió el funcionamiento del método `repeat()`, crearemos el Marco superior e inferior con este, para saber el tamaño exacto de estos tomamos el valor almacenado en `longest` y le sumamos 4 esa suma adicional es debido a que uno de los requerimientos decía que la anchura del marco se adapta al nombre más largo más 1 espacio de cada lado y aunque esto sume solo 2 hay que agregar 2 más que serán los “\*” agregados a cada lado de los nombres para formar los marcos laterales, los que no deja el siguiente código :

```javaScript
const frame = '*'.repeat(longest + 4);
```
Ya témenos almacenado en `frame` la cadena de caracteres con los asteriscos del tamaño requerido solo debemos retornarlos con la lista `famedNames` y asignarle a esta lista el método `join(‘’)` para convertir la misma en una cadena de caracteres, quedando de la siguiente manera
```javaScript
return `${frame}\n` + framedNames.join('') + frame;
```
>[!important]
>Cada elemento almacenado en la lista frmedNames tiene un salto de linea \"\\n" al final de la cadena por lo que se podra apreciar el [resultado desado](#resultado-esperado) .
