Era uma vez um herói chamado João que estava em uma aventura emocionante para resgatar a princesa perdida em um mundo mágico. Mas para alcançar o castelo onde a princesa estava aprisionada, ele precisava atravessar uma floresta cheia de perigos e enigmas.
Vamos ajudar João a tomar as decisões certas usando uma estrutura IF em JavaScript! Essa estrutura é como um caminho mágico que o nosso herói seguirá.
-  O nosso herói João chegou a uma encruzilhada na floresta misteriosa.
-  Ele precisa decidir qual caminho seguir para continuar a sua jornada.

​```
if (caminhoEsquerdo === 'obstaculo') {
  // Se o caminho da esquerda tiver um obstáculo, João vai tentar o caminho da direita.
  seguirCaminhoDireito();
} else if (caminhoEsquerdo === 'ponteQuebrada') {
  // Se o caminho da esquerda tiver uma ponte quebrada, João vai procurar outro caminho.
  procurarOutroCaminho();
} else {
  // Se não tiver obstáculo nem ponte quebrada no caminho da esquerda, João seguirá por esse caminho.
  seguirCaminhoEsquerdo();
}
​```
Imagina que você é o herói João, e está em uma floresta mágica em busca da princesa. Você chegou a um lugar onde tem dois caminhos à sua frente: um pela esquerda e outro pela direita.

Primeiro, você vai olhar o caminho da esquerda, e vai verificar se tem algum obstáculo no caminho, como uma pedra enorme que não dá para passar. Se tiver, você vai dizer "ah, esse caminho está bloqueado", e vai tentar o caminho da direita.

Se o caminho da esquerda estiver livre, você vai olhar se tem uma ponte para atravessar. Se a ponte estiver quebrada, você vai falar "oh não, essa ponte está quebrada, não posso passar por aqui", e vai procurar outro caminho.

Mas se o caminho da esquerda estiver livre e a ponte estiver inteira, você vai ficar feliz e vai seguir por esse caminho!

Essa é a maneira como o herói João faz as escolhas na floresta usando o poder mágico do IF, ELSE IF e ELSE em JavaScript.

Então, o que João vai fazer? Isso depende dos obstáculos que ele encontrar pelo caminho. Lembre-se de tomar decisões sábias para ajudar o nosso herói a salvar a princesa!

```js
let possuiOvos = true
let itensComprados = ""

if(possuiOvos){
itensComprados = "Leite"
}
else{
console.log("passou na sessão de congelados")
itensComprados = "Lasanha congelada"
}

console.log("item comprado: " + itensComprados)
​
//if,else if ,else
let nivelDeFome =  "1"

if(nivelDeFome === 1){
console.log("pouca fome")
}else if(nivelDeFome ===2){
console.log("muita fome")
}else{
console.log("Você comeria mais que o pica pau")
``
}
