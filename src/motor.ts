import { muestraPuntuacion, mensajeGameOver, muestraLaCarta } from "./ui";
import { partidaPorDefecto, Partida } from "./model";

export let partida: Partida = partidaPorDefecto();

export function dameCarta(): void {
  let numeroRandom: number = Math.floor(Math.random() * 11);

  if (numeroRandom > 7) {
    numeroRandom = numeroRandom + 2;
  }
  if (numeroRandom === 0) {
    numeroRandom++;
  }
  if (numeroRandom === partida.numeroActual) {
    numeroRandom++;
  }

  partida.numeroActual = numeroRandom;

  rawImages(numeroRandom);

  muestraPuntuacion();
}

export function cases(puntuacionPlantarse: number) {
  switch (true) {
    case puntuacionPlantarse <= 4:
      mensajeGameOver("Has sido muy conservador amigo!!!!! 😗");
      break;
    case puntuacionPlantarse < 6:
      mensajeGameOver("Te ha entrado el canguelo eh? 💩");
      break;
    case puntuacionPlantarse >= 6 && puntuacionPlantarse < 7.5:
      mensajeGameOver("Casi casi... que suerte!! 👀");
      break;
    case puntuacionPlantarse === 7.5:
      mensajeGameOver("¡Lo has clavado! ¡Enhorabuena! 🥳🥳🥳");
  }
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
