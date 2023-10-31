import "./style.css";

let puntuacion: number = 0;
let numeroActual: number = 0;

function mensajeGameOver(mensaje: string) {
  let gameOverElement = document.getElementById("gameover");
  if (gameOverElement && gameOverElement instanceof HTMLElement) {
    gameOverElement.innerHTML = mensaje;
  }
}

function muestraPuntuacion(): void {
  let puntuacionElement = document.getElementById("puntuacion");

  if (puntuacionElement && puntuacionElement instanceof HTMLElement) {
    puntuacionElement.innerHTML = puntuacion.toString();
  }
  if (puntuacion > 7.5) {
    mensajeGameOver("Te has pasado de 7.5 puntos. Has perdido!! 😟");
    const botonCarta = document.getElementById("dameCarta");
    if (botonCarta && botonCarta instanceof HTMLButtonElement) {
      botonCarta.disabled = true;
    }
  }
}

function muestraLaCarta(carta: string): void {
  let cartaElement = document.getElementById("carta");
  if (cartaElement && cartaElement instanceof HTMLImageElement) {
    cartaElement.src = carta;
  }
}

function dameCarta(): void {
  let numeroRandom: number = Math.floor(Math.random() * 11);

  if (numeroRandom > 7) {
    numeroRandom = numeroRandom + 2;
  }
  if (numeroRandom === 0) {
    numeroRandom++;
  }
  if (numeroRandom === numeroActual) {
    numeroRandom++;
  }

  numeroActual = numeroRandom;

  switch (numeroRandom) {
    case 1:
      muestraLaCarta(
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg"
      );
      puntuacion++;
      break;
    case 2:
      muestraLaCarta(
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg"
      );
      puntuacion = puntuacion + 2;
      break;
    case 3:
      muestraLaCarta(
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg"
      );
      puntuacion = puntuacion + 3;
      break;
    case 4:
      muestraLaCarta(
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg"
      );
      puntuacion = puntuacion + 4;
      break;
    case 5:
      muestraLaCarta(
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg"
      );
      puntuacion = puntuacion + 5;
      break;
    case 6:
      muestraLaCarta(
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg"
      );
      puntuacion = puntuacion + 6;
      break;
    case 7:
      muestraLaCarta(
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg"
      );
      puntuacion = puntuacion + 7;
      break;
    case 10:
      muestraLaCarta(
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg"
      );
      puntuacion = puntuacion + 0.5;
      break;
    case 11:
      muestraLaCarta(
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg"
      );
      puntuacion = puntuacion + 0.5;
      break;
    case 12:
      muestraLaCarta(
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg"
      );
      puntuacion = puntuacion + 0.5;
      break;
  }
  muestraPuntuacion();
}

function infoPlantarse() {
  let puntuacionPlantarse = puntuacion;
  const botonCarta = document.getElementById("dameCarta");

  if (botonCarta && botonCarta instanceof HTMLButtonElement) {
    botonCarta.disabled = true;
  }

  switch (true) {
    case puntuacionPlantarse <= 4:
      mensajeGameOver("Has sido muy conservador amigo!!!!! 😗");
      break;
    case puntuacionPlantarse === 5:
      mensajeGameOver("Te ha entrado el canguelo eh? 💩");
      break;
    case puntuacionPlantarse === 6 || puntuacionPlantarse === 7:
      mensajeGameOver("Casi casi... que suerte!! 👀");
      break;
    case puntuacionPlantarse === 7.5:
      mensajeGameOver("¡Lo has clavado! ¡Enhorabuena! 🥳🥳🥳");
  }
}

function reiniciarPartida() {
  puntuacion = 0;
  let puntuacionElement = document.getElementById("puntuacion");

  if (puntuacionElement && puntuacionElement instanceof HTMLElement) {
    puntuacionElement.innerHTML = puntuacion.toString();
  }

  muestraLaCarta(
    "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg"
  );

  const botonCarta = document.getElementById("dameCarta");

  if (botonCarta && botonCarta instanceof HTMLButtonElement) {
    botonCarta.disabled = false;
  }

  mensajeGameOver("");
}

const botonCarta = document.getElementById("dameCarta");
if (botonCarta && botonCarta instanceof HTMLButtonElement) {
  botonCarta.addEventListener("click", dameCarta);
}

const botonPlantarse = document.getElementById("plantarse");
if (botonPlantarse && botonPlantarse instanceof HTMLButtonElement) {
  botonPlantarse.addEventListener("click", infoPlantarse);
}

const botonReiniciar = document.getElementById("nuevaPartida");
if (botonReiniciar && botonReiniciar instanceof HTMLButtonElement) {
  botonReiniciar.addEventListener("click", reiniciarPartida);
}

//Se muestra la función en cuanto esta disponible en el DOM
document.addEventListener("DOMContentLoaded", muestraPuntuacion);
