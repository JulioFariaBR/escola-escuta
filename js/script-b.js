
function tratarDados() {
    if (dados.nome == '') {
        dados.nome = 'Anônimo';
    } else if (dados.email == '') {
        dados.email = 'Anônimo';
    }
}

function bancoDeDados(dados) {
    tratarDados()
    console.log(JSON.stringify(dados));
    fetch('https://api.sheetmonkey.io/form/dpBmKDGqGB4AMBGQ8MHGep', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dados)
    })
}