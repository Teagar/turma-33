/*
 * Gabarito — Exercício 10: Percorrendo uma Lista com Callback
 * Nível 3 — Intermediário
 */

const frutas = ["Maçã", "Banana", "Uva", "Abacaxi"];

function paraCada(lista, fn) {
  for (let i = 0; i < lista.length; i++) {
    fn(lista[i], i);
  }
}

// a) numeradas a partir de 1 (o índice começa em 0, por isso o + 1)
paraCada(frutas, (fruta, indice) => console.log(`${indice + 1}. ${fruta}`));

// b) em maiúsculas, com a quantidade de letras
paraCada(frutas, (fruta) => console.log(`${fruta.toUpperCase()} (${fruta.length} letras)`));
