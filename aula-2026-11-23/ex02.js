/*
 * Exercício 02 — Caça ao Erro: Os Parênteses do Callback
 * Nível 1 — Iniciante
 *
 * Enunciado:
 * O código abaixo deveria mostrar 1, 2 e 3, nessa ordem, mas dá erro.
 * 1. Rode o arquivo (node aula-2026-11-23/ex02.js) e leia a mensagem de erro.
 * 2. Repare em qual número aparece PRIMEIRO no console antes do erro.
 * 3. Escreva, em um comentário, POR QUE isso acontece.
 * 4. Corrija a última linha para que a saída fique certa.
 *
 * Saída esperada (depois de corrigir):
 *   1 - Antes do callback
 *   2 - Callback executado!
 *   3 - Depois do callback
 *
 * Restrições:
 * - Altere apenas a última linha.
 */

function mostrarMensagem() {
  console.log("2 - Callback executado!");
}

function executar(fn) {
  console.log("1 - Antes do callback");
  fn();
  console.log("3 - Depois do callback");
}

executar(mostrarMensagem());

// Escreva aqui por que deu erro:

