//g. Algoritmo 7
let estudantes =[
 {nome:"João", idade:15},
 {nome:"Maria", idade:20},
 {nome:"Felipe", idade:22},
 {nome:"Pedro", idade:12},
 {nome:"Joana", idade:18},
];// Variável declarada em let e contendo uma lista de objetos
const details = estudantes.filter((x)=> x.idade >= 18);// Variável declarada em const e que recebe uma lista de elementos selecionados pelo método filter
console.log(details.length);// método para exibir o tamanho da lista contida na variável details

//Semântica