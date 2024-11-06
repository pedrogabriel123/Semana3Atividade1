//e. Algoritmo 5
const users=[
  {firstName:"john", lastName:"colben", age:26},
  {firstName:"jimmy", lastName:"fred", age:75},
  {firstName:"sam", lastName:"boston", age:50},
  {firstName:"ronald", lastName:"bristh", age:26},   
];// Variável declarada em const e contendo uma lista de objetos
const output = users.map((x)=> x.firstName+" "+x.lastName);// Variável declarada em const e contendo uma lista de elementos alterados por map
console.log(output);// método para exibir a lista contida na variável output

//Semântica: Algoritmo que retorna uma lista com primeiro e segundo nome juntos alterados por map 