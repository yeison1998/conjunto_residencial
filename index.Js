// mis variables de entrada.
var metrosCuadrados = 0;
var tipoInmueble = "";
var valorAdministracion = 0;
var cuotaAseo = 0;
var derechosGimnasio = 0;
var genero = "";
var edad = 0;
var total = 0;
var totalPersonas = 0;

//Captura datos de entrada
metrosCuadrados = prompt("Digite los metros cuadrados.");

tipoInmueble = prompt('digite el tipo de inmueble  "casa"  o  "apartamento"');


totalPersonas = prompt("¿Cuantas personas viven en este inmueble?");

tipoInmueble = tipoInmueble.toUpperCase();

// procesos o calculos del problema.
valorAdministracion = ValorDeAdministracion(metrosCuadrados, tipoInmueble);
cuotaAseo = (valorAdministracion * 0.1) + (metrosCuadrados * 1000);
total = (valorAdministracion + cuotaAseo + derechosGimnasio);


function ValorDeAdministracion(metrosCuadrados, tipoInmueble) {
    if (tipoInmueble == "CASA") {
        return metrosCuadrados * 1500 + 100000;
    } else if (tipoInmueble == "APARTAMENTO") {
        return metrosCuadrados * 1500 + 50000;
    } else {
        document.write("Tipo  de inmueble no valido" + "<br>");
    }
}

for (var i = 0; i < totalPersonas; i++) {
    edad = prompt("¿Cual es su edad? " + (i + 1));
    genero = prompt("Digite su genero " + (i + 1))
    genero = genero.toLowerCase();
    derechosGimnasio += valorGimansio(edad, genero);
}
function valorGimansio(edad, genero) {
    switch (genero) {
        case "masculino":
            if (edad < 10) {
                return 0
            } else if (edad >= 10 && edad < 20) {
                return 20000
            } else if (edad >= 20 && edad < 40) {
                return 15000
            } else if (edad <= 40 && edad < 60) {
                return 10000
            } else if (edad > 60) {
                return 0
            } break;
        case "femenino":
            if (edad < 10) {
                return 0
            } else if (edad >= 10 && edad < 18) {
                return 15000
            } else if (edad >= 18 && edad < 35) {
                return 12000
            } else if (edad <= 35 && edad < 55) {
                return 8000
            } else if (edad > 5) {
                return 0
            } break;
    }


}


// salida del sistema.
document.write("Señores del apartamento numero 101, su cuota del mes: "+"<br>");

document.write("El valor de la administracion es: " + valorAdministracion + "<br>")
document.write("El valor de la cuota de aseo es de: " + cuotaAseo + "<br>");
document.write("El valor de la cuota del gimanasio es de: " + derechosGimnasio + "<br>");
document.write("El total del mes es de: " + total);

