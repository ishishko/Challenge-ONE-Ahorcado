const btnIniciar = document.querySelector(".btn--iniciar");
const btnIngresar = document.querySelector(".btn--agregarPalabra");

const nuevaPalabra = document.querySelector(".ingresartexto");
const guardar = document.querySelector(".guardar");
const secreta = document.querySelector(".secreta");
const cancelar = document.querySelector(".cancelar2");

const nuevoJuego = document.querySelector(".nuevo");
const desistir = document.querySelector(".desistir");
const container1 = document.querySelector(".flex__container1");
const container2 = document.querySelector(".flex__container2");
const container3 = document.querySelector(".flex__container3");

let palabras = [
  "html",
  "css",
  "alura",
  "oracle",
  "one",
  "challenge",
  "logica",
  "javascript",
  "java",
  "python",
  "cloud",
  "funciones",
  "variable",
  "array",
  "objeto",
  "paradigma",
  "trello",
  "figma",
  "junior",
];
let palabra = "";
let habilitateclado = false;
let modo = true;

btnIniciar.addEventListener("click", () => {
  seleccionar(palabras);
  palabra = arrayPalabra(palabra);
  grillaPalabra(palabra);
  habilitateclado = true;
  container1.style.display = "none";
  container3.style.display = "flex";
});

btnIngresar.addEventListener("click", () => {
  container1.style.display = "none";
  container2.style.display = "flex";
});

guardar.addEventListener("click", () => {
  palabras.push(nuevaPalabra.value);
  seleccionar(palabras);
  palabra = arrayPalabra(palabra);
  grillaPalabra(palabra);
  habilitateclado = true;
  modo = false;
  container2.style.display = "none";
  container3.style.display = "flex";
});

secreta.addEventListener("click", () => {
  console.log(nuevaPalabra.value);
  if (nuevaPalabra.value != "" && expRegLetras.test(nuevaPalabra.value) == true) {
    palabra = nuevaPalabra.value;
    palabra = arrayPalabra(palabra);
    grillaPalabra(palabra);
    habilitateclado = true;
    modo = false;
    container2.style.display = "none";
    container3.style.display = "flex";
  } else {
    console.log("error");
    nuevaPalabra.value = "";
  }
});

cancelar.addEventListener("click", () => {
  window.location.reload();
});

nuevoJuego.addEventListener("click", () => {
  console.log("nuevo juego");
  container3.style.display = "flex";
  reiniciarJuego();
});

desistir.addEventListener("click", () => {
  window.location.reload();
});
