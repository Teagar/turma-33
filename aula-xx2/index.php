<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Mini Crud - Cadastro de Pessoas</title>

</head>
<body>
  <h1 id='titulo'>Sistema de Cadastro</h1>
  <h3 id='status'>Aguardando novo cadastro...</h3>

  <form id="form-cadastro">
    <label>Nome:</label>
    <input type="text" id="campo-nome" placeholder="Digite o nome...">
    <br>
    <label>Idade:</label>
    <input type="number" id="campo-idade" placeholder="Digite a idade...">
    <br>
    <input type="submit" value="Cadastrar">
  </form>

  <h2>Lista de Cadastrados:</h2>
  <ul id="lista-pessoas">
    <!-- Os itens cadastrados aparecerao aqui via JS -->
  </ul>

  <script>
    // Nosso "banco de dados" temporario
    let pessoas = [];


    document.getElementById('form-cadastro').addEventListener('submit', function(e) {
      e.preventDefault();


      // Caputra os valores dos inputs e remove espaços vazios excedentes com o .trim()
      const nomeInput = document.getElementById('campo-nome').value.trim();
      const idadeInput = document.getElementById('campo-idade').value;

      if (nomeInput == "") {
        alert("Por favor, preencha o campo de nome!");
        return;
      }

      // 1. CREATE: Criamos um objeto e jogamos no array
      const novaPessoa = {
        nome: nomeInput,
        idade: idadeInput
      }

      pessoas.push(novaPessoa);

      // Atualiza a mensagem de status na tela
      document.getElementById('status').innerHTML = `Cadastro de ${nomeInput} realizado com sucesso!`;

      // 2. READ: Varremos o array e redesenhamos a lista no HTML
      let htmlLista = "";
      for (let i = 0; i < pessoas.length; i++) {
        htmlLista += `<li>${pessoas[i].nome} - ${pessoas[i].idade} anos</li>`;
      }

      document.getElementById('lista-pessoas').innerHTML = htmlLista;

      // Limpa os campos do formulario para o proximo cadastro
      document.getElementById('campo-nome').value = "";
      document.getElementById('campo-idade').value = "";
    })
    
  </script>
</body>
</html>
