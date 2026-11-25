/*
 * Gabarito — Exercício 10: Nota Fiscal do Mercadinho
 * Nível 3 — Intermediário
 */

const produtos = ["Arroz", "Leite", "Café"];
const precos = [25, 4, 25];
const quantidades = [2, 3, 1];

// 1. preço × quantidade do MESMO índice
const subtotais = precos.map((preco, indice) => preco * quantidades[indice]);
console.log(subtotais);

// 2. uma linha por produto, buscando os outros dados pelo índice
produtos.forEach((produto, indice) => {
  console.log(`${quantidades[indice]}x ${produto} = R$ ${subtotais[indice]}`);
});

// 3. somando os subtotais
let total = 0;
subtotais.forEach((subtotal) => {
  total = total + subtotal;
});
console.log(`Total: R$ ${total}`);
