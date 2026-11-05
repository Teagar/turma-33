Aqui está um resumo detalhado e muito explicativo da aula, ideal para os alunos usarem como guia de consulta rápida e estudos:

---

# Guia de Consulta: Introdução ao JavaScript no Navegador & Mini CRUD

## 1. O que é o JavaScript?

O **JavaScript** é uma linguagem de programação executada do **lado do cliente** (no navegador web de quem está acessando o site), diferentemente do PHP, que roda no **lado do servidor** (back-end).

* **Função principal:** Adicionar interatividade, dinamismo, validações locais e manipulação de elementos diretamente na página sem precisar recarregar o servidor.



---

## 2. Inserindo JavaScript no HTML

Como boa prática para garantir que os elementos da página já estejam carregados, o código JavaScript é inserido dentro de uma tag `<script>` logo antes do fechamento da tag `</body>`:

```html
<body>
  <!-- Seus elementos HTML aqui -->
  <script>
    // Seu código JavaScript aqui
  </script>
</body>

```

---

## 3. Variáveis e Constantes

Para armazenar dados temporariamente na memória, utilizamos:

* **`let`**: Declara variáveis cujos valores **podem** ser modificados posteriormente. O `let` é usado **apenas na criação**. Para alterar o valor depois, basta chamá-la pelo nome:


```javascript
let nome = "Thiago"; // Criação
nome = "Wagner";     // Modificação correta

```


* **`const`**: Declara **constantes**, ou seja, valores que não podem ser alterados após a sua criação inicial.

---

## 4. Concatenação de Strings e Template Strings

* **Concatenação comum (com operador `+`):**
```javascript
let nomeCompleto = nome + " " + sobrenome;

```


* **Template Strings (com crases ```):** Forma mais limpa de misturar textos e variáveis utilizando `${}`:
```javascript
let nomeCompleto = `${nome} ${sobrenome}`;

```



---

## 5. Funções e Parâmetros

Permiten encapsular blocos de código reutilizáveis:

```javascript
function saudacao(nomePessoa) {
  console.log(`Olá, ${nomePessoa}!`);
}

// Invocando a função:
saudacao("Thiago");

```

---

## 6. Manipulação do DOM (O Objeto `document`)

O navegador enxerga o documento HTML como um objeto global chamado **`document`**.

* **Buscando elementos por ID:**
```javascript
const titulo = document.getElementById('titulo');

```


* **Alterando o conteúdo interno (`innerHTML`):** Modifica o texto ou estrutura de uma tag dinamicamente:


```javascript
titulo.innerHTML = "Bem-vindo ao Sistema!";

```



---

## 7. Eventos de Formulário (`submit` vs. `click`)

Sempre prefira escutar o evento de **`submit`** no formulário em vez do `click` no botão.

* **Por quê?** O `submit` permite que a validação funcione tanto ao clicar no botão quanto ao apertar a tecla **Enter** no teclado.
* **O `e.preventDefault()`:** Interrompe o comportamento padrão do navegador (evitando que a página recarregue antes da validação).


* **O `.trim()`:** Remove espaços em branco desnecessários antes e depois de um texto digitado.



---

## 8. Projeto Prático: Mini CRUD na Memória (Sem Banco de Dados)

Este projeto prático uniu todos os conceitos da aula em um sistema funcional de cadastro gerenciado por um **Array** (vetor) na memória do navegador:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Mini CRUD - Cadastro de Pessoas</title>
</head>
<body>
  <h1 id="titulo">Sistema de Cadastro</h1>
  <h3 id="status">Aguardando novo cadastro...</h3>

  <!-- Formulário de Cadastro -->
  <form id="form-cadastro">
    <label>Nome:</label>
    <input type="text" id="campo-nome" placeholder="Digite o nome...">
    <br><br>
    <label>Idade:</label>
    <input type="number" id="campo-idade" placeholder="Digite a idade...">
    <br><br>
    <input type="submit" value="Cadastrar">
  </form>

  <h2>Lista de Cadastrados:</h2>
  <ul id="lista-pessoas">
    <!-- Os itens cadastrados aparecerão aqui via JavaScript -->
  </ul>

  <script>
    // 1. "Banco de dados" temporário na memória (Array)
    let pessoas = [];

    // 2. Ouve o evento de envio do formulário
    document.getElementById('form-cadastro').addEventListener('submit', function(e) {
      e.preventDefault(); // Impede o recarregamento da página

      // Captura os valores e limpa espaços com .trim()
      const nomeInput = document.getElementById('campo-nome').value.trim();
      const idadeInput = document.getElementById('campo-idade').value;

      // Validação: verifica se o nome está vazio
      if (nomeInput === "") {
        alert("Por favor, preencha o campo de nome!");
        return;
      }

      // 3. CREATE: Cria o objeto e adiciona ao array
      const novaPessoa = {
        nome: nomeInput,
        idade: idadeInput
      };
      pessoas.push(novaPessoa);

      // Atualiza a mensagem de status na tela
      document.getElementById('status').innerHTML = `Cadastro de ${nomeInput} realizado com sucesso!`;

      // 4. READ & DOM: Varre o array e redesenha a lista na tela
      let htmlLista = "";
      for (let i = 0; i < pessoas.length; i++) {
        htmlLista += `<li><strong>${pessoas[i].nome}</strong> - ${pessoas[i].idade} anos</li>`;
      }
      document.getElementById('lista-pessoas').innerHTML = htmlLista;

      // 5. Limpa os campos do formulário
      document.getElementById('campo-nome').value = "";
      document.getElementById('campo-idade').value = "";
    });
  </script>
</body>
</html>

```
