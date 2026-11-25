/*
 * Exercício 04 — Caça ao Erro: O map que Devolve undefined
 * Nível 1 — Iniciante
 *
 * Enunciado:
 * O código abaixo deveria criar um array com as idades daqui a 10 anos,
 * mas aparece um array cheio de undefined.
 * 1. Rode o arquivo (node aula-2026-11-24/ex04.js) e veja a saída.
 * 2. Escreva, em um comentário, POR QUE isso acontece.
 * 3. Corrija o código de DUAS formas:
 *    a) mantendo as chaves;
 *    b) tirando as chaves.
 *
 * Saída esperada (depois de corrigir, em cada uma das formas):
 *   [ 25, 27, 40, 62 ]
 *
 * Restrições:
 * - Continue usando map.
 */

const idades = [15, 17, 30, 52];

const daqui10Anos = idades.map((idade) => { idade + 10; });

console.log(daqui10Anos);

// Escreva aqui por que apareceu undefined:

