const container3P = document.querySelector(".container3P");
const containerIncorectas = document.querySelector(".containerIncorectas");
const teclado = document.querySelector("html");
let Muneco = "";

let seleccionada = "";
let incorrecta = "";
let numeroIncorrectas = 0;
let numeroMuneco = 0;
let numeroCorrectas = 0;
let habilitateclado = false;
let palabra = "";
let largoPalabra = 0;

//if (habilitateclado) {
teclado.addEventListener("keyup", (evt) => {
  verificar(evt.key);
});
//}

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

function verificar(evt) {
  evt = evt.toUpperCase();
  if (seleccionada.includes(evt)) {
    for (let i = 0; i <= largoPalabra; i++) {
      const letra = document.querySelector(".letra" + i);
      if (evt == letra.textContent) {
        letra.style.fontSize = "48px";
        console.log("encontrada");
        numeroCorrectas++;
        if (numeroCorrectas == largoPalabra + 1) {
          console.log("GANASTE");
        }
      }
    }
  } else if (incorrecta.includes(evt)) {
    numeroIncorrectas++;
  } else {
    numeroMuneco++;
    numeroIncorrectas++;
    incorrecta = incorrecta + evt;
    containerIncorectas.textContent = incorrecta;
    Muneco = document.querySelector(".muneco" + numeroMuneco);
    Muneco.style.display = "flex";
  }
  if (numeroIncorrectas == 5) {
    console.log("Perdiste");
  }
}
