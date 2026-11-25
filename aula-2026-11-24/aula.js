// =====================================================================
// Aula de 24/11/2026 — forEach e map: métodos de array que recebem callback
// Todo o código mostrado em aula, na ordem. Para rodar:
//   node aula-2026-11-24/aula.js
// =====================================================================


// ---------------------------------------------------------------------
// 1. Aquecimento: arrow function sem chaves × com chaves
// ---------------------------------------------------------------------
const triplo = (n) => n * 3;                  // sem chaves: retorno implícito
const triploComChaves = (n) => { n * 3; };    // com chaves: faltou o return!

console.log(triplo(4), triploComChaves(4));   // 12 undefined

const formatar = (n) => n.toUpperCase();
const formatarComChaves = (n) => { return n.toUpperCase(); }; // agora com return

console.log(formatar("Thiago"), formatarComChaves("Thiago")); // THIAGO THIAGO

// Callback: o mostrar recebe uma função e executa ela passando "Coude"
function mostrar(fn) {
  fn("Coude");
}

mostrar((nome) => console.log(`Olá, ${nome}!`)); // Olá, Coude!


// ---------------------------------------------------------------------
// 2. Correção do ex02 (lista de 23/11): os parênteses do callback
// ---------------------------------------------------------------------
// ERRADO: executar(mostrarMensagem());  → executa na hora e entrega undefined
// CERTO:  executar(mostrarMensagem);    → entrega a função, sem parênteses
function executar(fn) {
  console.log("1 - Antes do callback");
  fn();
  console.log("3 - Depois do callback");
}

function mostrarMensagem() {
  console.log("2 - Callback executado!");
}

executar(mostrarMensagem);


// ---------------------------------------------------------------------
// 3. Correção do ex05 (lista de 23/11): formas de pagamento
// ---------------------------------------------------------------------
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


// ---------------------------------------------------------------------
// 4. Correção do ex10 (lista de 23/11): paraCada, um forEach feito à mão
// ---------------------------------------------------------------------
const frutas = ["Maçã", "Banana", "Uva", "Abacaxi"];

function paraCada(lista, fn) {
  for (let i = 0; i < lista.length; i++) {
    let item = lista[i]; // let: o item só existe dentro das chaves do for
    fn(item, i);
  }
}

paraCada(frutas, (fruta, indice) => console.log(`${indice + 1}. ${fruta}`));
paraCada(frutas, (fruta) => console.log(`${fruta.toUpperCase()} (${fruta.length} letras)`));

// A pegadinha do ++:
// indice++ → usa o valor ANTIGO e só depois soma  → 0. Maçã, 1. Banana...
// ++indice → soma PRIMEIRO e depois usa o valor   → 1. Maçã, 2. Banana...
paraCada(frutas, (fruta, indice) => console.log(`${indice++}. ${fruta}`)); // começa em 0
paraCada(frutas, (fruta, indice) => console.log(`${++indice}. ${fruta}`)); // começa em 1


// ---------------------------------------------------------------------
// 5. forEach: o paraCada que já vem pronto no JavaScript
// ---------------------------------------------------------------------
// paraCada(frutas, (fruta, indice) => ...)   ← a nossa função
// frutas.forEach((fruta, indice) => ...)     ← o método do array
frutas.forEach((fruta, indice) => console.log(`${indice + 1}. ${fruta}`));
frutas.forEach((fruta) => console.log(`${fruta.toUpperCase()} (${fruta.length} letras)`));

// Exercício em aula: mostrar o índice e o preço
const precos = [10, 25, 8, 40, 15];

precos.forEach((preco, indice) => console.log(`[${indice}] R$ ${preco}`));
// [0] R$ 10
// [1] R$ 25
// [2] R$ 8
// [3] R$ 40
// [4] R$ 15


// ---------------------------------------------------------------------
// 6. transformar: criar uma lista NOVA a partir de outra (na mão)
// ---------------------------------------------------------------------
function transformar(lista, fn) {
  const nova = [];
  for (let i = 0; i < lista.length; i++) {
    nova.push(fn(lista[i])); // guarda na lista nova o que o callback DEVOLVER
  }
  return nova;
}

const precosDobro = transformar(precos, (preco) => preco * 2);
console.log(precosDobro); // [ 20, 50, 16, 80, 30 ]


// ---------------------------------------------------------------------
// 7. map: o transformar que já vem pronto no JavaScript
// ---------------------------------------------------------------------
const precosTriplo = precos.map((preco) => preco * 3);
console.log(precosTriplo); // [ 30, 75, 24, 120, 45 ]
console.log(precos);       // [ 10, 25, 8, 40, 15 ] (o original não muda)


// ---------------------------------------------------------------------
// 8. Último exercício do dia: 10% de desconto em cada preço
// ---------------------------------------------------------------------
const comDesconto = precos.map((preco) => preco * 0.9);
console.log(comDesconto); // [ 9, 22.5, 7.2, 36, 13.5 ]

// Outra forma, que dá o mesmo resultado: tirar 10% do preço
const comDesconto2 = precos.map((preco) => preco - preco * 0.1);
console.log(comDesconto2); // [ 9, 22.5, 7.2, 36, 13.5 ]
