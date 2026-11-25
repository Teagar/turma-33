/*
 * Gabarito — Exercício 09: Construindo o map na Mão
 * Nível 3 — Intermediário
 */

const valores = [4, 10, 20, 50];

function transformar(lista, fn) {
  const nova = [];
  for (let i = 0; i < lista.length; i++) {
    nova.push(fn(lista[i])); // guarda o que o callback DEVOLVER
  }
  return nova;
}

console.log(transformar(valores, (valor) => valor / 2));     // a) metade
console.log(transformar(valores, (valor) => valor ** 2));    // b) ao quadrado
console.log(transformar(valores, (valor) => `R$ ${valor}`)); // c) texto

// Com o map pronto: mesmo resultado do item (a)
console.log(valores.map((valor) => valor / 2));
