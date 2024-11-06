//c. Algoritmo 3
const numbers = [1,2,3,4,5];// Variável declarada em const e contendo uma array de números inteiros 
const isOdd = (x) =>  {return x % 2;}// Variável declarada em const e contendo um arrow function para calcular o resto da divisão de um valor
const output = numbers.filter(isOdd);// Variável que recebe uma lista filtrada pelos parâmetros especificados
console.log(output);// método para exibir a lista contida na variável output

//Semântica: Algoritmo que retorna uma lista com valores selecionados pelo método filter