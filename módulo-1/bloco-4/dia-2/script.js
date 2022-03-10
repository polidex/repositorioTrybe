console.log("----- Arrays -----");

console.log("-----Exercício 1-----");

let menu = ["Home", "Serviços", "Portfólio", "Links"];
let menuServices = menu[1];

console.log(menuServices);

console.log("-----Exercício 2-----");

let indexOfPortfolio = menu.indexOf("Portfólio");

console.log(indexOfPortfolio);

console.log("-----Exercício 3-----");

menu.push("Contato");

console.log(menu);

console.log("----- For -----");

let groceryList = ["Arroz", "Feijão", "Alface", "Melancia"];

for (let index = 0; index < groceryList.length; index += 1) {
  console.log(groceryList[index]);
}

console.log("----- For/of -----");

let names = ["João", "Maria", "Antônio", "Margarida"];

for (let name of names) {
  console.log(name);
}

console.log("----- Agora a prática -----");

console.log("-----Exercício 1-----");

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (const num of numbers) {
  console.log(num);
}

console.log("-----Exercício 2-----");

let soma = 0;

for (let index = 0; index < numbers.length; index += 1) {
  soma += numbers[index];
}

console.log(soma);

console.log("-----Exercício 3-----");

let length = 0;

for (let index1 = 0; index1 < numbers.length; index1 += 1) {
  length += 1;
}
let media = soma / length;
console.log(media);

console.log("-----Exercício 4-----");

if (media > 20) {
  console.log("valor maior que 20");
} else {
  console.log("valor menor ou igual a 20");
}

console.log("-----Exercício 5-----");

let maior = 0;

for (let index2 = 0; index2 < numbers.length; index2 += 1) {
  if (numbers[index2] > maior) {
    maior = numbers[index2];
  }
}
console.log(maior);

console.log("-----Exercício 6-----");

let impar = 0;

for (let index3 = 0; index3 < numbers.length; index3 += 1) {
  if (numbers[index3] % 2 >= 1) {
    impar += 1;
  }
}

console.log(impar);

if (impar == 0) {
  console.log("nenhum valor ímpar encontrado");
}

console.log("-----Exercício 7-----");

let menor = 100;

for (let index4 = 0; index4 < numbers.length; index4 += 1) {
  if (numbers[index4] <= menor) {
    menor = numbers[index4];
  }
}
console.log(menor);

console.log("-----Exercício 8-----");

let numbersNew = [];
let dig = 0;

for (let i = 0; i < 25; i += 1) {
  numbersNew.push(dig += 1);
}
console.log(numbersNew);

console.log("-----Exercício 9-----");

let div = [];

for (let i1 = 0; i1 < 25; i1 += 1) {
  div.push(numbersNew[i1] / 2);
}
console.log(div);

console.log("----- Bônus -----");

console.log("-----Exercício 1-----");

let numbersCres = [];

for (let indexB = 1; indexB < numbers.length; indexB+=1) {
  for (j = 0; j < numbers.length - indexB; j+=1) {
      if (numbers[j] > numbers[j + 1]) {
        numbersCres = numbers[j];
          numbers[j] = numbers[j + 1];
          numbers[j + 1] = numbersCres;
      }
    }
  }
// for (let indexB = 0; indexB < numbers.length; indexB += 1) {
//   for (let secondIndex = 0; secondIndex < indexB; secondIndex += 1) {
//     if (numbers[indexB] < numbers[secondIndex]) {
//       position = numbers[indexB];
//       numbers[indexB] = numbers[secondIndex];
//       numbers[secondIndex] = position;
//     }
//   }
// }
console.log(numbersCres);