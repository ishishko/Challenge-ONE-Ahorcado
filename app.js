const container3P = document.querySelector(".container3P");
const containerIncorectas = document.querySelector(".containerIncorectas");
const teclado = document.querySelector("html");
const expRegLetras = /^[A-Z]+$/i;
let Muneco = "";

let seleccionada = "";
let incorrecta = "";
let numeroIncorrectas = 0;
let correcta = "";
let numeroCorrectas = 0;
let numeroMuneco = 0;
let palabra = "";
let largoPalabra = 0;

if ((habilitateclado = true)) {
  teclado.addEventListener("keyup", (evt) => {
    evt = evt.key.toLocaleUpperCase();
    console.log(evt);
    if (expRegLetras.test(evt) == true && evt.split("").length == 1) {
      verificar(evt);
    }
  });
}

//selecciona palabra
function seleccionar(adivinar) {
  palabra = adivinar[Math.floor(Math.random() * adivinar.length)];
  seleccionada = palabra.toUpperCase();
  console.log(seleccionada);
}

//Poner todas las letras en mayusculas y devuelve array de palabra
function arrayPalabra(seleccion) {
  seleccion = seleccion.toUpperCase();
  seleccion = seleccion.split("");
  return seleccion;
}

//Creando grilla de palabras
function grillaPalabra(palabra) {
  largoPalabra = palabra.length - 1;
  console.log(palabra);
  for (let i = 0; i < palabra.length; i++) {
    const letras3P = document.createElement("div");
    letras3P.textContent = palabra[i];
    letras3P.id = i;
    letras3P.classList.add("texto", "letras", "letra" + i);
    container3P.appendChild(letras3P);
  }
}

//Inicia funciones de verificacion
function verificar(evt) {
  evt = evt.toUpperCase();
  correctas(evt);
  incorrectas(evt);
  if (numeroCorrectas == largoPalabra + 1) {
    console.log("GANASTE");
  }
  if (numeroIncorrectas == 6) {
    console.log("PERDISTE");
  }
}

//verifica si la letra esta incluida en la palabra secreta
//Compra cada letra y visiviliza las correctas|| Contador para ganar
function correctas(evt) {
  if (seleccionada.includes(evt)) {
    if (correcta.includes(evt) == false) {
      correcta = correcta + evt;
      for (let i = 0; i <= largoPalabra; i++) {
        const letra = document.querySelector(".letra" + i);
        if (evt == letra.textContent) {
          letra.style.fontSize = "48px";
          numeroCorrectas++;
        }
      }
    }
  }
}

//Guarda letras incorrectas sin repetir || Contador para perder
function incorrectas(evt) {
  if (seleccionada.includes(evt) == false) {
    if (incorrecta.includes(evt) == false) {
      numeroIncorrectas++;
      numeroMuneco++;
      incorrecta = incorrecta + evt;
      Muneco = document.querySelector(".muneco" + numeroMuneco);
      containerIncorectas.textContent = incorrecta;
      Muneco.style.display = "flex";
    }
  }
}
