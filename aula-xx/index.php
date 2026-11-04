<!DOCTYPE html>
<html>
<head>
  <title>JavaScript</title>
  <meta charset="UTF-8">
</head>
<body>
  <h1 id="titulo">Validação no Navegador</h1>
  <h3 id="status">Aguardando interação...</h3>
  
  <form id="meu-form">
    <label>Seu Nome:</label>
    <input type="text" id="campo-nome">
    <input type="submit" value="Validar">
  </form>

  <script>

const titulo = document.getElementById('titulo');
const sub_titulo = document.getElementById('status');

let idade = 17;

if (idade <= 16) {
  titulo.innerHTML = "VOCÊ É MENOR DE IDADE";
  sub_titulo.innerHTML = "[SEM ACESSO]";
} else {
  titulo.innerHTML = "BEM VINDO";
  sub_titulo.innerHTML = "Sua aplicação está pronta para ser usada";
}


/*
  // 1. Capturar o formulário pelo ID e ouvimos o evento de envio (submit)
  document.getElementById('meu-form').addEventListener('submit', function(e) {

    // 2. Pegamos o valor digitado no input
    const input_nome = document.getElementById('campo-nome').value;


    if (input_nome.trim() == "") {
      alert("Preencha o campo antes de enviar!");
      e.preventDefault(); // Interromper o envio para o servidor
    } else {
      document.getElementById('status').innerHTML = "Validado com sucesso!";
    }
  })
    

 */
// ===================================================/
    /* let nome = "Thiago"; */
    /* let sobrenome = "Bastos"; */
    /* let idade = 20; */
    /**/
    /* let nome_completo = nome + " " + sobrenome; */
    /* let nome_completo = `${nome} ${sobrenome}`; */
    /**/
    /* function mostrar(valor, valor2) { */
    /*   console.log(`Olá, ${valor} ${valor2}`); */
    /* } */
    /**/
    /* mostrar("Thiago", "Bastos"); */
    /* mostrar("Wagner", "Moura"); */

  </script>
</body>
</html>
