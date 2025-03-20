import calculadora
a=2
b=3
print(f'{a} + {b} = {calculadora.somar(a,b)}')
print(f'{a} - {b} = {calculadora.subtrair(a,b)}')
print(f'{a} * {b} = {calculadora.multiplicar(a,b)}')
print(f'{a} / {b} = {calculadora.dividir(a,b)}')
# Output:
# 2 + 3 = 5
# 2 - 3 = -1
# 2 * 3 = 6
# 2 / 3 = 0.6666666666666666
# As funções somar, subtrair, multiplicar, e dividir são chamada do modulo calculadora.
# As funções são chamadascom os argumentos a e b.