let colombia = [];

//Insertando objetos en el array de nombres y salarios de colombia
colombia.push({
    nombre: 'Jorge',
    salario: 1500
});

colombia.push({
    nombre: 'Luisa',
    salario: 2500
});

colombia.push({
    nombre: 'Elena',
    salario: 1200
});

colombia.push({
    nombre: 'Yadira',
    salario: 1750
});

colombia.push({
    nombre: 'Estela',
    salario: 3500
});

colombia.push({
    nombre: 'Enrique',
    salario: 4100
});

colombia.push({
    nombre: 'Daniela',
    salario: 530
});

colombia.push({
    nombre: 'Vanessa',
    salario: 10400
});

colombia.push({
    nombre: 'Roberto',
    salario: 7200
});

colombia.push({
    nombre: 'Esteban',
    salario: 670
});

colombia.push({
    nombre: 'Yamilet',
    salario: 4300
});

colombia.push({
    nombre: 'Valeria',
    salario: 1990
});

colombia.push({
    nombre: 'Quentin',
    salario: 9200
});

colombia.push({
    nombre: 'Uma',
    salario: 5600
});

colombia.push({
    nombre: 'Leticia',
    salario: 560
});

colombia.push({
    nombre: 'Liz',
    salario: 5300
});

colombia.push({
    nombre: 'Emma',
    salario: 2000
});

colombia.push({
    nombre: 'Juan',
    salario: 1600
});

colombia.push({
    nombre: 'Ana',
    salario: 9800
});

colombia.push({
    nombre: 'Cooper',
    salario: 9100
});


//Ordena el arreglo utilizando el metodo sort
function ordenarSalarios (array) {
    array.sort( (a, b) => {
        return a - b;
    })

    return array;
}

//Determina si el array tiene una longitud par o impar
function esPar (longitudArray) {
    if (longitudArray % 2 === 0){
        return true;
    }else{
        return false;
    }
}

//Obtener el promedio o media aritmetica
function obtenerMediaAritmetica(arrayOrdenado) {
    let suma = arrayOrdenado.reduce( (acumulador = 0, element) => {
        return acumulador += element;
    });

    let mediaAritmetica = suma / arrayOrdenado.length;

    return mediaAritmetica;
}

//Obtener los salarios del array de objetos y retornarlo ordenado
function obtenerSalarios (array) {

    let salarios = array.map( element => {
        return element.salario;
    });

    let arrayOrdenado = ordenarSalarios(salarios);

    //console.log (arrayOrdenado);

    return arrayOrdenado;
}

//Obtener la mediana de salarios
function obtenerMedianaSalarios (arrayOrdenado) {

    let mitadArray = parseInt(arrayOrdenado.length / 2);

    //console.log (mitadArray);

    if (esPar(arrayOrdenado.length)){
        let elemento1 = arrayOrdenado[mitadArray -1];
        let elemento2 = arrayOrdenado[mitadArray];

        mediana = obtenerMediaAritmetica([elemento1, elemento2]);

        return mediana;

    }else{

        mediana = arrayOrdenado[mitadArray];

        return mediana
    }
}

function obtenerMedianaTop10 (arreglo) {

    let countSplice = (arreglo.length * 10) / 100;

    let startSplice = arreglo.length - startSplice;

    let salariosColombia = arreglo.splice(startSplice, countSplice);

    console.log(salariosColombia);

    let salarios = obtenerMedianaSalarios(salariosColombia);

    return salarios;
}

//Instancia de la funcion para obtener mediana de los salarios
let salariosColombia = obtenerSalarios(colombia);
console.log(obtenerMedianaSalarios(salariosColombia));

console.log(obtenerMedianaTop10(salariosColombia));
