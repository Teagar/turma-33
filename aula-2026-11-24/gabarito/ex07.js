/*
 * Gabarito — Exercício 07: Conversor de Temperatura
 * Nível 2 — Básico
 */

const celsius = [0, 25, 30, 100];

const fahrenheit = celsius.map((c) => c * 9 / 5 + 32);
console.log(fahrenheit);

// fahrenheit[indice] é a temperatura convertida da MESMA posição
celsius.forEach((c, indice) => console.log(`${c}°C = ${fahrenheit[indice]}°F`));
