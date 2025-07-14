**Descobrindo um Mundo de Coisas Especiais com Objetos no JavaScript!**

***Análogia:***
Ao criar uma `class` seria como se fosse uma forma de bolo (genérico). Toda classe, como boa parte, deveria ter um método `constructor` é uma função. A `class` pode guardar dados/informações e funções/comportamento. 
`this` chama `class`

Se eu criar um padrão de guardar os dados de um usuário, posso criar uma classe para chamar, ou seja, ***padronizar!***
Precisa possuir um métrodo especial, chamado `constructor` que é uma função para atribuir os valores dentro da `classe`. Chamar/Declarar as variáveis atravéss do `this.xxx` e pode declarar as funções sem a palavra `function`.

Cada variável informada é uma propriedade `saborDaMassa`,`saborRecheio`
```js
// forma - classe
class formaDeBolo{
  constructor(saborDaMassa, saborRecheio){
    this.saborDaMassa = saborDaMassa
    this.saborRecheio = saborRecheio
	}
}
```
```js
// bolo -> instanciando o objeto, ou seja, usando a classe.
let boloFesta = new formaDeBolo("massa de chocolate","recheio de nutella")

console.log(bolofesta)

```js
class formaDeBolo{
  constructor(saborDaMassa, saborRecheio){
    this.saborDaMassa = saborDaMassa
    this.saborRecheio = saborRecheio
	}
}

let boloFesta = new formaDeBolo("massa de chocolate","recheio de nutella")

console.log(boloFesta) // o bolo todo
console.log(boloFesta.saborDaMassa) // somente a massa
console.log(boloFesta.saborRecheio) // somente o recheio
```

**Método**: uma função que trabalha no contexto da classe

```js
class formaDeBolo{
	constructor(saborDaMassa, saborRecheio){
    	this.saborDaMassa = saborDaMassa
    	this.saborRecheio = saborRecheio
	}
    escrever(){
        console.log(`Um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborRecheio}`)
  	}
	assar(){
    	console.log("bolo assado de " + this.saborDaMassa)
        }
	
}

let boloFesta = new formaDeBolo("chocolate","nutella")
let boloPremium = new formaDeBolo("baunilha","coco")

boloFesta.escrever()
boloPremium.escrever()
boloPremium.assar()
```
--

**O Que São Esses Objetos Mágicos?**

Sabe quando você tem uma caixa onde guarda seus brinquedos, roupas e coisas favoritas? Um objeto no JavaScript é como essa caixa mágica, onde você pode colocar um montão de informações importantes juntas!

**Criando Seu Próprio Objeto Mágico**
Vamos fingir que estamos fazendo uma festa com informações sobre os convidados. Com objetos, é super fácil!

```js
let convidado = {
  nome: "Pedrinho",
  idade: 10,
  presente: "quebra-cabeça"
};
```

Olha só, Criamos um objeto chamado "convidado" com várias informações dentro dele, como nome, idade e presente. É como se tivéssemos feito uma ficha mágica para nosso convidado!

**Conversando com Objetos Mágicos**

Agora, você pode conversar com o objeto como se fosse um amiguinho. Dá uma olhada:

```js
console.log(convidado.nome + " tem " + convidado.idade + " anos e trouxe um " + convidado.presente + " de presente!");
```
Com esse pedacinho de código, conseguimos perguntar e mostrar várias coisas sobre o nosso convidado mágico!

**Adicionando Mais Magia aos Objetos**
Às vezes, você quer adicionar informações novas ao objeto, como quando você dá um nome ao seu novo brinquedo. Olha só como é fácil:

```js
convidado.localizacao = "Sala de Estar";
console.log(convidado.nome + " está na " + convidado.localizacao + ".");
```

Aqui, demos uma nova informação mágica para o convidado, que é onde ele está na festa. Agora, ele pode nos contar onde está!
