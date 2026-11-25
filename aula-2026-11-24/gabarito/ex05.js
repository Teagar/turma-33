/*
 * Gabarito — Exercício 05: Somando o Carrinho com forEach
 * Nível 2 — Básico
 */

const precos = [12, 30, 5, 18];

// let, porque o total vai mudar de valor a cada item
let total = 0;

precos.forEach((preco, indice) => {
  console.log(`Item ${indice + 1}: R$ ${preco}`);
  total = total + preco; // também pode ser total += preco
});

console.log(`Total da compra: R$ ${total}`);
