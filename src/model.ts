export interface Partida {
  puntuacion: number;
  numeroActual: number;
}

export const partidaPorDefecto = (): Partida => ({
  puntuacion: 0,
  numeroActual: 0,
});
