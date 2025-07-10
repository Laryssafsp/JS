**Variáveis** :: caixas -> informações simples [únicas] <br>
**Armários em Linhas** :: vetores -> mesmo tipo  <br>
**Armarios em bidimensional** :: matrizes -> informações de vários tipos.  <br>

```js
let nomesPokemon = ["Pikachu" , "Chamander", "Bulbassaur"]
let timePokemon = [
  ["pikachu", "M", 1],
  ["Chamander", "F", 3]
]


console.log(" O pokemon " + timePokemon[1][0] + " é do sexo " +  timePokemon[1][1] + 
" e está no nível " + timePokemon[1][2] )
```

---

## 🧰 Manipulando Arrays (Vetores)

```js
let nomesPokemon = ["Pikachu", "Charmander", "Bulbassaur"];
console.log(nomesPokemon); 
// Saída: ["Pikachu", "Charmander", "Bulbassaur"]
```
🔽 Remover elementos

```js
nomesPokemon.pop();     // Remove o último ("Bulbassaur")
nomesPokemon.shift();   // Remove o primeiro ("Pikachu")
console.log(nomesPokemon); 
// Saída: ["Charmander"]
```
🔼 Adicionar elementos

  ```js
nomesPokemon.push("Squirtle");     // Adiciona no final
nomesPokemon.unshift("Eevee");     // Adiciona no início
console.log(nomesPokemon); 
// Saída: ["Eevee", "Charmander", "Squirtle"]
```
🔄 Substituir um valor
```js
nomesPokemon[1] = "Jigglypuff"; 
console.log(nomesPokemon); 
// Saída: ["Eevee", "Jigglypuff", "Squirtle"]
```
🔍 Buscar elementos
```js

nomesPokemon.includes("Squirtle");    // true
nomesPokemon.indexOf("Eevee");        // 0
```
🗑️ Remover por valor
```js
const index = nomesPokemon.indexOf("Jigglypuff");
if (index !:: -1) {
  nomesPokemon.splice(index, 1);     // Remove "Jigglypuff"
}
console.log(nomesPokemon); 
// Saída: ["Eevee", "Squirtle"]
```
🔁 Iterar sobre o array
```js
nomesPokemon.forEach((nome, i) => {
  console.log(`${i + 1}: ${nome}`);
});
// Saída:
// 1: Eevee
// 2: Squirtle
```
🆕 Criar novo array transformado
```js

const nomesMaiusculos = nomesPokemon.map(nome => nome.toUpperCase());
console.log(nomesMaiusculos); 
// Saída: ["EEVEE", "SQUIRTLE"]
```
🎯 Filtrar elementos
```js
const nomesComE = nomesPokemon.filter(nome => nome.includes("e"));
console.log(nomesComE); 
// Saída: ["Eevee", "Squirtle"]
```
