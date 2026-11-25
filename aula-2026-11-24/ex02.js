/*
 * Exercício 02 — Caça ao Erro: A Pegadinha do ++
 * Nível 1 — Iniciante
 *
 * Enunciado:
 * O código abaixo deveria numerar as tarefas a partir de 1, mas começa em 0.
 * 1. Rode o arquivo (node aula-2026-11-24/ex02.js) e veja a saída.
 * 2. Escreva, em um comentário, POR QUE a numeração começa em 0.
 * 3. Corrija a última linha para que a saída fique certa.
 *
 * Saída esperada (depois de corrigir):
 *   1. Estudar para a prova
 *   2. Lavar a louça
 *   3. Fazer os exercícios de JavaScript
 *
 * Restrições:
 * - Altere apenas o que está dentro do ${ } da última linha.
 */

const tarefas = ["Estudar para a prova", "Lavar a louça", "Fazer os exercícios de JavaScript"];

tarefas.forEach((tarefa, indice) => console.log(`${indice++}. ${tarefa}`));

// Escreva aqui por que começou em 0:

