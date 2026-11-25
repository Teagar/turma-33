/*
 * Gabarito — Exercício 03: Tabuada do 5 com map
 * Nível 1 — Iniciante
 */

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// O map cria um array NOVO com o que o callback devolver
const tabuada5 = numeros.map((numero) => numero * 5);

console.log(tabuada5);
console.log(numeros); // o original continua igual
