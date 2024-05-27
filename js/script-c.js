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
    infos.forEach((e) => {
        if (e.log == document.querySelector('#login').value && e.pin == document.querySelector('#pass').value) {
            alert('Seu usuário ou sua senha estão errados.');
        } else {
            
        }
    })
}
