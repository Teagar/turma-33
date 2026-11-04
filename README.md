# Resumo de Aula: Introdução ao JavaScript no Navegador

## 1. O que é o JavaScript?

O **JavaScript** é uma linguagem de programação executada do **lado do cliente** (no navegador web do usuário), diferentemente de linguagens como o PHP, que rodam no **lado do servidor** (back-end). Sua principal função é adicionar interatividade, dinamismo, validações locais e manipulação de eventos em páginas web.

---

## 2. Inserindo JavaScript no HTML

O código JavaScript é inserido dentro de uma tag `<script>` colocada logo antes do fechamento da tag `</body>` no documento HTML:

```html
<body>
  <!-- Conteúdos e elementos da página -->
  <script>
    // Seu código JavaScript vem aqui
  </script>
</body>

```

---

## 3. Variáveis e Constantes

Para armazenar dados na memória, utilizamos palavras-chave específicas:

* **`let`**: Usada para declarar variáveis cujos valores **podem** ser modificados posteriormente no código.
* *Nota:* O `let` é utilizado **apenas na criação** da variável. Para alterá-la depois, basta chamá-la pelo nome:


```javascript
let nome = "Thiago"; // Criação
nome = "Wagner";     // Modificação correta

```


* **`const`**: Usada para declarar **constantes**, ou seja, valores que não podem ser alterados após a sua criação inicial.

---

## 4. Concatenação de Strings

Existem duas formas principais de unir textos (strings) no JavaScript:

1. **Operador aritmético de adição (`+`)**:
```javascript
let nome = "Thiago";
let sobrenome = "Bastos";
let nomeCompleto = nome + " " + sobrenome;

```


2. **Template Strings (com crases ```)**: Permite inserir variáveis diretamente dentro da string utilizando `${}`:
```javascript
let nomeCompleto = `${nome} ${sobrenome}`;

```



---

## 5. Funções

As funções servem para encapsular blocos de código reutilizáveis. Podemos passar parâmetros definindo-os entre parênteses:

```javascript
function mostrar(valor, valor2) {
  console.log(`Olá, ${valor} ${valor2}`);
}

// Invocando (chamando) a função:
mostrar("Thiago", "Bastos");
mostrar("Wagner", "Moura");

```

---

## 6. Manipulação do DOM (O Objeto `document`)

O navegador interpreta a página HTML como um objeto global chamado **`document`**. Com ele, conseguimos interagir com os elementos da página.

### A. Consultando Elementos por ID

Podemos buscar uma tag específica utilizando o método `getElementById`:

```javascript
const titulo = document.getElementById('titulo');

```

### B. Alterando o Conteúdo (`innerHTML`)

Podemos modificar dinamicamente o conteúdo interno de uma tag HTML utilizando a propriedade `innerHTML`:

```javascript
titulo.innerHTML = "BEM VINDO";

```

### C. Exemplo Prático de Condicional com Manipulação de DOM

```javascript
let idade = 17;

if (idade <= 16) {
  titulo.innerHTML = "VOCÊ É MENOR DE IDADE";
  sub_titulo.innerHTML = "[SEM ACESSO]";
} else {
  titulo.innerHTML = "BEM VINDO";
  sub_titulo.innerHTML = "Sua aplicação está pronta para ser usada";
}

```

---

## 7. Eventos e Validação de Formulários

Para escutar ações do usuário (como o envio de um formulário), utilizamos o método `addEventListener`:

```javascript
// 1. Capturar o formulário pelo ID e ouvir o evento de envio (submit)
document.getElementById('meu-form').addEventListener('submit', function(e) {

  // 2. Pegar o valor digitado no input removendo espaços desnecessários (.trim())
  const inputNome = document.getElementById('campo-nome').value.trim();

  // 3. Validação local
  if (inputNome === "") {
    alert("Preencha o campo antes de enviar!");
    e.preventDefault(); // Interrompe o envio padrão para o servidor
  } else {
    document.getElementById('status').innerHTML = "Validado com sucesso!";
  }
});

```

---

## 8. Ferramentas de Depuração

* **`console.log()`**: Utilizado para exibir informações e valores diretamente na aba **Console** das ferramentas de desenvolvedor (*DevTools*) do navegador, facilitando testes e acompanhamento de variáveis.
