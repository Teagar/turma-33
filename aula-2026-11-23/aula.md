# Guia da Aula de 23/11/2026: Callbacks em JavaScript

Resumo da aula para consulta e estudo. Todo o código mostrado aqui está em [`aula.js`](aula.js), na mesma ordem. Para rodar:

```bash
node aula-2026-11-23/aula.js
```

---

## 1. Aquecimento: função com alerta

O exercício de abertura pedia três coisas:
1. criar uma função;
2. fazer a função mostrar um alerta com "Bem-vindo à Coude!";
3. invocar a função 5 vezes.

```javascript
function alertaCoude() {
  alert("Bem-vindo à Coude!");
}

alertaCoude();
alertaCoude();
alertaCoude();
alertaCoude();
alertaCoude();
```

Pontos importantes:
- **Criar uma função não executa a função.** Ela só roda quando é **invocada**, com os parênteses: `alertaCoude()`. Uma função criada e nunca invocada não mostra nada.
- **`alert()` só existe no navegador.** No terminal (`node`), use `console.log()`. Para testar o `alert`, cole o código no console do navegador (F12).

---

## 2. Revisão: variáveis no PHP × no JavaScript

| | PHP | JavaScript |
|---|---|---|
| Criar | `$idade = 20;` | `let idade = 20;` |
| Mostrar | `echo $idade;` | `console.log(idade);` |
| Mudar o valor | `$idade = 25;` | `idade = 25;` (sem `let`) |

- O `let` é usado **só na criação**. Para mudar o valor, basta usar o nome da variável. Escrever `let idade` de novo dá erro, porque a variável já existe.
- O `console.log()` é o "echo" do JavaScript. Ele mostra no console o que estiver dentro dos parênteses.
- No PHP, as aspas duplas juntam texto com variável (`"Tenho $idade anos"`). **No JavaScript, aspas simples e duplas fazem a mesma coisa:** tudo vira texto. Para juntar texto com variável, use a **template string**, com crase e `${}`:

```javascript
console.log("idade");               // idade  (o texto, não a variável)
console.log(`Tenho ${idade} anos`); // Tenho 25 anos
```

Dentro do `${}` cabe qualquer **expressão**: `${1 + 1}` mostra `2`.

---

## 3. O que é um callback?

> **Callback é uma função que eu entrego como argumento para outra função, e essa outra função executa o callback na hora dela.**

Analogia da pizza: você liga para a pizzaria, deixa o seu telefone e vai fazer outra coisa. Quando a pizza fica pronta, a pizzaria **te liga de volta**. *Call back* significa justamente "ligar de volta".

A diferença para uma função comum é esta:
- Uma função comum recebe dados comuns como argumento: textos, números, arrays.
- Uma função com callback recebe **uma função** como argumento e executa essa função por dentro.

Vamos em degraus.

---

## 4. Degrau 1: entregar uma função

```javascript
function executar(fn) {
  console.log("1 - Entrei no executar");
  fn(); // quem executa o callback é o executar, nesta linha
  console.log("3 - Saí do executar");
}

function dizerOi() {
  console.log("2 - Oi!");
}

executar(dizerOi);
```

Saída:
```
1 - Entrei no executar
2 - Oi!
3 - Saí do executar
```

**Repare:** `executar(dizerOi)` vai **sem parênteses**. Eu não executo o `dizerOi`: eu **entrego** a função. Quem executa é o `executar`, na linha `fn()`.

### ⚠️ A pegadinha dos parênteses

```javascript
executar(dizerOi()); // ERRADO
```

Saída:
```
2 - Oi!
1 - Entrei no executar
TypeError: fn is not a function
```

O "2" aparece **primeiro**. O que acontece, passo a passo:
1. Os parênteses executam o `dizerOi` na hora, antes de entrar no `executar`.
2. O `dizerOi` não tem `return`, então devolve `undefined`.
3. O `executar` recebe `undefined` no lugar da função.
4. Na linha `fn()`, ele tenta executar `undefined` e dá erro.

**Regra:** para usar uma função como callback, passe **só o nome**, sem parênteses.

---

## 5. Degrau 2: o callback recebe um valor

```javascript
function processarPedido(prato, avisar) {
  console.log(`Preparando ${prato}...`);
  avisar(prato);
}

function avisarCliente(item) {
  console.log(`${item} pronto! Pode buscar.`);
}

processarPedido("macarrão", avisarCliente);
```

Saída:
```
Preparando macarrão...
macarrão pronto! Pode buscar.
```

O caminho de cada valor:
- O parâmetro `prato` recebe `"macarrão"`.
- O parâmetro `avisar` **recebe** a função `avisarCliente`.
- Então a linha `avisar(prato)` funciona como `avisarCliente("macarrão")`.
- Dentro do `avisarCliente`, o `item` vale `"macarrão"`.

> Se o callback tem um parâmetro, quem passa o valor para ele é a **função principal**, na linha `avisar(prato)`. Se você esquecer de passar o `prato` ali, o `item` fica `undefined`.

### As 3 formas de escrever o mesmo callback

```javascript
// 1. Função nomeada, criada fora
processarPedido("macarrão", avisarCliente);

// 2. Função anônima (sem nome), criada direto no argumento
processarPedido("pizza", function (item) {
  console.log(`Embalar ${item} para viagem`);
});

// 3. Arrow function: a forma mais curta
processarPedido("lasanha", (item) => console.log(`Entregar ${item} na mesa 4`));
```

Quando usar cada uma:
- **Nomeada:** quando o mesmo callback vai ser usado em vários lugares.
- **Anônima ou arrow:** quando o callback é curto e só vai ser usado ali.

