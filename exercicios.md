# Lista de Exercícios: Introdução ao JavaScript no Navegador

Esta lista de 10 exercícios nivelados foi criada com base estritamente no conteúdo da aula de JavaScript, manipulação de DOM e eventos ministrada pelo professor para servir como prática e fixação do conteúdo.

---

### Conceitos Básicos, Variáveis e Concatenação

1. **Declaração de Variável:** 
   * Crie uma variável chamada `idade` utilizando a palavra-chave correta aprendida na aula (`let`). Atribua a ela o valor da sua idade e exiba o resultado no console utilizando `console.log()`.

2. **Reatribuição de Valor:** 
   * Declare uma variável chamada `curso` com o valor inicial `"PHP"`. Em seguida, altere o valor dessa mesma variável para `"JavaScript"` sem utilizar a palavra `let` novamente, provando que você entendeu a forma correta de reatribuir valores.

3. **Template Strings:** 
   * Crie duas variáveis: `nome` (com o seu primeiro nome) e `sobrenome` (com o seu último nome). Utilize **template strings** (com crases) para juntá-las em uma nova variável chamada `nomeCompleto` e exiba o resultado no console.

---

### Funções e Manipulação do DOM

4. **Criando uma Função Simples:** 
   * Escreva uma função chamada `saudacao` que receba um parâmetro chamado `nomePessoa`. Dentro dela, utilize um `console.log` com template string para imprimir `"Olá, [nomePessoa]!"`. Invoque a função passando o seu nome.

5. **Função com Múltiplos Parâmetros:** 
   * Crie uma função chamada `somaIdades` que receba dois parâmetros (`idade1` e `idade2`). Faça com que ela exiba no console a soma dessas duas idades formatada em uma frase.

6. **Selecionando Elementos por ID (`getElementById`):** 
   * No seu arquivo HTML, adicione uma tag `<h1>` com o ID `titulo-principal`. No bloco de script JavaScript, crie uma constante que capture esse elemento utilizando `document.getElementById('titulo-principal')` e exiba-a no console.

7. **Alterando Conteúdo com `innerHTML`:** 
   * Utilizando a mesma lógica da aula, crie uma condicional baseada em uma variável numérica `hora`. Se a `hora` for menor que 12, altere o `innerHTML` de um elemento de status para `"Bom dia!"`; caso contrário, altere para `"Boa tarde!"`.

---

### Eventos, Formulários e Validações

8. **Ouvindo Eventos (`addEventListener`):** 
   * Crie um formulário simples em HTML com o ID `form-teste` e um botão de envio (`submit`). No JavaScript, selecione esse formulário, adicione um ouvinte de evento (`addEventListener`) para o evento `'submit'` e faça com que a página **não recarregue** utilizando o método `e.preventDefault()`.

9. **Validação de Campo Vazio (`.trim()`):** 
   * Dentro do evento de `submit` do exercício anterior, capture o valor digitado em um input de texto (com ID `campo-texto`). Utilize o método `.trim()` para remover espaços indesejados e crie uma validação `if`: se o texto estiver vazio (`""`), exiba um alerta na tela (`alert`) avisando para preencher o campo.

10. **Manipulação Dinâmica Completa:** 
    * Integre todos os conceitos: ao enviar o formulário preenchido corretamente (sem estar vazio), altere o texto de um elemento `<h3>` (com ID `status-envio`) para `"Enviado com sucesso por [Nome digitado no input]!"` utilizando o `innerHTML` e o valor capturado do input.
