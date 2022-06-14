function inserirReceita() {
  const titulo = document.querySelector(".titulo-receita").value;
  const ingredientes = document.querySelector(".ingredientes-receita").value;
  const preparo = document.querySelector(".preparo-receita").value;

  const promessa = axios.post(
    "https://mock-api.driven.com.br/api/v2/tastecamp/receitas",
    {
      titulo: titulo,
      ingredientes: ingredientes,
      preparo: preparo
    }
  );

  promessa.then(receitaCadastradaComSucesso);
}

function receitaCadastradaComSucesso() {
  alert("Receita cadastrada com sucesso!");
}
