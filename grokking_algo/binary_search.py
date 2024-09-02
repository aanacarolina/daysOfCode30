#ler arquivo
#length da list
#divide no meio = palpite
#verificar se o palpite certo,
#se errado, redefinir a lista na metade da metade 
##quando palpite MAIOR redefino o fim
##quando palpite MENOR redefino o começo
#se nao existe, qdo lista acaba retorna algo

list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


#with open('./sorted_names.txt', 'r') as file: 
 #   list = file.read().splitlines()

def busca_binarinha (lista, n):
    comeco = 0
    fim = len(lista) - 1 
    while comeco <= fim: 
        meio = int((comeco + fim) / 2 )
        palpite = int(lista[meio])
        print("palpite", palpite)
        print("começo", comeco)
        print("fim", fim)
        print("posição meio", meio)
        if palpite == n: 
            return palpite    
        elif palpite < n: 
            comeco = meio + 1
        elif palpite > n:
            fim = meio - 1 
    return ("ops")

resultado = busca_binarinha(list, 17)
print(f'O número está na posição {resultado}')