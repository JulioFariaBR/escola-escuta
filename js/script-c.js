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

let nameuser

function realizarLogin() {
    condition = false
    infos.forEach((e) => {
        if (condition == false) {
            if (e.log == document.querySelector('#login').value && e.pin == document.querySelector('#pass').value) {
                document.querySelector('#main').innerHTML = `<div id="filtro"><h1>Selecionar Intervalo de Datas</h1>
                    <form id="dateForm">
                        <label for="startDate">Data de Início:</label>
                        <input type="date" id="startDate" name="startDate" required>
                        <br><br>
                        <label for="endDate">Data de Fim:</label>
                        <input type="date" id="endDate" name="endDate" required>
                        <br><br>
                        <button type="submit">Filtrar Datas</button>
                    </form></div><table><thead><tr class="titulos"><th scope="col">Nome</th><th scope="col">E-mail</th><th scope="col">Tipo</th><th scope="col">Mensagem</th><th scope="col"></th></tr></thead><tbody id="canva-table"></tbody></table>`
                busca();
                nameuser = e.name
            }
        }
    })
}
