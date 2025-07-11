## Descrição
Você está simulando um controle simples de estoque. O sistema começa com um estoque inicial de 5 unidades.

O usuário pode escolher entre duas opções:

1 - Adicionar uma quantidade ao estoque. <br>
2 - Retirar uma quantidade do estoque.  <br>

O sistema realiza a operação e exibe o estoque atualizado. Caso o usuário tente retirar uma quantidade maior do que o estoque disponível, o sistema deve exibir a mensagem Estoque insuficiente e manter o estoque inalterado.

### Entrada
A entrada será composta por dois números inteiros, na seguinte ordem:

O primeiro número representa a operação desejada:  <br>
1 para adicionar ao estoque.  <br>
2 para retirar do estoque. <br>
O segundo número representa a quantidade da operação.

### Saída
O programa deve exibir uma das seguintes saídas:

O estoque atualizado após a operação.
Ou a mensagem Estoque insuficiente, caso a tentativa de retirada seja maior que o estoque atual.

````js
// IMPORTANTE: Na DIO, as funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets": lê UMA linha com dado(s) de entrada (inputs) do usuário);
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let operacao = parseInt(gets());
let quantidade = parseInt(gets());

let estoque = 5;

// TODO: Implemente a condição necessária para verificar a operação. Se for 1, adiciona a quantidade ao estoque:
if (operacao === 1) {
  estoque += quantidade;
  print(estoque);

// TODO: Se a operação for 2, tenta retirar a quantidade do estoque:
} else if (operacao === 2) {
  if (quantidade <= estoque) {
    estoque -= quantidade;
    print(estoque);

// TODO: Caso não tenha estoque suficiente, exibe a mensagem indicada:
  } else {
    print("Estoque insuficiente");
  }
}
```
