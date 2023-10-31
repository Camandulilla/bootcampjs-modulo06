import { partida } from "./model";
import { cases, dameCarta } from "./motor";

export function mensajeGameOver(mensaje: string) {
  let gameOverElement = document.getElementById("gameover");
  if (gameOverElement && gameOverElement instanceof HTMLElement) {
    gameOverElement.innerHTML = mensaje;
  }
}

export function infoPlantarse() {
  let puntuacionPlantarse = partida.puntuacion;
  const botonCarta = document.getElementById("dameCarta");

  if (botonCarta && botonCarta instanceof HTMLButtonElement) {
    botonCarta.disabled = true;
  }

  cases(puntuacionPlantarse);
}

export function muestraPuntuacion(): void {
  let puntuacionElement = document.getElementById("puntuacion");

  if (puntuacionElement && puntuacionElement instanceof HTMLElement) {
    puntuacionElement.innerHTML = partida.puntuacion.toString();
  }
  if (partida.puntuacion > 7.5) {
    mensajeGameOver("Te has pasado de 7.5 puntos. Has perdido!! 😟");
    const botonCarta = document.getElementById("dameCarta");
    if (botonCarta && botonCarta instanceof HTMLButtonElement) {
      botonCarta.disabled = true;
    }
  }
}

export function muestraLaCarta(carta: string): void {
  let cartaElement = document.getElementById("carta");
  if (cartaElement && cartaElement instanceof HTMLImageElement) {
    cartaElement.src = carta;
  }
}

export function reiniciarPartida() {
  partida.puntuacion = 0;
  let puntuacionElement = document.getElementById("puntuacion");

  if (puntuacionElement && puntuacionElement instanceof HTMLElement) {
    puntuacionElement.innerHTML = partida.puntuacion.toString();
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

//BOTONES:
export const botonCarta = document.getElementById("dameCarta");
if (botonCarta && botonCarta instanceof HTMLButtonElement) {
  botonCarta.addEventListener("click", dameCarta);
}

export const botonPlantarse = document.getElementById("plantarse");
if (botonPlantarse && botonPlantarse instanceof HTMLButtonElement) {
  botonPlantarse.addEventListener("click", infoPlantarse);
}

export const botonReiniciar = document.getElementById("nuevaPartida");
if (botonReiniciar && botonReiniciar instanceof HTMLButtonElement) {
  botonReiniciar.addEventListener("click", reiniciarPartida);
}
