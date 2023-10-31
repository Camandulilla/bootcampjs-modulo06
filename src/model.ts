import { muestraLaCarta } from "./ui";

interface Partida {
  puntuacion: number;
  numeroActual: number;
}

export const partida: Partida = {
  puntuacion: 0,
  numeroActual: 0,
};

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
