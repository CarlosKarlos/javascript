

  // Função para verificar a opção selecionada
  function verificarGenero() {
   
    var selectGenero = document.getElementById("genero");
    // Obtém o valor da opção selecionada
    var generoSelecionado = selectGenero.value;

    // Verifica o valor selecionado e faz suas ações
    if (generoSelecionado === "homem") {
      console.log("Usuário selecionou Homem");
      // Faça algo quando o usuário selecionar "Homem"
    } else if (generoSelecionado === "mulher") {
      console.log("Usuário selecionou Mulher");
      // Faça algo quando o usuário selecionar "Mulher"
    } else {
      console.log("Nenhuma opção selecionada");
      // Faça algo quando nenhuma opção for selecionada
    }
  }

