## Funções com passagem de parâmetros
**Descobrindo os Segredos das Funções com Parâmetros no JavaScript!**

Vamos mergulhar em um mundo mágico onde as funções podem fazer coisas incríveis com a ajuda de amiguinhos chamados "parâmetros". Vou te mostrar como funciona essa aventura!

**Conhecendo os Parâmetros das Funções**

Sabe quando você dá instruções a um robô para pegar uma bola vermelha e ele faz exatamente isso? Os parâmetros são como essas instruções especiais que você dá para as funções no JavaScript.

**Criando uma Caixa Mágica com Parâmetros**

Vamos criar uma caixa mágica que diz olá para diferentes pessoas, usando parâmetros! Olha só:

```js
function dizerOla(nome) {
  console.log("Olá, " + nome + "! Como você está?");
}
```

Vi isso, amiguinho? Criamos uma função chamada "dizerOla" com um amiguinho chamado "nome" dentro dela. Agora, quando chamamos essa função e damos um nome, ela diz olá para essa pessoa!

**Conversando com a Caixa Mágica**

Agora, você está pronto para conversar com nossa caixa mágica! Dê uma olhada:

```js
dizerOla("Pedrinho"); // Vai dizer Olá, Pedrinho! Como você está?
dizerOla("Mariana"); // Vai dizer Olá, Mariana! Como você está?
```

Quando chamamos a função "dizerOla" e damos um nome, ela usa esse nome para criar uma saudação especial. Que divertido, né?

**Aventuras com Mais de Um Amiguinho**

Às vezes, você quer dar mais de um amiguinho para sua função. É como dar uma festa com muitos convidados! Vamos ver isso:
```js
function calcularIdade(nome, anoNascimento) {
  let idade = 2023 - anoNascimento;
  console.log(nome + " tem " + idade + " anos!");
}

calcularIdade("Pedrinho", 2010); // Vai mostrar Pedrinho tem 13 anos!
calcularIdade("Mariana", 2008); // Vai mostrar Mariana tem 15 anos!
```
Aqui, fizemos uma função chamada "calcularIdade" que usa dois amiguinhos: o nome e o ano de nascimento. Ela calcula a idade e conta para a gente!

```js
torrar("pão integral","99.99", undefined)

//function torrar(pao, valor,  nome = "Cliente"){
function torrar(pao, valor,  nome){
console.log("torrada feita com " + pao)
console.log("ela é um pedido de " + nome)
}
```

## Interporlação de strings
Interpolação de strings é um recurso que permite inserir valores de variáveis ou expressões diretamente dentro de uma string, facilitando a montagem de textos dinâmicos.

A forma de fazer interpolação depende da linguagem de programação. Aqui estão exemplos em várias linguagens populares:

```js
const nome = "Laryssa";
const idade = 25;

console.log(`Olá, meu nome é ${nome} e tenho ${idade} anos.`);
// Saída: Olá, meu nome é Laryssa e tenho 25 anos.

```

```js
createStringConnection("db_products", "felipe", "9876")

function createStringConnection(databaseName, user, pass){
console. loge connect : DBCONNECT; user=${user}; pass=${pass}; initial_database=${databaseName}
```
