
function calcularPrecioConDescuento (precio, descuento) {

    const porcentajeDelPrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajeDelPrecioConDescuento) / 100;

    return precioConDescuento;

}

function onClickPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice").value;
    const inputCoupon = document.getElementById("InputDiscount").value;

    const coupons = ["diez", "quince", "veinticinco", "treinta y cinco"];

    const precioConDescuento;
    const ResultPrice = document.getElementById("ResultPrice");

    if (inputCoupon === coupons[0]){
        precioConDescuento = calcularPrecioConDescuento(inputPrice, 10);
        ResultPrice.innerText = `El precio con descuento es: $${precioConDescuento} dls`;
    }else if (inputCoupon === coupons[1]){
        precioConDescuento = calcularPrecioConDescuento(inputPrice, 15);
        ResultPrice.innerText = `El precio con descuento es: $${precioConDescuento} dls`;
    }else if (inputCoupon === coupons[2]){
        precioConDescuento = calcularPrecioConDescuento(inputPrice, 25);
        ResultPrice.innerText = `El precio con descuento es: $${precioConDescuento} dls`;
    }else if (inputCoupon === coupons[3]){
        precioConDescuento = calcularPrecioConDescuento(inputPrice, 35);
        ResultPrice.innerText = `El precio con descuento es: $${precioConDescuento} dls`;
    }else if (inputCoupon === null || inputCoupon === undefined){
        ResultPrice.innerText = `El cupon indicado no tiene descuento`;
    }else{
        ResultPrice.innerText = `El cupon indicado no es valido`;
    }
}