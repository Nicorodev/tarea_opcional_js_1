// En una tienda de venta de repuestos automotrices se tiene que el descuento depende del monto de venta total.
// Se ingresa el monto de venta y el sistema debe calcular el descuento y restarlo del total segun las reglas:
// - Si el monto es menor que 500 no hay descuento
// - Si el monto está comprendido entre 500 y 1000 inclusive, el descuento es de 5%
// - Si el monto está comprendido entre 1000 y 7000 inclusive, el descuento es del 11%
// - Si el monto está comprendido entre 7000 y 15000 inclusive, el descuento es del 18%
// - Si el monto es mayor de 15000 el desc es del 25%.
// por ejemplo si se ingresa un monto de 5000 el descuento sera 550, y por tanto el valor a pagar sera 4450.

let montoIngresado = prompt("Ingrese un monto: ");
let descuento = 0;
let resultado = 0;

if (montoIngresado < 500){
    console.log("El monto ingresado es menor a 500 por lo tanto no hay descuento");
    }
    else if (montoIngresado >= 500 && montoIngresado <= 1000){
        descuento = montoIngresado * 0.05 / 100;
        resultado = montoIngresado - descuento;

        console.log(`El monto ingresado fue de: ${montoIngresado} el descuento es del 5% por lo tanto el total es: ${resultado}`);
    }
    else if (montoIngresado >= 1000 && montoIngresado <= 7000){
        descuento = montoIngresado * 0.11 / 100;
        resultado = montoIngresado - descuento;

        console.log(`El monto ingresado fue de: ${montoIngresado} el descuento es del 11% por lo tanto el total es: ${resultado}`);
    }
    else if (montoIngresado >= 7000 && montoIngresado <= 15000){
        descuento = montoIngresado * 0.18 / 100;
        resultado = montoIngresado - descuento;

        console.log(`El monto ingresado fue de: ${montoIngresado} el descuento es del 18% por lo tanto el total es: ${resultado}`);
    }
    if (montoIngresado > 15000){
        descuento = montoIngresado * 0.25 / 100;
        resultado = montoIngresado - descuento;

        console.log(`El monto ingresado fue de: ${montoIngresado} el descuento es del 25% por lo tanto el total es: ${resultado}`);
    }