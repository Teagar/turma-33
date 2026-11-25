/*
 * Gabarito — Exercício 08: Pódio da Corrida
 * Nível 2 — Básico
 */

const chegada = ["Lia", "Rafa", "Téo", "Bia"];

// O map também recebe (item, indice), igual ao forEach
const podio = chegada.map((corredor, indice) => `${indice + 1}º lugar: ${corredor}`);

podio.forEach((texto) => console.log(texto));
