const lista = [100,200,300,500];

function calcularMediaAritmetica(lista) {

    // let sumaLista = 0;

    // for (let i = 0; i < lista.length; i++) {

    //     sumaLista += lista[i];

    // }

    let sumaLista = lista.reduce(function (valorAcumulado = 0, element) {
        valorAcumulado += element;
        return valorAcumulado;
    })

    promedioLista1 = sumaLista / lista.length;

    return promedioLista1;
}



