console.log('Llegue al archivo figuras.js');

//Código del cuadrado

//Crea un nuevo grupo, indentando todos los mensajes subsecuentes en un nuevo nivel. Para retroceder un nivel, se utiliza groupEnd().
console.group("Cuadrado");
const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log(`Los lados del cuadrado miden: ${ladoCuadrado} cm`);
console.log(`El perímetro del cuadrado es: ${perimetroCuadrado} cm`);
console.log(`El área del cuadrado es: ${areaCuadrado} cm^2`);

//Fin del grupo cuadrado
console.groupEnd();


//Código del triángulo
console.group("Triángulos")
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
const areaTriangulo = (baseTriangulo * alturaTriangulo)/2; 

//Identación de un console log
console.log (`Los lados del triángulo miden: 
${ladoTriangulo1} cm 
${ladoTriangulo2} cm 
${baseTriangulo} cm
${alturaTriangulo} cm`
); 

console.log(`El perímetro del triángulo es: ${perimetroTriangulo} cm`);
console.log(`El área del triángulo es ${areaTriangulo} cm^2`);
console.log

//Fin del grupo triangulo
console.groupEnd();

//Código del circulo
console.group("Circulos");

const radioCirculo = 4;
const diametroCirculo = radioCirculo * 2;
const PI = Math.PI;
const perimetroCirculo = (diametroCirculo * PI);
const areaCirculo = (radioCirculo * radioCirculo) * PI;

console.log(`El radio del circulo es ${radioCirculo} cm`);
console.log(`El diametro del circulo es ${diametroCirculo} cm`);
console.log(`El valor de PI del circulo es ${PI}`);
console.log(`El perímetro del circulo es ${perimetroCirculo} cm`);
console.log(`El área del circulo es ${areaCirculo} cm^2`);

//Fin del grupo circulo
console.groupEnd();