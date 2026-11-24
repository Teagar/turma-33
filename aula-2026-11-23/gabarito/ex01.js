/*
 * Gabarito — Exercício 01: Minha Primeira Função de Callback
 * Nível 1 — Iniciante
 */

function executarTarefa(tarefa) {
  console.log("Iniciando a tarefa...");
  tarefa();
  console.log("Tarefa concluída!");
}

function lavarLouca() {
  console.log("Lavando a louça...");
}

executarTarefa(lavarLouca);
