# Descrição
O objetivo deste desafio é criar uma função simples que analisa o valor total de uma compra em um e-commerce e verifica se o cliente tem direito a frete grátis. Caso o valor da compra seja superior a R$ 150,00, o frete será gratuito. Caso contrário, será informado que o frete não está incluso.

## Entrada
A entrada será um número decimal que representa o valor total da compra. O valor da compra será fornecido em reais, como por exemplo 70.00 ou 149.99.

Valor da compra em formato decimal (por exemplo, 70.00, 150.00, 149.99, etc). <br>
O valor será comparado com R$ 150,00 para determinar a elegibilidade para o frete grátis.<br>

## Saída
A função deverá retornar uma das seguintes mensagens, dependendo do valor da compra:

Se o valor da compra for superior a R$ 150,00, a saída será: "Você ganhou frete grátis!"<br>
Se o valor da compra for igual ou inferior a R$ 150,00, a saída será: "Frete não incluso."<br>


```js
function calcularFrete() {
    // Lê o valor total da compra
    let valorCompra = parseFloat(gets().trim());

    // Verifica se o valor ultrapassa R$ 150.00
    if (valorCompra > 150.00) {
        console.log("Você ganhou frete grátis!");
    } else {
        console.log("Frete não incluso.");
    }
}

// Chama a função para calcular o frete
calcularFrete();
```

# Descrição
Em algumas promoções de e-commerce, os clientes têm a opção de aplicar cupons de desconto. A missão é criar uma função que calcule o valor final da compra após aplicar um desconto, caso o cupom seja válido. Os cupons disponíveis são "DESCONTO10" (que aplica um desconto de 10%) e "DESCONTO20" (que aplica um desconto de 20%). Se o código do cupom não for válido, o valor da compra permanece inalterado. O resultado deve ser formatado conforme o padrão monetário brasileiro (R$ XX.XX).

## Entrada
A entrada consiste em dois valores:

Um número decimal representando o valor da compra (por exemplo, 100.00). <br>
Uma string representando o código do cupom (por exemplo, "DESCONTO10" ou "DESCONTO20"). <br>
## Saída
A saída deve ser uma string no formato:  <br>

"Valor final da compra: R$ XX.XX", onde XX.XX é o valor final após o desconto (caso haja). <br>
