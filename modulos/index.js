const calculator = require('./calculator');

console.log("2 + 3 =", calculator.soma(2, 3)); // Output: 15
console.log("7 - 5 =", calculator.subtracao(7, 5)); // Output: 5
console.log("4 * 6 =", calculator.multiplicacao(4, 6)); // Output: 50
console.log("9 / 3 =", calculator.divisao(9, 3)); // Output: 2
console.log("8 / 0 =", calculator.divisao(8, 0)); // Output: Não é possível dividir por zero