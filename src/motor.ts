import { muestraPuntuacion, mensajeGameOver } from "./ui";
import { partida, rawImages } from "./model";

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
    case puntuacionPlantarse <= 5:
      mensajeGameOver("Te ha entrado el canguelo eh? 💩");
      break;
    case puntuacionPlantarse >= 5 || puntuacionPlantarse === 7:
      mensajeGameOver("Casi casi... que suerte!! 👀");
      break;
    case puntuacionPlantarse === 7.5:
      mensajeGameOver("¡Lo has clavado! ¡Enhorabuena! 🥳🥳🥳");
  }
}
