/*
 * Gabarito — Exercício 06: Gerando E-mails com map
 * Nível 2 — Básico
 */

const nomes = ["Ana", "BRUNO", "Carla"];

const emails = nomes.map((nome) => `${nome.toLowerCase()}@coude.com.br`);

console.log(emails);
