//f. Algoritmo 6
const input = prompt();// Variável contendo valores adivindos de um prompt
const value = parserInt(input);
const array = new Array(input).fill(null);
let values = new Array(input)
  .fill(null)
  .map((currentValue, index) => index + 1);
