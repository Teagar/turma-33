# Guia da Aula de 24/11/2026: `forEach` e `map`

Resumo da aula para consulta e estudo. Todo o código mostrado aqui está em [`aula.js`](aula.js), na mesma ordem. Para rodar:

```bash
node aula-2026-11-24/aula.js
```

Na aula de 23/11 a gente aprendeu o que é um callback. Hoje usamos callbacks na prática, com **métodos que já vêm prontos no JavaScript** e que recebem um callback: o `forEach` e o `map`.

---

## 1. Aquecimento: arrow function sem chaves × com chaves

```javascript
const triplo = (n) => n * 3;
const triploComChaves = (n) => { n * 3; };

console.log(triplo(4), triploComChaves(4)); // 12 undefined
```

Por que o segundo deu `undefined`?

- **Sem chaves**, a arrow function tem **retorno implícito**. É como se tivesse um `return` escondido: `(n) => n * 3` devolve `n * 3`.
- **Com chaves**, esse retorno implícito some. A função até faz a conta `n * 3`, mas não faz nada com o resultado. Como não tem `return`, ela devolve `undefined`.

Para corrigir a versão com chaves, escreva o `return`:

```javascript
const formatar = (n) => n.toUpperCase();
const formatarComChaves = (n) => { return n.toUpperCase(); };

console.log(formatar("Thiago"), formatarComChaves("Thiago")); // THIAGO THIAGO
```

> Dava para colocar um `console.log` dentro da função, em vez do `return`? Dava, mas aí a função **mostraria** o valor em vez de **devolver**. Quem chamou a função não receberia nada para usar depois.

### Callback de aquecimento

```javascript
function mostrar(fn) {
  fn("Coude");
}

mostrar((nome) => console.log(`Olá, ${nome}!`)); // Olá, Coude!
```

O `mostrar` recebe uma função no parâmetro `fn` e executa essa função passando `"Coude"`. Por isso o `nome` dentro da arrow vale `"Coude"`.

---

## 2. Correção do ex02 da lista de 23/11: os parênteses do callback

```javascript
executar(mostrarMensagem()); // ERRADO: aparece o "2" primeiro e depois dá TypeError
executar(mostrarMensagem);   // CERTO
```

Os parênteses **executam** o `mostrarMensagem` na hora, antes de entrar no `executar`. Ele não tem `return`, então o `executar` recebe `undefined` no lugar da função. Na linha `fn()`, ele tenta executar `undefined` e dá `TypeError: fn is not a function`.

**Dica para achar erros:** a mensagem de erro do Node mostra o arquivo e a linha (`ex02.js:31`). Comece a procurar o problema por ali.

---

## 3. Correção do ex05 da lista de 23/11: formas de pagamento

```javascript
function processarPagamento(valor, pagar) {
  console.log(`Processando pagamento de R$ ${valor}...`);
  pagar(valor);
}

function pagarNoPix(v) {
  console.log(`Pix de R$ ${v} recebido na hora!`);
}

function pagarNoCartao(v) {
  console.log(`Cartão aprovado: R$ ${v} em 1x`);
}

function pagarNoBoleto(v) {
  console.log(`Boleto de R$ ${v} gerado. Vence em 3 dias.`);
}

processarPagamento(200, pagarNoCartao);
processarPagamento(300, pagarNoBoleto);
processarPagamento(850, pagarNoPix);
```

Saída:
```
Processando pagamento de R$ 200...
Cartão aprovado: R$ 200 em 1x
Processando pagamento de R$ 300...
Boleto de R$ 300 gerado. Vence em 3 dias.
Processando pagamento de R$ 850...
Pix de R$ 850 recebido na hora!
```

Leia a linha `processarPagamento(200, pagarNoCartao)` em voz alta: "processar o pagamento de 200, pagando no cartão". **O callback deixa o código fácil de ler.** Dava para fazer o mesmo com `if`/`else` dentro do `processarPagamento`, mas a função ficaria maior, e cada nova forma de pagamento obrigaria você a mexer nela. Com callback, basta criar uma função nova.

**Callback nomeado ou arrow direto no argumento?** Não existe regra fixa. Pergunte: "se outra pessoa ler, ela entende rápido?". Aqui, criar as funções por fora ficou mais legível do que escrever três arrows dentro das chamadas.

> **Dica para organizar os exercícios:** se você resolve tudo em um arquivo só, coloque cada exercício dentro de uma função (`function exercicio01() { … }`). Para testar um exercício, basta invocar `exercicio01()`, sem precisar comentar o resto.

---

## 4. Correção do ex10 da lista de 23/11: o `paraCada`

