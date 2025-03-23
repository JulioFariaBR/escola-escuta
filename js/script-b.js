
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
    fetch("https://sclserver.onrender.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados),
      })
        .then((response) => response.json())
        .then((data) => console.log("Sucesso:", data))
        .catch((error) => console.error("Erro:", error));
}