Na arrow function com **um parâmetro só**, os parênteses são opcionais: `item => ...` e `(item) => ...` funcionam igual. Com zero ou dois ou mais parâmetros, eles são obrigatórios: `() => ...` e `(x, y) => ...`.

Nas três formas, a função só é **criada e entregue**. Quem executa é o `processarPedido`, depois do "Preparando…".

---

## 6. Exercício feito em aula: notas fiscais

**Enunciado:**
- Crie a função principal `processarNota(produto, avisar)`.
- Crie três callbacks: emitir, apagar e erro.
- Os callbacks só mostram mensagens com `console.log`. Não precisa fazer a lógica real de uma nota fiscal.

```javascript
function processarNota(produto, avisar) {
  console.log(`Processando a nota do produto ${produto}...`);
  avisar(produto);
}

// Forma 1: callback nomeado
function emitir(item) {
  console.log(`${item} foi emitido com sucesso!`);
}
processarNota("computador", emitir);

// Forma 2: callback anônimo
processarNota("computador", function (item) {
  console.log(`${item} foi apagado com sucesso!`);
});

// Forma 3: callback com arrow function
processarNota("computador", (item) => console.log(`${item} falhou na hora de processar. Tente novamente.`));
```

Saída:
```
Processando a nota do produto computador...
computador foi emitido com sucesso!
Processando a nota do produto computador...
computador foi apagado com sucesso!
Processando a nota do produto computador...
computador falhou na hora de processar. Tente novamente.
```

**Erros que apareceram nas correções:**
- **Chamar `avisar()` sem passar o `produto`.** O callback recebe `undefined`. O certo é `avisar(produto)`.
- **Usar dentro do callback uma variável que não é parâmetro dele.** Por exemplo, usar `produto` dentro do `emitir`, que só recebeu `item`, dá `ReferenceError: produto is not defined`. Cada callback precisa ter **o seu próprio parâmetro** para receber o valor.
- **Usar `if` para escolher a mensagem dentro da função principal.** Funciona, mas não é callback. A ideia é a função principal não saber qual mensagem mostrar: **quem decide é o callback que você entrega**.

---

## 7. Revisão: `return`

```javascript
function dobro(numero) {
  return numero * 2;
}

dobro(20);              // devolve 40, mas não mostra nada
console.log(dobro(20)); // 40
```

O `return` **devolve** um valor, mas não **mostra** nada. A chamada `dobro(20)` "vira" 40. Para ver o resultado, coloque a chamada dentro de um `console.log`.

---

## 8. Degrau 3: o callback devolve um valor

```javascript
function calcular(a, b, operacao) {
  return operacao(a, b);
}

console.log(calcular(20, 30, (x, y) => x + y)); // 50
console.log(calcular(20, 30, (x, y) => x - y)); // -10
console.log(calcular(20, 30, (x, y) => x / y)); // 0.6666666666666666
```

A mesma função `calcular` fez soma, subtração e divisão. Quem decidiu a operação foi o **callback**. É por isso que callbacks existem: a função principal fica genérica, e o detalhe é escolhido na hora de chamar.

> **Lembrete da aula passada:** a arrow function sem chaves tem **retorno implícito**: `(x, y) => x + y` devolve `x + y`. **Com chaves, precisa escrever o `return`:** `(x, y) => { return x + y; }`. Sem o `return`, ela devolve `undefined`.

---

## 9. Exercícios resolvidos em aula

### 9.1 `repetir(vezes, fn)`

Chama o `fn` a quantidade de `vezes` pedida, passando o número da vez:

```javascript
function repetir(vezes, fn) {
  for (let i = 1; i <= vezes; i++) {
    fn(i);
  }
}

repetir(3, (n) => console.log(`Volta ${n}`));
// Volta 1
// Volta 2
// Volta 3
```

### 9.2 `calcular` com subtração, divisão e potência

```javascript
console.log(calcular(10, 5, (x, y) => x - y)); // 5
console.log(calcular(10, 5, (x, y) => x / y)); // 2
console.log(calcular(2, 3, (x, y) => x ** y)); // 8
```

### 9.3 `cumprimentar(nome, formatar)`

```javascript
function cumprimentar(nome, formatar) {
  console.log(`Olá, ${formatar(nome)}!`);
}

cumprimentar("Ana", (nome) => nome.toUpperCase()); // Olá, ANA!
cumprimentar("Ana", (nome) => `Sra. ${nome}`);     // Olá, Sra. Ana!
```

Dentro do `${}` eu posso **chamar o callback**, porque ali cabe qualquer expressão.

---

## 10. Colinha

| Conceito | Resumo |
|---|---|
| Callback | Função entregue como argumento para outra função executar |
| Entregar × executar | `fn` entrega a função; `fn()` executa na hora |
| Parâmetro × argumento | Parâmetro é o nome na criação (`function f(nome)`); argumento é o valor na chamada (`f("Ana")`) |
| Quem passa o valor ao callback | A função principal: `avisar(prato)` |
| 3 formas de callback | Nomeada (`avisarCliente`), anônima (`function (item) { … }`) e arrow (`(item) => …`) |
| `return` | Devolve o valor, não mostra. Para ver, use `console.log(f())` |
| Arrow sem chaves | Retorno implícito: `(x, y) => x + y` |
| Arrow com chaves | Precisa de `return` |
| `alert()` | Só no navegador. No `node`, use `console.log()` |
| `let` | Só na criação. Para mudar o valor, use só o nome |
| Template string | Crase + `${expressão}` |

**Próxima aula:** métodos de array que recebem callback (`forEach`, `map`, `filter`, `find`). O exercício 10 desta lista mostra como o `forEach` funciona por dentro.
