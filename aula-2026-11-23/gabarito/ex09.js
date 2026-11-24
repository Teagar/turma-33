/*
 * Gabarito — Exercício 09: Contagem Regressiva
 * Nível 3 — Intermediário
 */

function contagemRegressiva(inicio, aoTerminar) {
  for (let i = inicio; i >= 1; i--) {
    console.log(i);
  }
  aoTerminar();
}

contagemRegressiva(5, () => console.log("Feliz Ano Novo!"));
contagemRegressiva(3, () => console.log("Foguete lançado!"));
