let lista = [1,4,2,3,1,5,4,3,4,3,2,3,1,5,3,6];


function calcularModa (lista) {

    const listaCount = {};

    lista.map(element =>{
        if (listaCount[element]){
            listaCount[element] += 1;
        }else{
            listaCount[element] = 1;
        }
    })

    lista = Object.entries(listaCount).sort((a , b) => {
        return a[1] - b[1];
    })

    console.log(lista)

    const moda = lista[lista.length -1];

    return moda;

}

calcularModa(lista);