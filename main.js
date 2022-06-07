function ingresarUsuario() {
    let ingresarUsuario = prompt("Hola! Bienvenida/o a nuestra tienda \nPorfavor ingrese su usuario.");
    alert("Hola " + ingresarUsuario + "," + " porfavor seleccione los productos que desea en la siguiente página:");
}

ingresarUsuario()

function productos() {
    let ingreso = prompt("Ingresa el número correspondiente a la opción que deseas. \n 1-Limpiador $359 \n 2-Serum $680 \n 3-Hidratante $520 \n 4- Tratamiento $450 \n 5-Pantalla solar SPF +50 $890");
    while (ingreso != "SALIR") {
        switch (ingreso) {
            case "1":
                alert("Seleccionaste Limpiador");
                break;
            case "2":
                alert("Seleccionaste Serum");
                break;
            case "3":
                alert("Seleccionaste Hidratante");
                break;
            case "4":
                alert("Seleccionaste Tratamiento");
                break;
            case "5":
                alert("Seleccionaste Pantalla solar SPF +50");
                break;
            default:
                alert("Opcion no valida");
                break;
        }
        ingreso = prompt("Ingresa el número correspondiente a la opción que deseas. \n 1-Limpiador $359 \n 2-Serum $680 \n 3-Hidratante $520 \n 4- Tratamiento $450 \n 5-Pantalla solar SPF +50 $890 \n\n Para salir ingresa SALIR")
    }
}

productos()

let limpiador = 359
let serum = 680
let hidratante = 520
let tratamiento = 450
let pantalla = 890
