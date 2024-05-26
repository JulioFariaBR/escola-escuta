
function bancoDeDados(dados) {
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