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
    let conditionforlogin = false
    condition = false
    infos.forEach((e) => {
        console.log(conditionforlogin);
        if (condition == false) {
            if (e.log == (document.querySelector('#login').value) && (e.pin == document.querySelector('#pass').value)) {
                document.querySelector('#main').innerHTML = `<div id="filtro"><h1>Selecionar Intervalo de Datas</h1>
                        <label for="startDate" class="main__fieldset--label">Data de Início:</label>
                        <input type="date" id="startDate" name="startDate" required class="main__fieldset--input">
                        <br><br>
                        <label for="endDate" class="main__fieldset--label">Data de Fim:</label>
                        <input type="date" id="endDate" name="endDate" required class="main__fieldset--input">
                        <br><br>
                        <button onclick="busca()" class="main__bnt">Filtrar Datas</button><button class="main__bnt" onclick="impvariasmsn()" style="display: none;">Imprimir todas as Mensagens</button>
                    </div><table><thead><tr class="titulos"><th scope="col">Nome</th><th scope="col">E-mail</th><th scope="col">Tipo</th><th scope="col">Mensagem</th><th scope="col"></th></tr></thead><tbody id="canva-table"></tbody></table>`
                nameuser = e.name
                conditionforlogin = true
            
            }
        }
    })
    if (conditionforlogin == false) {
        alert("LOGIN ou SENHA estão incorretos.")
    }
}
