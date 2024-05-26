const script_do_google = 'https://script.google.com/macros/s/AKfycbyJVIliOevidclzv3C4auzu0yofe0R8Wk3VjGjT65wqMgEhAsF1EO5UNFBemtSeBwSe/exec';
const dados_do_formulario = {
    nome: 'Anônimo',
    email: 'Anônimo',
    tipo: 'Teste',
    msn: 'Mensagem sem criatidade',
};

function bancoDeDados() {
    fetch(script_do_google, {method: 'POST', body: JSON.stringify(dados_do_formulario)})
    .then(response => {
        alert("OK")
    })
    .catch(error =>
        console.error(error)
    )
}