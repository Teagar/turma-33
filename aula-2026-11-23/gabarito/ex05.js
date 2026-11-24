/*
 * Gabarito — Exercício 05: Formas de Pagamento
 * Nível 2 — Básico
 */

function processarPagamento(valor, pagar) {
  console.log(`Processando pagamento de R$ ${valor}...`);
  pagar(valor);
}

function pagarNoPix(valor) {
  console.log(`Pix de R$ ${valor} recebido na hora!`);
}

function pagarNoCartao(valor) {
  console.log(`Cartão aprovado: R$ ${valor} em 1x`);
}

function pagarNoBoleto(valor) {
  console.log(`Boleto de R$ ${valor} gerado. Vence em 3 dias.`);
}

processarPagamento(50, pagarNoPix);
processarPagamento(120, pagarNoCartao);
processarPagamento(89.90, pagarNoBoleto);
