/**
 *
 * @param {Array<string>} deck is an array of the strings
 * @returns {string} deleted card.
 */

export const pedirCarta = (deck = []) => {
  if (!deck || deck.length === 0) {
    throw "No hay cartas en el deck";
  }
  const carta = deck.pop();
  return carta;
};
