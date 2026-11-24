/*
 * Gabarito — Exercício 06: Callback que Devolve um Valor: Transformando Números
 * Nível 2 — Básico
 */

function aplicar(numero, operacao) {
  return operacao(numero);
}

console.log(aplicar(7, (n) => n * 2));  // dobro
console.log(aplicar(7, (n) => n * 3));  // triplo
console.log(aplicar(7, (n) => n ** 2)); // quadrado
console.log(aplicar(7, (n) => n / 2));  // metade
