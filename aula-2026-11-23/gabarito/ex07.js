/*
 * Gabarito — Exercício 07: Calculadora com Callbacks
 * Nível 2 — Básico
 */

function calcular(a, b, operacao) {
  return operacao(a, b);
}

function somar(x, y) {
  return x + y;
}

function subtrair(x, y) {
  return x - y;
}

function multiplicar(x, y) {
  return x * y;
}

function dividir(x, y) {
  return x / y;
}

function resto(x, y) {
  return x % y;
}

const a = 17;
const b = 5;

console.log(`${a} + ${b} = ${calcular(a, b, somar)}`);
console.log(`${a} - ${b} = ${calcular(a, b, subtrair)}`);
console.log(`${a} * ${b} = ${calcular(a, b, multiplicar)}`);
console.log(`${a} / ${b} = ${calcular(a, b, dividir)}`);
console.log(`${a} % ${b} = ${calcular(a, b, resto)}`);
