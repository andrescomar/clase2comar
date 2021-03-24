let nombrePerro = prompt("Ingrese nombre de su perro");

if (nombrePerro == "") {
    alert("Ingrese el nombre de su perro por favor")
} else {
    alert("Genial tu perro se llama " + nombrePerro)
}

let Perros =  parseInt(prompt("Cuantos perros tienes ?"))
var cantPerros = 5;

if (Perros <= cantPerros) {
    alert("Tenes pocos perros")
} else if(Perros < 15) {
    alert("Tenes una cantidad justa de perros")
} else if(Perros > 30) {
    alert("Deberias regalar algunos perros")
} else {
    alert( Perros + " son muchos perros")
}

let nombreGato = prompt("Ingrese nombre de su gato")
let nombreGata = prompt("Ingrese nombre de su gata")

if ( (nombreGato != "") && (nombreGata != "") ) {
    alert("Tu gato se llama " + nombreGato + " y tu gata " + nombreGata)
} else {
    alert("Por favor ingrese nombres de sus mascotas")
}