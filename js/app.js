let unNumero = 5;

if ( unNumero > 10) {
    alert("Numero alto")
} else {
    alert("Numero menor a 10");
}

let nombre = prompt("Ingrese su nombre");

if (nombre == "") {
    alert("Ingrese su nombre por favor")
} else {
    alert("Hola señor " + nombre)
}

let myAge =  parseInt(prompt("Ingrese su edad"))
var esMenor = 18;

if (myAge <= esMenor) {
    alert("sos menor de edad... no pasas")
} else if(myAge < 30) {
    alert("Sos mayor... pasa")
} else if(myAge > 60) {
    alert("quedate en casa")
} else {
    alert("pasa vos tenes " + myAge)
}