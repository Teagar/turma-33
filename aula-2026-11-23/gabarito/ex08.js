/*
 * Gabarito — Exercício 08: Formatando Textos
 * Nível 2 — Básico
 */

const frase = "  JavaScript é Legal  ";

function formatarTexto(texto, formatador) {
  return formatador(texto);
}

console.log(formatarTexto(frase, (t) => t.toUpperCase()));
console.log(formatarTexto(frase, (t) => t.toLowerCase()));
console.log(formatarTexto(frase, (t) => t.trim()));
console.log(formatarTexto(frase, (t) => `>>> ${t.trim()} <<<`));
console.log(formatarTexto(frase, (t) => t.trim().length));
