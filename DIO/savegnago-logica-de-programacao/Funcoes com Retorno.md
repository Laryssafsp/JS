# Funções com retorno de valores

```js
let userName = getFirstName("Carlos-Almeida-Juanito-Gargalo", "-")
console.log("Seja bem vindo " + userName)

userName = getFirstName("Felipe Silva Han Solo", " ")
console.log("Seja bem vindo " + userName)

function getFirstName(name, splitChar){
	let firstName = name.split(splitChar)[0]
    return firstName
}
```

```js
let userName = getFirstName("Carlos-Almeida-Juanito-Gargalo", "-")
console.log("Seja bem vindo " + userName)

userName = getFirstName("Felipe Silva Han Solo", " ")
console.log("Seja bem vindo " + userName)

function getFirstName(name, splitChar = " "){
  let firstName = name. split(splitChar) [0]
  return firstName
}
```
**Funções Também Podem Devolver Presentes**

Algumas funções são legais e te dão um presente de volta, como quando você dá um desenho bonito para um amigo e ele te dá um sorriso de volta. Olha só como isso funciona com o JavaScript:

```js
function somar(numero1, numero2) {
  return numero1 + numero2;
}

let resultado = somar(5, 3); // A função vai dar de presente 5 + 3 = 8
console.log("A soma é: " + resultado); // Vai mostrar A soma é: 8

//----------------------
let resultado = soma(5, 10)
console.log("O Resultado dessa função é " + resultado)

function soma(numA, numB) {
	let somatorio = numA + numB
	return somatorio
}


```
Aqui, fizemos uma função "somar" que pega dois números, soma eles e devolve o resultado. Quando chamamos a função com 5 e 3, ela nos dá o presente do número 8, e aí mostramos isso na tela.

```js
// TODO: Crie uma função chamada calcularDesconto():
function calcularDesconto() {
    // Lê o valor total da compra e o código do cupom
    let valorCompra = parseFloat(gets().trim());
    let cupom = gets().trim();

    let valorFinal = valorCompra;

    // TODO: Implemente uma condição para aplicação dos descontos de 10% e 20%
    if (cupom === "DESCONTO10") {
        valorFinal = valorCompra * 0.90;
    } else if (cupom === "DESCONTO20") {
        valorFinal = valorCompra * 0.80;
    }

    // TODO: Imprima o valor final com o desconto, formatado para R$:
    console.log(`Valor final da compra: R$ ${valorFinal.toFixed(2)}`);
}

// Chama a função para calcular o desconto
calcularDesconto();

```
