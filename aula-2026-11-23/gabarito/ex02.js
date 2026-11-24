/*
 * Gabarito — Exercício 02: Caça ao Erro: Os Parênteses do Callback
 * Nível 1 — Iniciante
 */

function mostrarMensagem() {
  console.log("2 - Callback executado!");
}

function executar(fn) {
  console.log("1 - Antes do callback");
  fn();
  console.log("3 - Depois do callback");
}

executar(mostrarMensagem);

// Por que deu erro:
// Com executar(mostrarMensagem()), os parênteses EXECUTAM a mostrarMensagem
// na hora, antes de entrar no executar. Por isso o "2" aparecia primeiro.
// Como mostrarMensagem não tem return, ela devolve undefined, e o executar
// recebia undefined no parâmetro fn. Na linha fn(), o JavaScript tentava
// executar undefined: "TypeError: fn is not a function".
// Para entregar uma função como callback, passamos só o NOME, sem parênteses.
