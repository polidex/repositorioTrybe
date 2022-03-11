console.log("-----Exercício 1-----");

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log('Seja bem vinda ' + info['personagem']);

console.log("-----Exercício 2-----");

info.recorente = 'Sim';

console.log("-----Exercício 3-----");

for(chave in info){
  console.log(chave);
};

console.log("-----Exercício 4-----");

for(chave in info){
  console.log(info[chave]);
};

console.log("-----Exercício 5-----");

let infoA = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorente: 'Sim',
};


// for (let i = 0; i < 3; i += 1){
//   console.log(info['i'] + ' e ' + infoA['i']);
console.log(info['personagem'] + ' e ' + infoA['personagem']);
console.log(info['origem'] + ' e ' + infoA['origem']);
console.log(info['nota'] + ' e ' + infoA['nota']);
  if (info[chave] === 'Sim' && infoA[chave] === 'Sim') {
    console.log('Ambos recorrentes');
  };
// };

console.log("-----Exercício 6-----");

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};