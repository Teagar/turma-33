/*
 * Exercício 05 — Formas de Pagamento
 * Nível 2 — Básico
 *
 * Enunciado:
 * (Parecido com o exercício das notas fiscais feito em aula.)
 * 1. Crie a função principal processarPagamento, que recebe valor e pagar.
 *    Ela mostra "Processando pagamento de R$ <valor>..." e executa pagar(valor).
 * 2. Crie TRÊS funções de callback, cada uma recebendo o valor:
 *    - pagarNoPix:    "Pix de R$ <valor> recebido na hora!"
 *    - pagarNoCartao: "Cartão aprovado: R$ <valor> em 1x"
 *    - pagarNoBoleto: "Boleto de R$ <valor> gerado. Vence em 3 dias."
 * 3. Invoque processarPagamento uma vez com cada callback
 *    (use valores diferentes: 50, 120 e 89.90).
 *
 * Saída esperada:
 *   Processando pagamento de R$ 50...
 *   Pix de R$ 50 recebido na hora!
 *   Processando pagamento de R$ 120...
 *   Cartão aprovado: R$ 120 em 1x
 *   Processando pagamento de R$ 89.9...
 *   Boleto de R$ 89.9 gerado. Vence em 3 dias.
 *
 * Restrições:
 * - A função processarPagamento não pode ter if: quem decide a mensagem é o callback.
 */

// Escreva seu código abaixo:

