/*
 * Exercício 10 — Nota Fiscal do Mercadinho
 * Nível 3 — Intermediário
 *
 * Enunciado:
 * Os arrays produtos, precos e quantidades andam juntos: o produto do
 * índice 0 custa precos[0] e foram comprados quantidades[0] dele.
 * 1. Com map no array precos, crie o array subtotais, em que cada item é
 *    o preço multiplicado pela quantidade do MESMO índice.
 * 2. Com forEach no array produtos, mostre uma linha por produto no
 *    formato "2x Arroz = R$ 50".
 * 3. Com forEach no array subtotais, some tudo em uma variável total e
 *    mostre "Total: R$ 87".
 *
 * Saída esperada:
 *   [ 50, 12, 25 ]
 *   2x Arroz = R$ 50
 *   3x Leite = R$ 12
 *   1x Café = R$ 25
 *   Total: R$ 87
 *
 * Restrições:
 * - Use map e forEach (sem for).
 * - Dica: além do item, o callback recebe o índice. Use esse índice para
 *   buscar o valor certo nos outros arrays.
 */

const produtos = ["Arroz", "Leite", "Café"];
const precos = [25, 4, 25];
const quantidades = [2, 3, 1];

// Escreva seu código abaixo:
