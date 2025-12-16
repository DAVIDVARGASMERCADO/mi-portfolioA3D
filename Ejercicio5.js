function crearTeclado(num) {
    let teclado = document.getElementById("tablaNum");
    for (let i = 1; i < num; i++) {
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
    // NO PRIMOS → Colores según múltiplos
    if (i === 65 || i === 69 || i === 73 || i === 79 || i === 85) {
        tecla.style.backgroundColor = "Orange";
        tecla.style.color = "white";
    }
    else { tecla.style.backgroundColor = "grey"; }
}
crearTeclado(10);

crearTecladoABC();

function AdivinaPalabra() {
    let palabraSecreta = "JAVASCRIPT";

    if (document.getElementById("escriu").value === palabraSecreta) {
        alert("¡Felicidades! Has adivinado la palabra secreta.");
    } else {
        alert("Lo siento, esa no es la palabra correcta. Inténtalo de nuevo.");
    }
}

function escribeLetra(letra) {
    console.log(letra);
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
    let palabraSecreta = "CASAS";
    let miTexto = document.getElementById("miTexto").textContent;

    if (miTexto === palabraSecreta) {
        alert("¡Felicidades! Has adivinado la palabra secreta.");
        borrarTexto();
    } else {
        alert("Lo siento, esa no es la palabra correcta. Inténtalo de nuevo.");
        borrarTexto();
    }
}