let condition


const infos = [
    {
        log: 'ADM001',
        pin: 'ADMJulioFaria001#',
    },
    {
        log: 'ADM002',
        pin: 'ADMLaraAmorim002#',
    },
    {
        log: 'ADM003',
        pin: 'ADMLuciaMaldonado003#',
    },
]

function realizarLogin() {
    condition = false
    infos.forEach((e) => {
        if (condition == false) {
            console.log(e, e.log, e.pin, e.log == document.querySelector('#login').value && e.pin == document.querySelector('#pass').value);
            if (e.log == document.querySelector('#login').value && e.pin == document.querySelector('#pass').value) {
                document.querySelector('#main').innerHTML = `<table><thead><tr class="titulos"><th scope="col">Nome</th><th scope="col">E-mail</th><th scope="col">Tipo</th><th scope="col">Mensagem</th><th scope="col"></th></tr></thead><tbody id="canva-table"></tbody></table>`
                busca();
            }
        }
    })
}
