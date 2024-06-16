let condition


const infos = [
    {
        log: 'ADM1JCSF',
        pin: 'ADMJulioF@1',
        name: 'JULIO CESAR SIQUEIRA FARIA'
    },
    {
        log: 'ADM2LM',
        pin: 'ADMLuciaM@2',
        name: 'LUCIA MALDONADO'
    },
    {
        log: 'ADM3LA',
        pin: 'ADMLeticiaA@3',
        name: 'LETICIA ARAUJO'
    },
    {
        log: 'ADM4CRSA',
        pin: 'ADMCleodeteA@4',
        name: 'CLEODETE RODRIGUES DA SILVA AVANCI'
    },
    {
        log: 'ADM5ACF',
        pin: 'ADMAnaF@5',
        name: 'ANA CRISTINA FORMIGONI'
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
