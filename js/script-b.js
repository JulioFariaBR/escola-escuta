
function tratarDados() {
    if (dados.nome == '') {
        dados.nome = 'Anônimo';
    }
    if (dados.email == '') {
        dados.email = 'Anônimo';
    }
}

function bancoDeDados(dados) {
    tratarDados()
    console.log(JSON.stringify(dados));
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: JSON.stringify(dados)
    })
      .then(() => navigate("/"))
      .catch(error => alert(error));
}