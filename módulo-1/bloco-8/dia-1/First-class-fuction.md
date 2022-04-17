First-class Function - basicamente são funções q são atriuidas a variáveis.

Exemplos:

<!-- function sum (number1, number2) {
  return number1 + number2;
}

const sumVariable = sum;

console.log(sumVariable);
> [Function: sum] -->

A função sum foi atribuida a variavel sumVariable, para mostrar a capacidade do JavaScript de aramazenar uma função dentro de uma variavel.

<!-- const sum = (number1, number2) => {
  return number1 + number2;
}; -->

Arrow function mostra justamente a capacidade do JS de armazenar funções em variaveis.

<!-- const sayHello = () => {
  return ('hello trybers');
}

const printGreeting = (callback) => {
    console.log(callback());
}

printGreeting(sayHello); 
// hello trybers -->

-------------------------------------------------------

<!-- const sumFixAmount = (amount) => {
  return (number) => amount + number;
}

const initialSum = sumFixAmount(15)
console.log(initialSum(5)); 
// 20 -->