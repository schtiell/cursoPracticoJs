
function calcularPrecioConDescuento (precio, descuento) {

    const porcentajeDelPrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajeDelPrecioConDescuento) / 100;

    return precioConDescuento;

}

function onClickPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice").value;
    const inputDiscount = document.getElementById("InputDiscount").value;

    const precioConDescuento = calcularPrecioConDescuento(inputPrice, inputDiscount);
    
    const ResultPrice = document.getElementById("ResultPrice");
    ResultPrice.innerText = `El precio con descuento es: $${precioConDescuento} dls`;

}