import antigravity
import this

2 * 3  # saída: 6
2 + 3  # saída: 5
3 / 2  # saída: 1.5

square_root = 25 ** (1/2)  # raiz quadrada de 25. O operador `**` significa "elevado a"

print(square_root + 1)  # saída: 6.0

counter = 0
counter++  # esse código vai falhar

# original
counter = counter + 1

# simplificado
counter += 1

3 // 2  # saída: 1

3 / 2  # saída: 1.5

Exercício1 = """ No terminal, inicialize duas variáveis a e b, sendo a = 10 e b = 5. Mostre o resultado 
das 7 operações básicas (soma, subtração, multiplicação, divisão, divisão inteira, 
potenciação e módulo) envolvendo essas variáveis. """

a = 10
b = 5

a + b # saída: 15
a - b # saída: 5
a * b # saída: 50
a ** b # saída: 100000
a / b # saída: 2.0
a // b # saída: 2
a % b # saída: 0


Exercício2 = """ Declare e inicialize uma variável: hours = 6. Quantos minutos têm em 6 
horas? E quantos segundos? Declare e inicialize variáveis minutes e seconds que recebem os 
respectivos resultados das contas. Depois, imprima cada uma delas. """

hours = 6
minutes = hours * 60
minutes # saída: S360
seconds = minutes * 60
seconds # saída: 21600

Exercício3 = """ Teste e verifique o que acontece se você colocar um ponto e vírgula no 
final de uma instrução em Python. """

resposta = 'Python respondeu da mesma forma.'

Exercício4 =  """ Suponha que o preço de capa de um livro seja R$ 24,20, mas as livrarias 
recebem um desconto de 40%. O transporte custa 3,00 para o primeiro exemplar e 75 centavos 
para cada exemplar adicional. Qual é o custo total de atacado para 60 cópias? Escreva uma 
expressão que receba o custo total e a imprima. """

book = 24.20
discount = 0.60 # pq representa 60% do valor final do produto
delivery = 3
moreUnits = 0.75
order = 60

discountCalc = (order * moreUnits) + 2.25

total = ((book * discount) * order) + discountCalc

print(total) #saída: 918.4499999999999
