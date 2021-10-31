//Código del cuadrado

//Crea un nuevo grupo, indentando todos los mensajes subsecuentes en un nuevo nivel. Para retroceder un nivel, se utiliza groupEnd().
console.group("Cuadrado");

function perimetroCuadrado (lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}

//Fin del grupo cuadrado
console.groupEnd();



//Código del triángulo
console.group("Triángulos")

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo (base, altura) {
    return  (base * altura)/2;
}

//Fin del grupo triangulo
console.groupEnd();



//Código del circulo
console.group("Circulos");

function diametroCirculo(radio) {
    return radio * 2;
}

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * Math.PI;
}

function areaCirculo(radio) {
    return (radio * radio) * Math.PI;
}

//Fin del grupo circulo
console.groupEnd();


//Interacción con el HTML

//Funciones cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const  perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const  area = areaCuadrado(value);
    alert(area);
}

//Funciones triangulo

function datosParaCalculos(){
    let lado1 = parseInt(document.getElementById("InputTrianguloLado1").value);
    let lado2 = parseInt(document.getElementById("InputTrianguloLado2").value);
    let base = parseInt(document.getElementById("InputTrianguloBase").value);

    var arreglo = [];
    arreglo = [lado1,lado2,base]
    return arreglo;
}

function calcularAlturaTriangulo () {

    let datos = datosParaCalculos();

    if (datos[0] != datos[1]) {
        console.error("El lado 1 y el lado 2 no son iguales por lo tanto no se puede calcular la altura");
    }else{
        let hipotenusa_T1 = datos[0];
        let base_T1 = datos[2]/2;

        let altura = (Math.pow(hipotenusa_T1, 2) - Math.pow(base_T1, 2));

        let alturaT = Math.sqrt(altura)

        console.log(Math.round(alturaT));

        return alturaT;
    }
}

function calcularPerimetroTriangulo () {

    let datos = datosParaCalculos();

    const perimetroT = perimetroTriangulo(datos[0],datos[1],datos[2]);

    alert(perimetroT);
}

function calcularAreaTriangulo () {

    let base = datosParaCalculos();
    base = base[2];

    const altura = calcularAlturaTriangulo();

    const areaT = areaTriangulo(base, altura);
    alert(Math.round(areaT));
}


//Pendiente CIRCULO