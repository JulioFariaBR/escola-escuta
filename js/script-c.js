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
    condition == false
    infos.forEach((e) => {
        if (condition == false) {
            console.log(e, e.log, e.pin, e.log == document.querySelector('#login').value && e.pin == document.querySelector('#pass').value);
            if (e.log == document.querySelector('#login').value && e.pin == document.querySelector('#pass').value) {
                condition = true
            }
        }
    })
    if (condition == true) {
        localStorage.setItem("User", true);
    } else if (condition == false) {
        localStorage.setItem("User", false);
    }
}
