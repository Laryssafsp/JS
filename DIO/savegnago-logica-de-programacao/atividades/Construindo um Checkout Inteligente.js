// Descrição
// Você está desenvolvendo um sistema de autoatendimento para um supermercado. O cliente escaneia três produtos, e o sistema deve calcular e exibir o valor total da compra.

// Entrada
// A entrada deve receber três valores numéricos (decimais), representando o preço dos produtos.

// O preço do primeiro produto (número decimal).
// O preço do segundo produto (número decimal).
// O preço do terceiro produto (número decimal).
// Saída
// Deverá retornar o valor total da compra no formato:

// Total da compra: R$ XX.XX
// Exemplos
// A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.



// IMPORTANTE: Na DIO, as funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets": lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

// Lê os três preços digitados pelo usuário
let preco1 = parseFloat(gets());
let preco2 = parseFloat(gets());
let preco3 = parseFloat(gets());

// Calcula o total da compra
let valorTotal = preco1 + preco2 + preco3;

// Exibe o resultado no formato solicitado (com duas casas decimais)
print('Total da compra: R$ ' + valorTotal.toFixed(2));


// -------------------------------

// Descrição
// No sistema de self-checkout, aplique um desconto de 10%, ou seja, subtraia 10% do valor total da compra, se ele for maior que R$ 100. Caso contrário, o valor permanece o mesmo.

// 🧠 Cálculo do desconto:
// Se o valor da compra for maior que 100, aplique 10% de desconto. Isso significa que:

// Valor final = Valor da compra - (Valor da compra * 0,10)

// 🔸 Ou de forma simplificada:

// Valor final = Valor da compra * 0,90

// Se o valor da compra for menor ou igual a 100, não há desconto. O valor final será igual ao valor da compra.

// Entrada
// A entrada será um número decimal representando o valor total da compra.

// Um número decimal (exemplo: 120.00)
// Valor em reais (R$)
// Saída
// Deverá retornar o valor final, com ou sem desconto, no formato:

// Valor com desconto: R$ XX.XX
// ou
// Valor sem desconto: R$ XX.XX

// IMPORTANTE: Na DIO, as funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets": lê UMA linha com dado(s) de entrada (inputs) do usuário);
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

const valor = parseFloat(gets());

let valorFinal;

// Verifica se o valor tem desconto
if (valor > 100) {
  valorFinal = valor * 0.90; // Aplica 10% de desconto
  print("Valor com desconto: R$ " + valorFinal.toFixed(2));
} else {
  valorFinal = valor; // Sem desconto
  print("Valor sem desconto: R$ " + valorFinal.toFixed(2));
}
