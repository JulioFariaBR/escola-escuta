
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
    fetch('https://api.sheetmonkey.io/form/kKPTKSB9UMuEkVqk791zwG', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dados)
    })
}