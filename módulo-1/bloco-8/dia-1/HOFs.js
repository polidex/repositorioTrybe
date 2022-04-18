/*High Order Fuctions - são funções q recebem outras funções como parametro e/ou returna suas operações.

Por exemplo:*/

const button = document.querySelector('#signup-button');

const registerUser = () => {
  console.log('Registrado com sucesso!');
};

button.addEventListener('click', registerUser);

/*registerUser é recebido pelo addEventListener como paramentro para que qnd o botão for clicado returne a msg "Resgistrado com sucesso" msg resultando da função resgisterUser.
As HOFs nos permitem criar logicas mais sucintas/ compactas para que o código fique mais facil de ler e entender. As HOFs nos permitem compactar ações e não somente repassar valores. */

const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

repeat(5, console.log);

// Nessa função passamos um parametro (number) para que o loop repita a ação de imprimir no console (console.log) partindo do zero até chagar no numero definido no parametro (number).

const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

repeat(3, (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
});

/*