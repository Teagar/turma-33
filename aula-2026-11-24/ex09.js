/*
 * Exercício 09 — Construindo o map na Mão
 * Nível 3 — Intermediário
 *
 * Enunciado:
 * 1. Sem olhar a aula, crie uma função chamada transformar que receba
 *    lista (um array) e fn (callback).
 * 2. Dentro dela:
 *    - crie um array vazio chamado nova;
 *    - com um for, percorra a lista e, para cada item, adicione em nova
 *      (com push) o que o fn DEVOLVER;
 *    - devolva nova com return.
 * 3. Usando o array valores abaixo, invoque transformar três vezes e mostre
 *    cada resultado:
 *    a) a metade de cada valor;
 *    b) cada valor ao quadrado;
 *    c) o texto "R$ " antes de cada valor.
 * 4. Por fim, faça o item (a) de novo usando o map pronto, para comparar.
 *
 * Saída esperada:
 *   [ 2, 5, 10, 25 ]
 *   [ 16, 100, 400, 2500 ]
 *   [ 'R$ 4', 'R$ 10', 'R$ 20', 'R$ 50' ]
 *   [ 2, 5, 10, 25 ]
 *
 * Restrições:
 * - Na função transformar, não use map (é ela que vai fazer o papel dele!).
 */

const valores = [4, 10, 20, 50];

// Escreva seu código abaixo:
