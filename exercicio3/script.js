// criar três arrays 
const quantidade = [12, 3, 7, 9, 11, 32]
const produto = ["Areia", "Cimento", "Pedra", "chuveiro", "Luninária", "Martelo"]
const cliente = ["Antonia", "Fernanda", "Anderson", "Felipe", "Silvana", "Maurício"]

// fazer a cópia dos arrays originais
const copiaQuantidade = quantidade.slice()
const copiaProdutos = produto.slice()
const copiaCliente = cliente.slice()

// inserir um item na primeira posição do primeiro array
copiaQuantidade.unshift(5)
console.log("Versão original:",  quantidade, "\nCópia:", copiaQuantidade)

// removendo o último item do segundo array
copiaProdutos.pop()
console.log("Versão original:",  produto, "\nCópia:", copiaProdutos)

//removendo o segundo item do terceiro array
copiaCliente.splice(1, 1)
console.log("Versão original:",  cliente, "\nCópia:", copiaCliente)


