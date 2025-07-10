## O que são operadores e expressões

### Operadores Aritméticos:

| **Operador** | **Descrição** | **Exemplo** |
| --- | --- | --- |
| + | Adição | **`let result = 5 + 3;`** |
| - | Subtração | **`let result = 8 - 2;`** |
| * | Multiplicação | **`let result = 4 * 6;`** |
| / | Divisão | **`let result = 10 / 2;`** |
| % | Módulo (resto da divisão) | **`let result = 10 % 3;`** |

### Operadores Relacionais:

| **Operador** | **Descrição** | **Exemplo** |
| --- | --- | --- |
| == | Igual a (compara valor) | **`let isEqual = (x == y);`** |
| === | Igual a (compara valor e formato) |  |
| !== | Diferente de | **`let isNotEqual = (x != y);`** |
| > | Maior que | **`let isGreater = (x > y);`** |
| < | Menor que | **`let isLess = (x < y);`** |
| >= | Maior ou igual a | **`let isGreaterOrEqual = (x >= y);`** |
| <= | Menor ou igual a | **`let isLessOrEqual = (x <= y);`** |

| Sinal | Significado                              |
| ----- | ---------------------------------------- |
| =     | é atribuição                             |
| ==    | compara apenas o valor                   |
| ===   | compara o valor **e** o tipo do conteúdo |
| !==   | é diferente?                             |

⚠️ Observação: Corrigi a linha duplicada ==. O operador para comparar valor e tipo em JavaScript é ===.
```js
let marca = "Apple"
console.log(marca !== "Samsung")

// = é atribuição
// == é para comparar o valor
// === é para comparar o valor e o formato do conteúdo
// !== é diferente ?

--------------------------------
//guardar o valor em uma variável de resultado TRUE?FALSE
let marca = "Apple"
let resultado = marca === "Samsung"

console.log(resultado)
--------------------------------
//guardar o valor em uma variável de resultado TRUE?FALSE
let cpfBloqueado = "123.445.222-45"
let cpfUsuario = "222.111.222-09"
let ehCPFBloqueado = cpfUsuario === cpfBloqueado

console.log("O usuario está barrado ? " + ehCPFBloqueado)
--------------------------------
let CPFPermitido = "222.555.333-02"
let CPFDoUsuario = "222.555.333-02"

let ehBloqueado = CPFDoUsuario !== CPFPermitido

console.log("é um usuario invalido ? " + ehBloqueado)
--------------------------------
let idadeMinima = 18
let idadeUsuario = 18
let idadePermitidaValida = idadeUsuario >= idadeMinima

console.log(idadePermitidaValida)
--------------------------------
let idadeDeCorte = 50
let idadeUsuario = 50

let resultadoEhTerceiraIdade = idadeDeCorte <= idadeUsuario
console.log(resultadoEhTerceiraIdade)

```


### Operadores Lógicos:

| **Operador** | **Descrição** | **Exemplo** |
| --- | --- | --- |
| && | AND lógico | **`if (condition1 && condition2)`** |
| \|\| | OR lógico | ```if (condition1 \|\| condition2)``` |
| ! | NOT lógico | **`if (!condition)`** |

```js
// AND ( && )
let idade = 18
let vistoVerificado = false
let resultado =  (idade >= 18) && (vistoVerificado === true) 
console.log(resultado)
--------------------------------
// AND ( && ) - 100 moedas coletadas E 1 item estrela
let moedasColetadas = 99
let item = "estrela"
let resultado = (moedasColetadas >= 100) && (item === "estrela")
console.log(resultado)
--------------------------------
// OR ( || ) - nosso boneco só pode sair se tiver sem chuva OU com guarda Chuva
let tempo = "chuva"
let item = "guarda chuva"
let podeSair = (tempo !== "chuva") || (item === "guarda chuva")
console.log("nosso personagem pode sair ? " + podeSair)
--------------------------------
// NOT  ( !) - nega uma afirmação
let tempo = "chuva"
let resultado = tempo === "chuva"
console.log(!!resultado)
--------------------------------
// NOT  ( !) - nega uma afirmação
let tempo = "chuva"
let horario = 8
let resultado = !((tempo !== "chuva") && (horario > 6))
console.log(resultado)
--------------------------------
```



### Operadores de Atribuição:

| **Operador** | **Descrição** | **Exemplo** |
| --- | --- | --- |
| = | Atribuição | **`let x = 5;`** |
| += | Adição e atribuição | **`let num = 10; num += 2;`** |
| -= | Subtração e atribuição | **`let num = 10; num -= 3;`** |
| *= | Multiplicação e atribuição | **`let num = 5; num *= 4;`** |
| /= | Divisão e atribuição | **`let num = 10; num /= 2;`** |
| %= | Módulo e atribuição | **`let num = 10; num %= 3;`** |

### Operadores de Incremento e Decremento:

| **Operador** | **Descrição** | **Exemplo** |
| --- | --- | --- |
| ++ | Incremento | **`let counter = 0; counter++;`** |
| -- | Decremento | **`let counter = 5; counter--;`** |

