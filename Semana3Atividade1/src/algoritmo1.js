//a. Algoritmo 1
const numeros = [1,2,3,4,5];// Variável declarada em const e contendo um array de números inteiros
const calcularDobro = (numero) => {return numero*2;};// Variável declarada em const e contendo arrow function que retorna a multiplicação de numero por 2

const numerosDobro = numeros.map(calcularDobro);// Variável declarada em const que recebe uma lista modificada com o método map
console.log(numerosDobro);// método para exibir a lista contida na variável numerosDobro

//Semántica: Algoritmo que itera um array através do método map para aplicar uma função que calcula o dobro de cada número no array e retornar um novo array com os elementos manipulados  