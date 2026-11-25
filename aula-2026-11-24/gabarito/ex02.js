/*
 * Gabarito — Exercício 02: Caça ao Erro: A Pegadinha do ++
 * Nível 1 — Iniciante
 */

const tarefas = ["Estudar para a prova", "Lavar a louça", "Fazer os exercícios de JavaScript"];

// Por que começou em 0?
// O indice++ (com o ++ DEPOIS) usa o valor atual do indice e só depois soma 1.
// Na primeira volta, o indice é 0: ele mostra 0 e só então vira 1, tarde demais.
// Com ++indice (++ ANTES), ele soma primeiro e depois mostra. Mas o mais claro
// é indice + 1, que só calcula e não muda a variável.

tarefas.forEach((tarefa, indice) => console.log(`${indice + 1}. ${tarefa}`));
