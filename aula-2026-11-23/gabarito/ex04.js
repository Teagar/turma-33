/*
 * Gabarito — Exercício 04: Três Formas de Escrever um Callback: Entrega de Encomendas
 * Nível 1 — Iniciante
 */

function entregarEncomenda(pacote, avisar) {
  console.log(`Saiu para entrega: ${pacote}`);
  avisar(pacote);
}

// a) função nomeada, criada fora
function entregarNaPortaria(pacote) {
  console.log(`${pacote} entregue na portaria`);
}
entregarEncomenda("livro", entregarNaPortaria);

// b) função anônima, direto no argumento
entregarEncomenda("celular", function (pacote) {
  console.log(`${pacote} entregue em mãos`);
});

// c) arrow function, direto no argumento
entregarEncomenda("tênis", (pacote) => console.log(`${pacote} deixado com o vizinho`));
