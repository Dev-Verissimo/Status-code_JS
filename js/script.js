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

  promessa.catch(tratarErro);
}

function tratarErro(e) {
  console.log(e, "erroooo");
  if (e.response.status === 409) {
    e.response.message = "Esse Título já existe";
    alteraImagem(409);
    console.log(e.response.message);
  } else if (e.response.status === 422) {
    e.response.message =
      "ingredientes ou modo de preparo com menos de 10 caracteres";
    alteraImagem(422);
  }
}

function alteraImagem(status) {
  let imagem = document.querySelector(".imagem-erro img");
  imagem.setAttribute("src", "img/" + status + ".jpg");
  console.log(imagem);
}

function receitaCadastradaComSucesso() {
  alert("Receita cadastrada com sucesso!");
}
