# 📘 JavaScript: Resumo Rápido

JavaScript é uma linguagem de programação de alto nível, interpretada, usada principalmente para criar páginas web interativas.

[Mapa da Aventura](https://helpful-jump-17b.notion.site/Mapa-de-aventura-91f3e9bd923842149d4dba754dc65c07) - conteúdo explicativo dos arquivos deste repositório.

---
## 🧠 Conceitos Básicos

### Declaração de Variáveis
```js
let nome = "Ana";      // variável com escopo de bloco
const idade = 25;      // constante, não pode ser reatribuída
var cidade = "SP";     // variável com escopo de função (evite usar)
### Declaração de Variáveis
```
# Tipos de Dados
- String: "texto"
- Number: 123, 3.14
- Boolean: true, false
- Array: [1, 2, 3]
- Object: { nome: "Ana", idade: 25 }
- Null: null
- Undefined: undefined

| Tipo de Variável              | Descrição                                               |
|------------------------------|----------------------------------------------------------|
| **Variáveis numéricas**      | São usadas para armazenar valores numéricos.            |
| Inteiro                      | Armazena números inteiros, como 1, 10, -5.              |
| Ponto flutuante ou decimal   | Armazena números com casas decimais, como 3.14, -0.5.   |
| Números complexos            | Armazena números complexos, como 2+3j.                  |
| **Variáveis de texto**       | Usadas para armazenar sequências de caracteres.         |
| String                       | Armazena uma sequência de caracteres, como "Olá, mundo!"|
| Caractere                    | Armazena um único caractere, como 'a', 'X', '@'.        |
| **Variáveis lógicas**        | Usadas para armazenar valores de verdadeiro ou falso.   |
| Booleano                     | Armazena os valores True ou False.                      |
| **Variáveis de data e hora** | Utilizadas para representar datas e horários.           |
| Data                         | Armazena datas, no formato AAAA-MM-DD.                  |
| Hora                         | Armazena horários, no formato HH:MM:SS.                 |

#### Tipos variáveis
`string` - são variaveis que armazenam texto <br>
**`number` - são variaveis que armazenam números**  <br>
`boolean` - são variaveis lógicas, que armazenam o valor de ligado ou desligado (true/false)  <br>

# Operadores
```js
+  -  *  /  %      // Aritméticos
==  ===  !=  !==   // Comparação
>  <  >=  <=       // Relacionais
&&  ||  !          // Lógicos
```


## 🔁 Estruturas de Controle
### Condicional
```js
if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}
```

### Laços
```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}

while (condicao) {
  // código
}

do {
  // código
} while (condicao);
```

##📦 Funções
```js
function saudacao(nome) {
  return `Olá, ${nome}`;
}
const soma = (a, b) => a + b;
```
## 🧰 Manipulação de Arrays
```js
const numeros = [1, 2, 3];

numeros.push(4);               // adiciona
numeros.pop();                 // remove último
numeros.map(x => x * 2);       // transforma
numeros.filter(x => x > 1);    // filtra
```

## 🌐 DOM (Document Object Model)
```js
document.getElementById("id");
document.querySelector(".classe");

document.querySelector("button").addEventListener("click", () => {
  alert("Clicou!");
});
```
## 🕸️ Fetch API (Requisições HTTP)

```js
fetch("https://api.exemplo.com/dados")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Erro:", error));
```
## 📄 Exportação e Módulos (ES6)

```js
// arquivo.js
export const PI = 3.14;

// main.js
import { PI } from './arquivo.js';
```

## ✅ Dicas
- Use const e let (evite var)
- Sempre trate erros com try/catch
- Use arrow functions para manter escopo de this

📚 Recursos
- [MDN Web Docs](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [JavaScript.info](https://javascript.info/)
- [W3Schools](https://www.w3schools.com/js/)

