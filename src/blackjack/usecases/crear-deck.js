import _ from "underscore";

/**
 * This function create a new deck
 * @param {Array<string>} tiposDeCarta Example: ["C", "D", "H", "S"]
 * @param {Array<string>} tiposEspeciales Example: ["A", "J", "Q", "K"]
 * @returns {Array} return a new deck
 */

export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
  if (!tiposDeCarta || tiposDeCarta === 0) 
  throw new Error("TiposDeCarta is required");

  if (!tiposEspeciales || tiposEspeciales === 0) 
  throw new Error("TiposDeCarta is required");


  let deck = [];

  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposDeCarta) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tiposDeCarta) {
    for (let esp of tiposEspeciales) {
      deck.push(esp + tipo);
    }
  }
  // console.log( deck );
  deck = _.shuffle(deck);
  return deck;
};
