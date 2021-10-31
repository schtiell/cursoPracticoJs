const lista1 = [34,23,67,43,12,89,34,23,6,112,64];

function calcularMediaAritmetica(lista) {

    let sumaLista = lista.reduce(function (valorAcumulado = 0, element) {
        valorAcumulado += element;
        return valorAcumulado;
    })

    promedioLista1 = sumaLista / lista.length;

    return promedioLista1;
}

function esPar(lista){
    if (lista % 2 === 0){
        return true;
    }else{
        return false;
    }
}


function calcularMediana (lista) {

    lista.sort((a, b) => {
        return a - b;
    });

    console.log(lista);

    const mitadLista = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        let elemento1 = lista[mitadLista -1];
        let elemento2 = lista[mitadLista];

        console.log(calcularMediaAritmetica([elemento1, elemento2]));

    } else {
        let mediana = lista[mitadLista];
        console.log(mediana);
    }

}

calcularMediana(lista1);
