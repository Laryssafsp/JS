## Descrição
Neste desafio, você irá simular um carrinho de compras. O usuário informará quantos produtos ele deseja adicionar ao carrinho e, em seguida, será solicitado que ele insira os nomes desses produtos. O programa deve encerrar automaticamente quando o número de produtos informados for atingido e exibir a lista final de itens no carrinho.

O programa deve se comportar da seguinte forma:

1 - O usuário informa o número de produtos que deseja adicionar ao carrinho.<br>
2 - O programa solicita o nome de cada produto.<br>
Após adicionar o número de produtos indicado, o programa deve exibir a lista final dos produtos no carrinho.

### Entrada
A entrada será composta por dois passos:

O primeiro número será a quantidade de produtos que o usuário deseja adicionar ao carrinho.<br>
Após isso, o programa solicitará os nomes dos produtos, um por um, até que o número de produtos informado seja atingido.

###Saída

O programa deve exibir a lista final de produtos no carrinho no seguinte formato:
- Carrinho final: produto1, produto2

```js
// IMPORTANTE: Na DIO, as funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets": lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

// O número de produtos a ser adicionado
let numeroDeProdutos = parseInt(gets());

// TODO: Crie um array para armazenar os produtos:
let carrinho = [];

// TODO: Leia os produtos e os adicione ao carrinho:
for (let i = 0; i < numeroDeProdutos; i++) {
  let produto = gets(); // Lê o nome do produto
  carrinho.push(produto); // Adiciona ao array
}

// TODO: Exiba o carrinho final no formato esperado:
print("Carrinho final: " + carrinho.join(", "));


```
