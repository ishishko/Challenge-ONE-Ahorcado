const btnIniciar = document.querySelector(".btn--iniciar");
const btnIngresar = document.querySelector(".btn--ingresarPalabra");

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

btnIniciar.addEventListener("click", () => {
  seleccionar(palabras);
  palabra = arrayPalabra(palabra);
  grillaPalabra(palabra);
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
  container2.style.display = "none";
  container3.style.display = "flex";
});

secreta.addEventListener("click", () => {
  palabra = nuevaPalabra.value;
  palabra = arrayPalabra(palabra);
  grillaPalabra(palabra);

  container2.style.display = "none";
  container3.style.display = "flex";
});

cancelar.addEventListener("click", () => {
  window.location.reload();
});

nuevoJuego.addEventListener("click", () => {
  window.location.reload();
});

desistir.addEventListener("click", () => {
  window.location.reload();
});

//console.log(nuevoJuego);
