function eje0() {
    alert("Bienvenido a mi portafolio");
    let respuesta = confirm("¿Te gustaría continuar?");
    console.log("El usuario quiere continuar: " + respuesta);
    nombre = prompt("¿Cuál es tu nombre?");
    console.log("El nombre del usuario es: " + nombre);

}
function eje1() {
    for (let i = 1; i < 11; i++) {
        console.log((i));
    }
}
function eje2() {
    n = Number(prompt("Ingresa un número:"));
    let suma = 0;
    for (let i = 1; i < (n + 1); i++) {
        suma += i;
    }
    console.log(suma);
}
function eje3() {
    n = Number(prompt("Ingresa un número:"));
    for (let i = 0; i < (n + 1); i += 2) {
        console.log(i);
    }
}
function eje4() {
    let arbol = "*";
    for (let i = 1; i < 5; i++) {
        console.log(arbol);
        arbol = arbol + "*";
    }
}
function eje5() {
    let n = Number(prompt("Ingresa la altura del árbol:")) + 1;
    let arbol = "*";
    let espacios = " ".repeat(n - 1);
    for (let i = 1; i < n; i++) {
        console.log(espacios + arbol + arbol.slice(1));
        arbol = arbol + "*";
        espacios = espacios.slice(1);
    }
}
function eje6() {
    let inicio = Number(prompt("Ingresa el número inicial:"));
    let fin = Number(prompt("Ingresa el número final:"));
    for (let i = inicio; i <= fin; i++) {
        Array = [];
    }

    for (let i = inicio; i <= fin; i++) {

    }
}
function eje7() {
    let num = Math.floor(Math.random() * 100) + 1;
    let adivina = Number(prompt("Adivina el número entre 1 y 100:"));
    while (adivina !== num) {
        if (adivina < num) {
            adivina = Number(prompt("Demasiado bajo. Intenta de nuevo:"));
        } else {
            adivina = Number(prompt("Demasiado alto. Intenta de nuevo:"));
        }
    }
    console.log(num);
}
function saluda() {
    let nombre = document.getElementById("nombre").value;
    document.getElementById("nombreSaludos").innerHTML = " " + nombre + "";
}
let num = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
function GenerarNum() {
    num = Math.floor(Math.random() * 100) + 1;
    console.log("Número generado: " + num);
}
function AdivinaNum() {
    let adivina = Number(document.getElementById("adivina").value);
    intentos++;
    if (adivina === num) {
        document.getElementById("adivinatexto").innerHTML = "¡Felicidades! Has adivinado el número en " + intentos + " intentos.";
        intentos = 0;
        num = Math.floor(Math.random() * 100) + 1;
    } else if (adivina < num) {
        document.getElementById("adivinatexto").innerHTML = "Demasiado bajo. Intenta de nuevo. Intentos: " + intentos;
    } else {
        document.getElementById("adivinatexto").innerHTML = "Demasiado alto. Intenta de nuevo. Intentos: " + intentos;
    }
}