### 1. Responde las siguientes preguntas

- ¿Qué es una variable y para qué sirve?
Es una espacio en memoria reservado para el almacenamiento de valores los cuales pueden cambiar en cualquier momento durante la ejecución del script.

- ¿Cuál es la diferencia entre declarar e inicializar una variable?
La diferencia radica en que declarar es solo reservar la memoria que será utilizada en algun momento por un valor cualquiera. Por otro lado inicializar la variable es asignar un valor x a la misma.

- ¿Cuál es la diferencia entre sumar números y concatenar strings?
La primera es una operacion aritmetica que permite obtener el resultado de la adicion de 2 valores matematicos, por otro lado, concatenar significa unir dos o mas valores constantes o variables en una misma cadena o string

- ¿Cuál operador me permite sumar o concatenar?
El operador "+"

### 2. Determina el nombre y tipo de dato para almacenar en variables la siguiente información

- nombre : string
- apellido: string
- nombredeusuarioenplatzi: stirng
- edad: number
- correoelectronico: string
- mayordeedad: boolean
- dineroahorrado: number
- deudas: number

### 3.Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

```
let nombre  = 'joaquin';
let apellido = 'sayago';
let nombreDeUsuarioEnPlatzi = 'jsayagot';
let edad = 35;
let correoElectronico = 'isc.jsayago@hotmail.com';
let mayorDeEdad = true;
let dineroAhorrado = 1000;
let deudas = 800;

```

### 4. Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

```
function imprimirNombreCompleto (nombre, apellido){
	console.log( `El nombre completo es: $(nombre) $(apellido)`);
}

function calcularDineroReal (ahorro, adeudo) {
	let resultado = ahorro - adeudo;
	if ( resultado > 0) {
		return 'Pudiste pagar tus deudas sin problemas';	
	}else{
		return 'No alcanzas a pagar tus deudas, deberias administrar mejor tus ahorros';
	}
}

imprimirNombreCompleto ( nombre, apellido );
console.log(calcularDIneroReal ( dineroAhorrado, deudas) );

```

## Funciones

1. Funciones:  Responde las siguientes preguntas

- ¿que es una funcion?
Es un bloque de codigo que realiza una operación especifica y es ejecutado unicamente cuando es instanciado o invocado.

- ¿Cuándo me sirve usar una función en mi código?
Cuando se realiza en multiples ocaciones operaciones con valores constantes o variables, ya que permite la reutilización del codigo.

- ¿Cuál es la diferencia entre parámetros y argumentos de una función?
Un argumento es un valor enviado cuando se realiza el llamado a una función. El parametro es el valor esperado por dicha función el cual es necesario para realizar de manera adecuada su operación.

2. Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

var imprimir = (completeName, nickname) => {
	console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
}

imprimir(completeName, nicjname);

Condicionales: Responde las siguientes preguntas

- ¿Qué es una condicional?
Es una operacion de comparación que define si se cumple una situación dada o si no es asi.

¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
Las condicionales existentes son: 
if
else
else if. 
La condicional if permite determinar si una situación cumple con una condicion. por el contrario else, ejecuta otro proceso si la condicion primera no se cumplio. else if permite definir otros condiciones que posiblemente puedan cumplirse y por tanto el programa puede ejecutar otra serie de condiciones que no se cumplen en el if o else.

2. Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

const tipoDeSuscripcion = "Basic";

if (tipoDeSuscripción ==  'Basic'){ 
	console.log("Solo puedes tomar los cursos gratis");
}else if (tipoDeSuscripción ==  'Free') { 
	console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}else if (tipoDeSuscripción ==  'Expert') { 
	console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripción ==  'ExpertPlus'){ 
	console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
} 

3.  Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).
const tipoDeSuscripcion = "Basic";

if (tipoDeSuscripción ==  'Basic'){ 
	console.log("Solo puedes tomar los cursos gratis");
}
if (tipoDeSuscripción ==  'Free') { 
	console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}
if (tipoDeSuscripción ==  'Expert') { 
	console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} 
if (tipoDeSuscripción ==  'ExpertPlus'){ 
	console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
} 

3.1 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays y un solo condicional.

if (tipoDeSuscripción ==  'Free' || tipoDeSuscripción ==  'Basic' || tipoDeSuscripción ==  'Expert' || tipoDeSuscripción ==  'ExpertPlus')

var array = [ 'Free', 'Basic', 'Expert', 'ExpertPlus'];
array.forEach(element => {
	if (element == 'Free') {
		console.log("Solo puedes tomar los cursos gratis");
	}else if (element == 'Basic') { 
	 	 console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
	}  else if (element == 'Expert') { 
		console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
	} else if ((element == 'Expert'Plus)){ 
		console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
	}
});

Ciclos:  Responde las siguientes preguntas:

- ¿Qué es un ciclo?
Es un bloque de codigo que se ejecuta una serie de instrucciones tantas veces como sea requerido o hasta que el limite establecido se cumpla.

- ¿Qué tipos de ciclos existen en JavaScript?
for, while, do while, for each

- ¿Qué es un ciclo infinito y por qué es un problema?
Es un ciclo que no tiene fin, es un problema ya que termina por  saturar el procesamiento del equipo host y ocacionando que el equipo deje de responder.

- ¿Puedo mezclar ciclos y condicionales?
si

2.  Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

i = 0;
while (i >5) {
	console.log("El valor de i es: " + i);
	i += i;
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

i=10;
while (i >= 2) { 
	console.log("El valor de i es: " + i);
	i -= i;
}

3. Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

function preguntaSuma ( ) { 
	var resultado = parseInt(cpromptc( 'Cual es el resuldato de la  suma de 2 + 2:') );

	return resultado;

} 

function respuestaUser() { 
	let respuesta = preguntaSuma ();
	if ( respuesta == 4)  { 
	console.log('Felicidades tu respuesta es correcta');
	}else{
		preguntaSuma() 
	} 

var respuesta = respuestaUser( );

Listas:  Responde las siguientes preguntas

-  ¿Qué es un array?
Es una coleccion de datos de almacenados que pueden ser o no del mismo tipo. Utilizan los indices para apuntar al valor de esa posición.

- ¿Qué es un objeto?
Es un elemento que contiene datos que hacen referencia a un elemento que simula objetos reales, constan de propiedades y valores o de funciones  que son asociadas a estos objetos.

- ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
si

2. crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

var arreglo = [1,2,3,4,5]
function imprimir (arreglo) { 
	console.log (arreglo[0]);
}

imprimir(arreglo);

3. Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

var arreglo = [1,2,3,4,5]
function imprimir (arreglo) {
	for (let i =0; i < arreglo.length; i++) { 
		console.log(arreglo[ i ]);
	}
}

imprimir(arreglo);

4. Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

var obj = {
	nombre : 'joaquin',
	apellido : 'sayago',
	edad : 35
}

function imprimir (obj) { 
    for (const element in obj) {
      console.log(`${element}: ${obj[element]}`);
    }

} 

imprimir( obj );
