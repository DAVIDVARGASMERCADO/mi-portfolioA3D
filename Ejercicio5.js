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
        tecla.style.backgroundColor = "yellow";
        tecla.style.color = "black";
    } else {

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
//FUNCIONES WORDLE:
function crearWordle() {
    let wordle = document.getElementById("wordle");
    inicioCasilla = 0;
    finalCasilla = 5;
    for (let i = 0; i < 30; i++) {
        let casilla = document.createElement("div");
        casilla.innerHTML = "<p></p>";
        casilla.className = "casilla";
        wordle.appendChild(casilla);
    }
}
function escribeLetra(letra) {
    let miTexto = document.getElementById("miTexto");
    if (miTexto.textContent.length < 5) {
        miTexto.textContent += letra;
    }
}
function comprobarPalabra() {
    let miTexto = document.getElementById("miTexto").textContent;
    let wordle = document.getElementById("wordle");

    if (intentos === 0) {
        inicioCasilla = 0;
        finalCasilla = 5;
    }
    if (intentos === 1) {
        inicioCasilla = 5;
        finalCasilla = 10;
    }
    if (intentos === 2) {
        inicioCasilla = 10;
        finalCasilla = 15;
    }
    if (intentos === 3) {
        inicioCasilla = 15;
        finalCasilla = 20;
    }
    if (intentos === 4) {
        inicioCasilla = 20;
        finalCasilla = 25;
    }
    if (intentos === 5) {
        inicioCasilla = 25;
        finalCasilla = 30;
    }

    if (miTexto === palabra) {
        alert("¡Felicidades! Has adivinado la palabra secreta.");
        borrarTexto();
        borrarWordle();
        crearWordle();
        palabraSecreta();
    }
    else {
        console.log("Palabra incorrecta. Intenta de nuevo.");
        for (i = inicioCasilla; i < finalCasilla; i++) {
            let diferencia = Math.abs(finalCasilla - i - 5);

            if (miTexto[diferencia] === palabra[diferencia]) {
                wordle.children[i].style.backgroundColor = "green";
                wordle.children[i].style.color = "white";
            }
            else if (palabra.includes(miTexto[diferencia]) && miTexto[diferencia] !== palabra[diferencia]) {
                wordle.children[i].style.backgroundColor = "yellow";
                wordle.children[i].style.color = "black";
            }
            else {
                wordle.children[i].style.backgroundColor = "grey";
                wordle.children[i].style.color = "white";

            }
            wordle.children[i].innerHTML = "<p>" + miTexto[diferencia] + "</p>";
        }
    }

    intentos += 1;
    borrarTexto();
}
function borrarTexto() {
    let miTexto = document.getElementById("miTexto");
    miTexto.textContent = "";
}
function borrarLetra() {
    let miTexto = document.getElementById("miTexto");
    miTexto.textContent = miTexto.textContent.slice(0, -1);
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
function borrarWordle() {
    document.getElementById("wordle").innerHTML = "";
    inicioCasilla = 0;
    finalCasilla = 5;
}

let palabra = "";
let teclesNum = 10;
let intentos = 0;
let inicioCasilla = 0;
let finalCasilla = 5;

crearTeclado(teclesNum);
crearTecladoABC();
palabraSecreta();
crearWordle();