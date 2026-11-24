/*
 * Gabarito — Exercício 03: Callback que Recebe um Valor: Cadastro de Aluno
 * Nível 1 — Iniciante
 */

function cadastrarAluno(nome, avisar) {
  console.log(`Cadastrando ${nome}...`);
  avisar(nome);
}

function enviarBoasVindas(aluno) {
  console.log(`${aluno}, seja bem-vindo(a) à Coude!`);
}

cadastrarAluno("Luma", enviarBoasVindas);
cadastrarAluno("Davi", enviarBoasVindas);
