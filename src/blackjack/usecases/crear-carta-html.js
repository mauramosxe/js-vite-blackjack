
/**
 * 
 * @param {String} carta 
 * @returns {HTMLImageElement} return element;
 */

export const crearCartaHTML = (carta) => {
  if (!carta) throw new Error("The card is a required argument");

  // <img class="carta" src="assets/cartas/2C.png">
  const imgCarta = document.createElement("img");
  imgCarta.src = `assets/cartas/${carta}.png`; //3H, JD
  imgCarta.classList.add("carta");

  return imgCarta;
};
