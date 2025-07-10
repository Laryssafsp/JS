Método:: ações nos vetores/matrizes <br>
Propriedades:: fatos/informações/características <br>


# 📘 JavaScript: Resumo Rápido

JavaScript é uma linguagem de programação de alto nível, interpretada, usada principalmente para criar páginas web interativas.

---

## 🧠 Conceitos Básicos

### Declaração de Variáveis
```js
let nome = "Ana";      // variável com escopo de bloco
const idade = 25;      // constante, não pode ser reatribuída
var cidade = "SP";     // variável com escopo de função (evite usar)
```

### Tipos de Dados
- **String**: `"texto"`
- **Number**: `123`, `3.14`
- **Boolean**: `true`, `false`
- **Array**: `[1, 2, 3]`
- **Object**: `{ nome: "Ana", idade: 25 }`
- **Null**: `null`
- **Undefined**: `undefined`

### Operadores
```js
+  -  *  /  %      // Aritméticos
==  ===  !=  !==   // Comparação
>  <  >=  <=       // Relacionais
&&  ||  !          // Lógicos
```

---

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

---

## 📦 Funções
```js
function saudacao(nome) {
  return `Olá, ${nome}`;
}

const soma = (a, b) => a + b;
```

---

## 🧰 Manipulando Arrays (Vetores)

```js
let nomesPokemon = ["Pikachu", "Charmander", "Bulbassaur"];
console.log(nomesPokemon); 
// Saída: ["Pikachu", "Charmander", "Bulbassaur"]
```

### 🔽 Remover elementos

```js
nomesPokemon.pop();     // Remove o último ("Bulbassaur")
nomesPokemon.shift();   // Remove o primeiro ("Pikachu")
console.log(nomesPokemon); 
// Saída: ["Charmander"]
```

### 🔼 Adicionar elementos

```js
nomesPokemon.push("Squirtle");     // Adiciona no final
nomesPokemon.unshift("Eevee");     // Adiciona no início
console.log(nomesPokemon); 
// Saída: ["Eevee", "Charmander", "Squirtle"]
```

### 🔄 Substituir um valor

```js
nomesPokemon[1] = "Jigglypuff"; 
console.log(nomesPokemon); 
// Saída: ["Eevee", "Jigglypuff", "Squirtle"]
```

### 🔍 Buscar elementos

```js
nomesPokemon.includes("Squirtle");    // true
nomesPokemon.indexOf("Eevee");        // 0
```

### 🗑️ Remover por valor

```js
const index = nomesPokemon.indexOf("Jigglypuff");
if (index !== -1) {
  nomesPokemon.splice(index, 1);     // Remove "Jigglypuff"
}
console.log(nomesPokemon); 
// Saída: ["Eevee", "Squirtle"]
```

### 🔁 Iterar sobre o array

```js
nomesPokemon.forEach((nome, i) => {
  console.log(`${i + 1}: ${nome}`);
});
// Saída:
// 1: Eevee
// 2: Squirtle
```

### 🆕 Criar novo array transformado

```js
const nomesMaiusculos = nomesPokemon.map(nome => nome.toUpperCase());
console.log(nomesMaiusculos); 
// Saída: ["EEVEE", "SQUIRTLE"]
```

### 🎯 Filtrar elementos

```js
const nomesComE = nomesPokemon.filter(nome => nome.includes("e"));
console.log(nomesComE); 
// Saída: ["Eevee", "Squirtle"]
```

---

## 🔧 Métodos e Propriedades de Arrays

Arrays em JavaScript possuem várias propriedades e métodos úteis para manipular dados.

### 📐 Propriedade `.length`

Retorna o número de elementos no array.

```js
const pokemons = ["Pikachu", "Bulbassaur", "Charmander"];
console.log(pokemons.length); 
// Saída: 3
```

---

### 🔁 Métodos de Iteração

- `.forEach(callback)` → Executa uma função para cada item
- `.map(callback)` → Cria um novo array com base no original
- `.filter(callback)` → Retorna um novo array com itens que passam em uma condição
- `.find(callback)` → Retorna o primeiro item que satisfaz a condição
- `.some(callback)` → Retorna `true` se ao menos um item satisfaz a condição
- `.every(callback)` → Retorna `true` se todos os itens satisfazem a condição

```js
pokemons.forEach(p => console.log(p));
const novos = pokemons.map(p => p.toUpperCase());
const filtrados = pokemons.filter(p => p.includes("chu"));
```

---

### ✂️ Métodos de Modificação

- `.push(item)` → Adiciona no final
- `.pop()` → Remove o último
- `.unshift(item)` → Adiciona no início
- `.shift()` → Remove o primeiro
- `.splice(início, qtd)` → Remove/insere elementos
- `.sort()` → Ordena os elementos
- `.reverse()` → Inverte a ordem do array

```js
pokemons.push("Squirtle");    // ["Pikachu", "Bulbassaur", "Charmander", "Squirtle"]
pokemons.pop();               // Remove "Squirtle"
pokemons.splice(1, 1);        // Remove "Bulbassaur"
pokemons.sort();              // Ordena em ordem alfabética
```

---

### 🔍 Métodos de Busca

- `.includes(item)` → Verifica se existe no array
- `.indexOf(item)` → Retorna o índice do item ou -1
- `.lastIndexOf(item)` → Última ocorrência do item

```js
console.log(pokemons.includes("Pikachu")); // true
console.log(pokemons.indexOf("Charmander")); // 1
```

---

### 📦 Métodos de Transformação

- `.join(separador)` → Concatena os elementos como string
- `.concat(array)` → Junta dois arrays
- `.slice(início, fim)` → Retorna uma cópia parcial
- `.toString()` → Converte o array para string

```js
const texto = pokemons.join(" - "); // "Pikachu - Charmander"
const copia = pokemons.slice(0, 2); // ["Pikachu", "Charmander"]
```

---

### 🧪 Dica

Você pode combinar vários métodos de array em cadeia:

```js
pokemons
  .filter(p => p.length > 6)
  .map(p => p.toUpperCase())
  .sort()
  .forEach(p => console.log(p));
```

---

## 🌐 DOM (Document Object Model)
```js
document.getElementById("id");
document.querySelector(".classe");

document.querySelector("button").addEventListener("click", () => {
  alert("Clicou!");
});
```

---

## 🕸️ Fetch API (Requisições HTTP)
```js
fetch("https://api.exemplo.com/dados")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Erro:", error));
```

---

## 📄 Exportação e Módulos (ES6)
```js
// arquivo.js
export const PI = 3.14;

// main.js
import { PI } from './arquivo.js';
```

---

## ✅ Dicas Finais
- Use `const` e `let` (evite `var`)
- Trate erros com `try/catch`
- Use arrow functions para manter o escopo de `this`

---

## 📚 Recursos Úteis
- [MDN Web Docs](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [JavaScript.info](https://javascript.info/)
- [W3Schools](https://www.w3schools.com/js/)
