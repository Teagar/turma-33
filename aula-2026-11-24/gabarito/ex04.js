/*
 * Gabarito — Exercício 04: Caça ao Erro: O map que Devolve undefined
 * Nível 1 — Iniciante
 */

const idades = [15, 17, 30, 52];

// Por que apareceu undefined?
// Com chaves, a arrow function perde o retorno implícito. Ela calcula
// idade + 10, mas não devolve nada, então devolve undefined. O map guarda
// esse undefined no array novo, uma vez para cada idade.

// a) mantendo as chaves: escreva o return
const daqui10Anos = idades.map((idade) => { return idade + 10; });
console.log(daqui10Anos);

// b) tirando as chaves: o retorno é implícito
const daqui10AnosSemChaves = idades.map((idade) => idade + 10);
console.log(daqui10AnosSemChaves);
