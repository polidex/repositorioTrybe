console.log('-----Exercício 1-----')

const a = 33;
const b = 11;

let Adicao = a + b;
  console.log(Adicao);

let Subtracao = a - b;
  console.log(Subtracao);

let Multiplicacao = a * b;
  console.log(Multiplicacao);

let Divisao = a / b;
  console.log(Divisao); 

let Modulo = a % b;
  console.log(Modulo);

console.log('-----Exercício 2-----');

const num1 = 23;
const num2 = 32;

if (num1 > num2) {
  console.log(num1);
} else {
  console.log(num2);
}

console.log('-----Exercício 3-----');

const num3 = 42;
const num4 = 66;
const num5 = 150;

if (num3 > num4 && num3 > num5) {
  console.log(num3);
} else if (num4 > num3 && num4 > num5) {
  console.log(num4);
} else if (num5 > num3 && num5 > num4) {
  console.log(num5);
}

console.log('-----Exercício 4-----');

let valor = -3;

if (valor >= 0) {
    console.log('Positivo');
} else if (valor < 0) {
    console.log('Negativo');
}

console.log('-----Exercício 5-----');

const angle1 = 100;
const angle2 = 50;
const angle3 = 30;
let triangle = angle1 + angle2 + angle3;

if (triangle = 180) {
  console.log('true');
} else if (triangle > 180){
  console.log('false');
} else if (triangle < 180) {
  console.log('ERRO: ângulo inválido');
}

console.log('-----Exercício 6-----');

let pecaXadrez = 'CAVALO';

switch (pecaXadrez.toLowerCase()) {
  case 'peão':
    console.log('Move-se apenas para frente, no primeiro movimento pode andar duas casas, depois, apenas uma e captura somente para diagonal.');
    break;
  case 'bispo':
    console.log('Move-se apenas para diagonal nas casas de cor correspondente a que está.');
    break;
  case 'torre':
    console.log('Move-se apenas em linha reta.');
    break;
  case 'cavalo':
    console.log('Move-se apenas três casa em um formato de "L" duas casas para algum lado depois uma para direita ou esquerda ou uma casa para algum lado depois duas para direita ou esquerda.');
    break;
  case 'rainha':
    console.log('Move-se livremente para qualquer direção.');
    break;
  case 'rei':
    console.log('Move-se apenas uma casa livremente para qualquer direção.');
    break;
  default:
    console.log('ERRO: Peça não identificada.');
}

console.log('-----Exercício 7-----');

let nota = 32;

if (nota < 0 || nota > 100) {
  console.log('ERRO: A nota deve estar entre 0 e 100.'); 
} else if (nota >= 90) {
  console.log('A');
} else if (nota >= 80) {
  console.log('B');
} else if (nota >= 70) {
  console.log('C');
} else if (nota >= 60) {
  console.log('D');
} else if (nota >= 50) {
  console.log('E');
} else if (nota < 50) {
  console.log('F');
}

console.log('-----Exercício 8-----');