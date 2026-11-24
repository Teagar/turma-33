// =====================================================================
// Aula de 23/11/2026 — Callbacks em JavaScript
// Todo o código mostrado em aula, na ordem. Para rodar:
//   node aula-2026-11-23/aula.js
// =====================================================================


// ---------------------------------------------------------------------
// 1. Aquecimento: uma função que mostra um alerta, invocada 5 vezes
// ---------------------------------------------------------------------
// O alert() só existe no NAVEGADOR. No terminal (node), ele não existe,
// por isso deixamos comentado aqui. Para testar, cole no console do navegador.
//
// function alertaCoude() {
//   alert("Bem-vindo à Coude!");
// }
//
// alertaCoude();
// alertaCoude();
// alertaCoude();
// alertaCoude();
// alertaCoude();


// ---------------------------------------------------------------------
// 2. Revisão: variáveis (PHP × JavaScript)
// ---------------------------------------------------------------------
// PHP:  $idade = 20;     echo $idade;     $idade = 25;
// JS:   let idade = 20;  console.log(idade);  idade = 25;
let idade = 20;      // let só na CRIAÇÃO
console.log(idade);  // 20
idade = 25;          // para mudar o valor, só o nome
console.log(idade);  // 25

// Aspas simples e duplas NÃO juntam texto com variável no JS:
console.log("idade");                    // idade (o texto, não a variável)
console.log(`Tenho ${idade} anos`);      // Tenho 25 anos (template string)


// ---------------------------------------------------------------------
// 3. Degrau 1: entregar uma função para outra executar
// ---------------------------------------------------------------------
function executar(fn) {
  console.log("1 - Entrei no executar");
  fn(); // quem executa o callback é o executar, nesta linha
  console.log("3 - Saí do executar");
}

function dizerOi() {
  console.log("2 - Oi!");
}

executar(dizerOi); // SEM parênteses: entrego a função, não executo

// executar(dizerOi());
// ↑ ERRADO: os parênteses executam o dizerOi ANTES (aparece "2 - Oi!" primeiro),
//   ele devolve undefined e o executar recebe undefined no lugar da função:
//   TypeError: fn is not a function


// ---------------------------------------------------------------------
// 4. Degrau 2: o callback recebe um valor
// ---------------------------------------------------------------------
function processarPedido(prato, avisar) {
  console.log(`Preparando ${prato}...`);
  avisar(prato); // o parâmetro avisar RECEBE a função passada como argumento
}

// Forma 1: função nomeada, criada fora
function avisarCliente(item) {
  console.log(`${item} pronto! Pode buscar.`);
}
processarPedido("macarrão", avisarCliente);

// Forma 2: função anônima, criada direto no argumento
processarPedido("pizza", function (item) {
  console.log(`Embalar ${item} para viagem`);
});

// Forma 3: arrow function (os parênteses no parâmetro são opcionais com 1 parâmetro)
processarPedido("lasanha", (item) => console.log(`Entregar ${item} na mesa 4`));


// ---------------------------------------------------------------------
// 5. Exercício feito em aula: notas fiscais
// ---------------------------------------------------------------------
function processarNota(produto, avisar) {
  console.log(`Processando a nota do produto ${produto}...`);
  avisar(produto);
}

// Forma 1: callback nomeado
function emitir(item) {
  console.log(`${item} foi emitido com sucesso!`);
}
processarNota("computador", emitir);

// Forma 2: callback anônimo
processarNota("computador", function (item) {
  console.log(`${item} foi apagado com sucesso!`);
});

// Forma 3: callback com arrow function
processarNota("computador", (item) => console.log(`${item} falhou na hora de processar. Tente novamente.`));


// ---------------------------------------------------------------------
// 6. Revisão: return
// ---------------------------------------------------------------------
function dobro(numero) {
  return numero * 2;
}

dobro(20);              // devolve 40, mas não mostra nada
console.log(dobro(20)); // 40 (para ver, precisa do console.log)


// ---------------------------------------------------------------------
// 7. Degrau 3: o callback devolve um valor
// ---------------------------------------------------------------------
function calcular(a, b, operacao) {
  return operacao(a, b);
}

console.log(calcular(20, 30, (x, y) => x + y)); // 50
console.log(calcular(20, 30, (x, y) => x - y)); // -10
console.log(calcular(20, 30, (x, y) => x / y)); // 0.6666666666666666


// ---------------------------------------------------------------------
// 8. Exercícios resolvidos em aula
// ---------------------------------------------------------------------

// 8.1 repetir(vezes, fn): chama fn "vezes" vezes, passando o número da vez
function repetir(vezes, fn) {
  for (let i = 1; i <= vezes; i++) {
    fn(i);
  }
}
repetir(3, (n) => console.log(`Volta ${n}`)); // Volta 1, Volta 2, Volta 3

// 8.2 calcular com subtração, divisão e potência
console.log(calcular(10, 5, (x, y) => x - y));  // 5
console.log(calcular(10, 5, (x, y) => x / y));  // 2
console.log(calcular(2, 3, (x, y) => x ** y));  // 8

// 8.3 cumprimentar(nome, formatar)
function cumprimentar(nome, formatar) {
  console.log(`Olá, ${formatar(nome)}!`);
}
cumprimentar("Ana", (nome) => nome.toUpperCase()); // Olá, ANA!
cumprimentar("Ana", (nome) => `Sra. ${nome}`);     // Olá, Sra. Ana!
