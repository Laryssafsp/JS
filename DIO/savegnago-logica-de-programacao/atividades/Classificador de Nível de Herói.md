# Entendendo o Desafio
 
Agora é a sua hora de brilhar e construir um perfil de destaque na DIO! Explore todos os conceitos explorados até aqui e replique (ou melhore, porque não?) este projeto prático. Para isso, crie seu próprio repositório e aumente ainda mais seu portfólio de projetos no GitHub, o qual pode fazer toda diferença em suas entrevistas técnicas 😎
 
Neste repositório, insira todos os links e arquivos necessários para seu projeto, seja um arquivo de banco de dados ou um link para o template no Figma.
 
Dica: Se o expert forneceu um repositório Github, você pode dar um "fork" no repositório dele para organizar suas alterações e evoluções mantendo uma referência direta ao código-fonte original.
 
Instruções para entrega
# 1️⃣ Desafio Classificador de nível de Herói

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"

```js
// Matriz de heróis: [nome, XP]
const herois = [
  ["Aragorn", 950],
  ["Legolas", 1500],
  ["Gimli", 3200],
  ["Frodo", 5200],
  ["Gandalf", 7600],
  ["Boromir", 8800],
  ["Sam", 9400],
  ["Elrond", 10500]
];

// Função que classifica o nível de XP
function classificarHeroi(nome, xp) {
  let nivel;

  if (xp < 1000) {
    nivel = "Ferro";
  } else if (xp <= 2000) {
    nivel = "Bronze";
  } else if (xp <= 5000) {
    nivel = "Prata";
  } else if (xp <= 7000) {
    nivel = "Ouro";
  } else if (xp <= 8000) {
    nivel = "Platina";
  } else if (xp <= 9000) {
    nivel = "Ascendente";
  } else if (xp <= 10000) {
    nivel = "Imortal";
  } else {
    nivel = "Radiante";
  }

  console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
}

// Laço para percorrer todos os heróis e exibir o nível
for (let i = 0; i < herois.length; i++) {
  const [nome, xp] = herois[i];
  classificarHeroi(nome, xp);
}
```

## Extra

```js
const herois = [
  { nome: "Aragorn", xp: 950 },
  { nome: "Legolas", xp: 1500 },
  { nome: "Gimli", xp: 3200 },
  { nome: "Frodo", xp: 5200 },
  { nome: "Gandalf", xp: 7600 },
  { nome: "Boromir", xp: 8800 },
  { nome: "Sam", xp: 9400 },
  { nome: "Elrond", xp: 10500 }
];

function classificarNivel(xp) {
  if (xp < 1000) return "Ferro";
  else if (xp <= 2000) return "Bronze";
  else if (xp <= 5000) return "Prata";
  else if (xp <= 7000) return "Ouro";
  else if (xp <= 8000) return "Platina";
  else if (xp <= 9000) return "Ascendente";
  else if (xp <= 10000) return "Imortal";
  else return "Radiante";
}

// Contador de níveis
const contagemNiveis = {
  Ferro: 0,
  Bronze: 0,
  Prata: 0,
  Ouro: 0,
  Platina: 0,
  Ascendente: 0,
  Imortal: 0,
  Radiante: 0
};

// Ordena os heróis do maior para o menor XP
herois.sort((a, b) => b.xp - a.xp);

// Exibe o ranking
console.log("🏆 RANKING DE HERÓIS POR XP:\n");

for (let heroi of herois) {
  const nivel = classificarNivel(heroi.xp);
  contagemNiveis[nivel]++;
  console.log(`O Herói de nome ${heroi.nome} está no nível de ${nivel} (XP: ${heroi.xp})`);
}

// Mostra o resumo de heróis por nível
console.log("\n📊 Total de heróis por nível:\n");
for (let nivel in contagemNiveis) {
  if (contagemNiveis[nivel] > 0) {
    console.log(`${nivel}: ${contagemNiveis[nivel]}`);
  }
}

```
