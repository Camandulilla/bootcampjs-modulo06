import { cases, dameCarta, partida } from "./motor";

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

export function rawImages(numeroRandom: number) {
  switch (numeroRandom) {
    case 1:
      muestraLaCarta(
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg"
      );
      partida.puntuacion++;
      break;
    case 2:
      muestraLaCarta(
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg"
      );
      partida.puntuacion = partida.puntuacion + 2;
      break;
    case 3:
      muestraLaCarta(
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg"
      );
      partida.puntuacion = partida.puntuacion + 3;
      break;
    case 4:
      muestraLaCarta(
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg"
      );
      partida.puntuacion = partida.puntuacion + 4;
      break;
    case 5:
      muestraLaCarta(
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg"
      );
      partida.puntuacion = partida.puntuacion + 5;
      break;
    case 6:
      muestraLaCarta(
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg"
      );
      partida.puntuacion = partida.puntuacion + 6;
      break;
    case 7:
      muestraLaCarta(
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg"
      );
      partida.puntuacion = partida.puntuacion + 7;
      break;
    case 10:
      muestraLaCarta(
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg"
      );
      partida.puntuacion = partida.puntuacion + 0.5;
      break;
    case 11:
      muestraLaCarta(
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg"
      );
      partida.puntuacion = partida.puntuacion + 0.5;
      break;
    case 12:
      muestraLaCarta(
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg"
      );
      partida.puntuacion = partida.puntuacion + 0.5;
      break;
  }
}
