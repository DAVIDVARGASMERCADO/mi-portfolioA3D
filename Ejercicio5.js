//FUNCIONES PARA CREAR TECLADO NUMERICO:
function crearTeclado(teclesNum) {
    let teclado = document.getElementById("tablaNum");
    for (let i = 1; i < teclesNum; i++) {
        let tecla = document.createElement("div");

        tecla.innerHTML = "<p>" + i + "</p>";
        tecla.className = "tecla";

        cambiaFondoNum(i, tecla);

        teclado.appendChild(tecla);
    }
}
function esPrimo(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
function cambiaFondoNum(i, tecla) {
    if (esPrimo(i)) {
        // NÚMEROS PRIMOS → Amarillo
        tecla.style.backgroundColor = "yellow";
        tecla.style.color = "black";
    } else {

        // NO PRIMOS → Colores según múltiplos
        if (i % 2 === 0) {
            tecla.style.backgroundColor = "blue";
            tecla.style.color = "white";
        }
        if (i % 3 === 0) {
            tecla.style.backgroundColor = "red";
            tecla.style.color = "white";
        }
        if (i % 5 === 0) {
            tecla.style.backgroundColor = "green";
            tecla.style.color = "white";
        }
    }
}
//FUNCIONES PARA CREAR TECLADO ALFABÉTICO:
function crearTecladoABC() {
    let teclado = document.getElementById("tablaABC");

    for (let i = 65; i < 91; i++) {
        let tecla = document.createElement("div");
        tecla.innerHTML = "<p>" + String.fromCharCode(i) + "</p>";
        tecla.className = "tecla";

        cambiaFondoABC(i, tecla);
        tecla.setAttribute('onclick', "escribeLetra('" + String.fromCharCode(i) + "')");

        teclado.appendChild(tecla);
    }
}
function cambiaFondoABC(i, tecla) {
    if (i === 65 || i === 69 || i === 73 || i === 79 || i === 85) {
        tecla.style.backgroundColor = "Orange";
        tecla.style.color = "white";
    }
    else { tecla.style.backgroundColor = "grey"; }
}
//FUNCIONES PARA CREAR WORDLE:
function crearWordle() {
    let wordle = document.getElementById("wordle");
    for (let i = 0; i < 5; i++) {
        let casilla = document.createElement("div");
        console.log("hola");
        casilla.innerHTML = "<p></p>";
        casilla.className = "casilla";
        wordle.appendChild(casilla);
    }
}
//FUNCIONES WORDLE:
function escribeLetra(letra) {
    let miTexto = document.getElementById("miTexto");
    if (miTexto.textContent.length < 5) {
        miTexto.textContent += letra;
    }
}
function borrarTexto() {
    let miTexto = document.getElementById("miTexto");
    miTexto.textContent = "";
}
function borrarLetra() {
    let miTexto = document.getElementById("miTexto");
    miTexto.textContent = miTexto.textContent.slice(0, -1);
}
function comprobarPalabra() {
    let miTexto = document.getElementById("miTexto").textContent;
    let wordle = document.getElementById("wordle");
    if (miTexto === palabra) {
        alert("¡Felicidades! Has adivinado la palabra secreta.");
        borrarTexto();
    }
    else {
        console.log("Palabra incorrecta. Intenta de nuevo.");
        for (i = 0; i < 5; i++) {
            if (miTexto[i] === palabra[i]) {
                wordle.children[i].style.backgroundColor = "green";
                wordle.children[i].style.color = "white";
            }
            else if (palabra.includes(miTexto[i]) && miTexto[i] !== palabra[i]) {
                wordle.children[i].style.backgroundColor = "yellow";
                wordle.children[i].style.color = "black";
            }
            else {
                wordle.children[i].style.backgroundColor = "grey";
                wordle.children[i].style.color = "white";

            }
            wordle.children[i].innerHTML = "<p>" + miTexto[i] + "</p>";
        }
        borrarTexto();
    }
}
function cambiarFondoWordle(miTexto, wordle) {
    
}
function palabraSecreta() {
    fetch('https://random-word-api.herokuapp.com/word?lang=es&length=5')
        .then(response => response.json())
        .then(data => {
            palabra = data[0]; // La API devuelve un array, ej: ["perro"]

            palabra = palabra.toUpperCase();
            console.log("Tu palabra secreta es:", palabra);
        });
}
let palabra = "";
let teclesNum = 10;

crearTeclado(teclesNum);
crearTecladoABC();
palabraSecreta();
crearWordle();