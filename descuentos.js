
function calcularPrecioConDescuento (precio, descuento) {

    const porcentajeDelPrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajeDelPrecioConDescuento) / 100;

    return precioConDescuento;
}

function onClickCouponDiscount() {

    const ResultPrice = document.getElementById("ResultPrice");
    let precioConDescuento;

    const inputPrice = Number(document.getElementById("InputPrice").value);
    const inputCoupon = Number(document.getElementById("SelectCoupon").value);

    const coupons = [5, 10, 15, 25, 35];

    if (inputPrice === '' || inputPrice === 0){

        ResultPrice.innerText = 'El precio indicado no es valido';

    } else {

        switch (inputCoupon) {
            case coupons[0]:
                precioConDescuento = calcularPrecioConDescuento(inputPrice, 5);
                ResultPrice.innerText = `El precio con descuento es: $${precioConDescuento} dls`;
                break;

            case coupons[1]:
                precioConDescuento = calcularPrecioConDescuento(inputPrice, 10);
                ResultPrice.innerText = `El precio con descuento es: $${precioConDescuento} dls`;
                break;

            case coupons[2]:
                precioConDescuento = calcularPrecioConDescuento(inputPrice, 15);
                ResultPrice.innerText = `El precio con descuento es: $${precioConDescuento} dls`;
                break;

            case coupons[3]:
                precioConDescuento = calcularPrecioConDescuento(inputPrice, 25);
                ResultPrice.innerText = `El precio con descuento es: $${precioConDescuento} dls`;
                break;

            case coupons[4]:
                precioConDescuento = calcularPrecioConDescuento(inputPrice, 35);
                ResultPrice.innerText = `El precio con descuento es: $${precioConDescuento} dls`;
                break;

            default:
                ResultPrice.innerText = `El cupon indicado no es valido`;
                break;
        }
    }
}

function onClickPriceDiscount () {

    //Llamada a la etiqueta p#ResultPrice para escribir en el DOM.
    const resultPrice = document.getElementById("ResultPrice");

    //Lamada a los valores ingresados en los inputs
    const inputPrice = document.getElementById("InputPrice").value;
    const inputDiscount = document.getElementById ( "InputDiscount").value;

    //Algunas validaciones con respecto al descuento
    if (inputDiscount == 0) {

        resultPrice.innerHTML = `El descuento es 0 asi que pagarás completo, el precio de tu articulo es: $${inputPrice} dls`;

    }else if (inputDiscount < 0 ){

        resultPrice.innerHTML = `El descuento es invalido, intentalo nuevamente.`;

    }else{

        //Instancia de la función con los argumentos obtenidos de los inputs
        const descuento = calcularPrecioConDescuento(inputPrice, inputDiscount );

        //Escribiendo en el DOM el resultado
        resultPrice.innerHTML= `El precio con el descuento aplicado es: $${descuento} dls`;
    }

}