```javascript
const frutas = ["Maçã", "Banana", "Uva", "Abacaxi"];

function paraCada(lista, fn) {
  for (let i = 0; i < lista.length; i++) {
    let item = lista[i];
    fn(item, i);
  }
}

paraCada(frutas, (fruta, indice) => console.log(`${indice + 1}. ${fruta}`));
paraCada(frutas, (fruta) => console.log(`${fruta.toUpperCase()} (${fruta.length} letras)`));
```

Saída:
```
1. Maçã
2. Banana
3. Uva
4. Abacaxi
MAÇÃ (4 letras)
BANANA (6 letras)
UVA (3 letras)
ABACAXI (7 letras)
```

Passo a passo:
- O `for` começa com `i = 0` e vai até `i < lista.length`. O `length` dá a **quantidade** de itens (4), mesmo que os índices comecem em 0. Por isso o último índice é 3.
- `lista[i]` pega o item da vez. Na 1ª volta é `lista[0]`, a `"Maçã"`; na 2ª, `lista[1]`, a `"Banana"`, e assim por diante. Quem troca o número é o laço, não a gente.
- A variável `item` não era obrigatória (dava para escrever `fn(lista[i], i)`), mas deixa o código mais fácil de ler.
- `fn(item, i)` executa o callback passando **o item e o índice**. Quem decide o que fazer com eles é o callback que você entrega.
- **Dê nomes que façam sentido** aos parâmetros do callback. Cada item de uma lista de `frutas` é uma `fruta`; de `animais`, um `animal`; de `pessoas`, uma `pessoa`.
- No segundo `paraCada`, o callback só precisa da fruta, então pode receber só um parâmetro. O índice continua sendo enviado, ele só não é usado.

### 4.1 Escopo: por que usar `let`

- **No JavaScript, todo par de chaves `{ }` cria um bloco**, inclusive o do `for` e o do `if`. Uma variável criada com `let` ou `const` dentro de um bloco **só existe dentro dele**. Fora dele, dá `ReferenceError: item is not defined`.
- **No PHP é diferente:** uma variável criada dentro de um `if` continua existindo depois dele.
- O **`var`** é a forma antiga. Ele **ignora o bloco** do `for` e do `if` (só respeita o bloco de uma função), então a variável "vaza" para fora. Isso causa erros difíceis de achar. **Não use `var`.**
- Criar variável **sem nada** (`item = lista[i]`) também funciona, mas é pior ainda: a variável vira **global** e fica visível no código inteiro. Em modo estrito, isso nem é permitido e dá erro.

> **Regra da turma:** variável que muda de valor, `let`; valor que não muda, `const`. Nunca `var`, nunca sem nada.

### 4.2 A pegadinha do `++`

Algumas pessoas tentaram trocar o `indice + 1` por `indice++` e o resultado começou em 0:

```javascript
paraCada(frutas, (fruta, indice) => console.log(`${indice++}. ${fruta}`)); // 0. Maçã, 1. Banana...
paraCada(frutas, (fruta, indice) => console.log(`${++indice}. ${fruta}`)); // 1. Maçã, 2. Banana...
```

| Escrita | O que acontece | Valor mostrado quando `indice` é 0 |
|---|---|---|
| `indice++` (pós-incremento) | **usa** o valor atual e **depois** soma 1 | `0` |
| `++indice` (pré-incremento) | **soma** 1 **antes** e depois usa | `1` |
| `indice + 1` | só calcula, não muda a variável | `1` |

Para mostrar a posição a partir de 1, o mais claro é **`indice + 1`**: ele não altera a variável e todo mundo entende na hora.

---

## 5. `forEach`: o `paraCada` que já vem pronto

A função `paraCada` que a gente construiu **já existe no JavaScript**, com o nome em inglês: **`forEach`** ("para cada").

```javascript
paraCada(frutas, (fruta, indice) => console.log(`${indice + 1}. ${fruta}`)); // a nossa
frutas.forEach((fruta, indice) => console.log(`${indice + 1}. ${fruta}`));   // a pronta
```

As duas linhas mostram exatamente a mesma coisa. A diferença é a forma de chamar:
- O `paraCada` é uma **função**: recebe o array como primeiro argumento.
- O `forEach` é um **método**, ou seja, uma função que pertence a um valor. Ele é chamado **a partir do array**, com ponto: `frutas.forEach(...)`. Você já usou outros métodos: `nome.toUpperCase()` e `lista.push(item)`.

Como o `forEach` funciona:
- Ele recebe **um callback**.
- Ele executa esse callback **uma vez para cada item** do array. Um array de 3 itens executa 3 vezes; de 20 itens, 20 vezes.
- A cada vez, ele passa para o callback **primeiro o item e depois o índice**, na mesma ordem que o nosso `fn(item, i)`.

