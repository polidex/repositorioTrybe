import antigravity
import this

2 * 3  # saída: 6
2 + 3  # saída: 5
3 / 2  # saída: 1.5

square_root = 25 ** (1/2)  # raiz quadrada de 25. O operador `**` significa 
# "elevado a"

print(square_root + 1)  # saída: 6.0

counter = 0
counter++  # esse código vai falhar

# original
counter = counter + 1

# simplificado
counter += 1

3 // 2  # saída: 1

3 / 2  # saída: 1.5

Exercício1 = """ No terminal, inicialize duas variáveis a e b, sendo a = 10 e 
b = 5. Mostre o resultado das 7 operações básicas (soma, subtração, 
multiplicação, divisão, divisão inteira, potenciação e módulo) envolvendo 
essas variáveis. """

a = 10
b = 5

a + b # saída: 15
a - b # saída: 5
a * b # saída: 50
a ** b # saída: 100000
a / b # saída: 2.0
a // b # saída: 2
a % b # saída: 0


Exercício2 = """ Declare e inicialize uma variável: hours = 6. Quantos 
minutos têm em 6 horas? E quantos segundos? Declare e inicialize variáveis 
minutes e seconds que recebem os respectivos resultados das contas. Depois, 
imprima cada uma delas. """

hours = 6
minutes = hours * 60
minutes # saída: S360
seconds = minutes * 60
seconds # saída: 21600

Exercício3 = """ Teste e verifique o que acontece se você colocar um ponto e 
vírgula no final de uma instrução em Python. """

resposta = 'Python respondeu da mesma forma.'

Exercício4 =  """ Suponha que o preço de capa de um livro seja R$ 24,20, mas as 
ivrarias recebem um desconto de 40%. O transporte custa 3,00 para o primeiro 
exemplar e 75 centavos para cada exemplar adicional. Qual é o custo total de 
atacado para 60 cópias? Escreva uma expressão que receba o custo total e a 
imprima. """

book = 24.20
discount = 0.60 # pq representa 60% do valor final do produto
delivery = 3
moreUnits = 0.75
order = 60

discountCalc = (order * moreUnits) + 2.25

total = ((book * discount) * order) + discountCalc

print(total) #saída: 918.4499999999999


""" Tipos de dados embutidos """

a = 5
type(a) #saída: <class 'int'>

a = 5.0
type(a) #saída: <class 'float'>

a = "Olá"
type(a) #saída: <class 'str'>

Exercício5 = "Adicione o elemento “Ciência da Computação” à lista."

trybe_course = ["Introdução", "Front-end", "Back-end"] # lista do exercício

trybe_course.append("Ciência da Computação")
trybe_course #Saída: ['Introdução', 'Front-end', 'Back-end', 'Ciência da 
                      # Computação']

Exercício6 = "Acesse e altere o primeiro elemento da lista para “Fundamentos”."

trybe_course[0] = 'Fundamentos'
trybe_course #Saída: ['Fundamentos', 'Front-end', 'Back-end', 'Ciência da 
                      # Computação']

Exercício7 = """ Um conjunto ou set pode ser inicializado utilizando-se também 
o método set(). Inicialize uma variável com essa função var = set() e adicione 
seu nome ao conjunto utilizando um dos métodos vistos acima. Depois, imprima a 
variável e confira se o retorno é: {"seu_nome"}. """

var = set()
var #Saída: set()
var.add("polidev")
var #Saída: {'polidev'}

Exercício8 = """ Insira no objeto uma nova propriedade com o nome de chave 
“recorrente” e o valor “Sim”. Em seguida, imprima o objeto no console. """

info = {
  "personagem": "Margarida",
  "origem": "Pato Donald",
  "nota": "Namorada do personagem principal nos quadrinhos do Pato Donald",
} # dict do exercício

info['recorrente'] = 'Sim'
info #Saída: {
              # 'personagem': 'Margarida', 
              # 'origem': 'Pato Donald', 
              # 'nota': 'Namorada do personagem principal nos quadrinhos do Pato Donald', 
              # 'recorrente': 'Sim'
              # }

Exercício9 = """ Remova a propriedade cuja chave é “origem” e imprima o 
objeto no console. """

del info["origem"]
info #Saída: {
              # 'personagem': 'Margarida', 
              # 'nota': 'Namorada do personagem principal nos quadrinhos do Pato Donald', 
              # 'recorrente': 'Sim'
              # }

Exercício10 = """ Após uma consulta do banco de dados, temos linhas que contém
nome, sobrenome e idade como: "Thiago", "Nobre", 29. Que estrutura vista 
anteriormente seria recomendada dado que após esta consulta somente exibimos 
estes valores? """

# Tuple

Exercício11 = """ Realizar a contagem de quantas vezes cada elemento aparece 
em uma sequência é uma técnica muito útil na solução de alguns problemas. Qual 
é a estrutura mais recomendada para o armazenamento desta contagem? """

my_array = [20, 20, 1, 2]

freq_dict = {}

for item in my_array:
    if (item in freq_dict):
        freq_dict[item] += 1
    else:
        freq_dict[item] = 1

for key, valor in freq_dict.items():
    print(f"{key} : {valor}")

# Saída
20: 2
1: 1
2: 1