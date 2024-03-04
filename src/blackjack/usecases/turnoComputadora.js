import { pedirCarta, valorCarta, crearCartaHTML } from "./";

// turno de la computadora
/**
 *
 * @param {Number} puntosMinimos  minimum points that the PC needs to win.
 * @param {HTMLElement} puntosHTML HTML element to display the points
 * @param {HTMLElement} divCartasComputadora HTML element to display the points
 * @param {Array<String>} deck
 */
export const turnoComputadora = (puntosMinimos, puntosHTML, divCartasComputadora, deck = []) => {
  if (!puntosMinimos) throw new Error("Minimum points are required");
  if (!puntosHTML) throw new Error("Argument puntosHTML is required");

  let puntosComputadora = 0;

  do {
    const carta = pedirCarta(deck);

    puntosComputadora = puntosComputadora + valorCarta(carta);
    puntosHTML.innerText = puntosComputadora;

    const imgCarta = crearCartaHTML(carta)
    divCartasComputadora.append(imgCarta);

    if (puntosMinimos > 21) {
      break;
    }
  } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

  setTimeout(() => {
    if (puntosComputadora === puntosMinimos) {
      alert("Nadie gana :(");
    } else if (puntosMinimos > 21) {
      alert("Computadora gana");
    } else if (puntosComputadora > 21) {
      alert("Jugador Gana");
    } else {
      alert("Computadora Gana");
    }
  }, 100);
};