> **No PHP**, o `foreach` é uma estrutura de laço, como o `for` e o `while`. **No JavaScript**, o `forEach` é um método do array que recebe um callback. Por isso ele só apareceu agora: antes era preciso entender funções, funções anônimas, arrow functions e callbacks.

### Exercício feito em aula: índice e preço

```javascript
const precos = [10, 25, 8, 40, 15];

precos.forEach((preco, indice) => console.log(`[${indice}] R$ ${preco}`));
```

Saída:
```
[0] R$ 10
[1] R$ 25
[2] R$ 8
[3] R$ 40
[4] R$ 15
```

---

## 6. Criando uma lista nova: o `transformar` na mão

O `forEach` só **percorre** a lista. E se eu quiser uma **lista nova**, com todos os preços dobrados?

```javascript
function transformar(lista, fn) {
  const nova = [];
  for (let i = 0; i < lista.length; i++) {
    nova.push(fn(lista[i]));
  }
  return nova;
}

const precosDobro = transformar(precos, (preco) => preco * 2);
console.log(precosDobro); // [ 20, 50, 16, 80, 30 ]
```

Passo a passo:
- `const nova = []` cria uma lista vazia.
- Para cada item, `fn(lista[i])` executa o callback, e o que ele **devolver** vai para a lista nova com `push`. O `push` é o método que adiciona um item no fim do array.
- `return nova` devolve a lista pronta. Sem o `return`, a `nova` ficaria presa dentro da função, por causa do escopo.
- A chamada `transformar(precos, …)` **vira** um array. Por isso dá para guardar numa constante (`precosDobro`) ou colocar dentro de um `console.log`. Só chamar `transformar(...)`, sem guardar e sem `console.log`, não mostra nada.

Aqui o callback **precisa devolver** um valor (degrau 3 da aula passada). `(preco) => preco * 2` não tem chaves, então devolve sozinho.

---

## 7. `map`: o `transformar` que já vem pronto

```javascript
const precosTriplo = precos.map((preco) => preco * 3);

console.log(precosTriplo); // [ 30, 75, 24, 120, 45 ]
console.log(precos);       // [ 10, 25, 8, 40, 15 ]
```

O **`map`** ("mapear") percorre o array e monta um **array novo**, do mesmo tamanho, com o que o callback devolver para cada item. **O array original não muda.**

| | `forEach` | `map` |
|---|---|---|
| Para que serve | **fazer algo** com cada item (mostrar, somar…) | **criar um array novo** a partir de outro |
| O que devolve | nada (`undefined`) | um array novo, do mesmo tamanho |
| O callback precisa de `return`? | não | **sim**: o que ele devolve vai para o array novo |
| Versão feita à mão em aula | `paraCada` | `transformar` |

> **Cuidado:** no `map`, uma arrow **com chaves** e **sem `return`** gera um array cheio de `undefined`, a mesma pegadinha do aquecimento.

---

## 8. Último exercício do dia: 10% de desconto

**Enunciado:** a partir de `precos`, crie um array novo chamado `comDesconto` com cada preço já com 10% de desconto.

```javascript
const comDesconto = precos.map((preco) => preco * 0.9);
console.log(comDesconto); // [ 9, 22.5, 7.2, 36, 13.5 ]
```

Pagar com 10% de desconto é pagar 90% do preço, por isso `preco * 0.9`. Também funciona tirar os 10% do preço: `preco - preco * 0.1`.

---

## 9. Colinha

| Conceito | Resumo |
|---|---|
| Arrow sem chaves | Retorno implícito: `(n) => n * 3` |
| Arrow com chaves | Precisa de `return`; sem ele, devolve `undefined` |
| Escopo de bloco | `let` e `const` só existem dentro das chaves em que foram criados |
| `var` | Forma antiga, ignora o bloco. Não use |
| `indice++` × `++indice` | `++` depois usa e depois soma; `++` antes soma primeiro. Prefira `indice + 1` |
| Método | Função que pertence a um valor, chamada com ponto: `frutas.forEach(...)` |
| `forEach(callback)` | Executa o callback para cada item. Não devolve nada |
| `map(callback)` | Cria um array novo com o que o callback devolver. O original não muda |
| Parâmetros do callback | Primeiro o **item**, depois o **índice**: `(fruta, indice) => …` |
| `push` | Adiciona um item no fim do array |

**Próxima aula:** mais métodos de array que recebem callback: `filter` (filtrar) e `find` (achar o primeiro). Depois, objetos e arrays de objetos.
