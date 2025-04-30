let condition

function gerarMapaComChave(chave) {
    const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 .,!?';
    const chaveHash = Array.from(chave).reduce((a, c) => a + c.charCodeAt(0), 0);
    const aleatorio = [...alfabeto].sort((a, b) => (a.charCodeAt(0) + chaveHash) % 89 - (b.charCodeAt(0) + chaveHash) % 89);
    const mapa = {};
    const inverso = {};
    for (let i = 0; i < alfabeto.length; i++) {
      mapa[alfabeto[i]] = aleatorio[i];
      inverso[aleatorio[i]] = alfabeto[i];
    }
    return { mapa, inverso };
  }
  
  function criptografar(texto, chave) {
    const { mapa } = gerarMapaComChave(chave);
    return Array.from(texto).map(c => mapa[c] || c).join('');
  }
  
  function descriptografar(texto, chave) {
    const { inverso } = gerarMapaComChave(chave);
    return Array.from(texto).map(c => inverso[c] || c).join('');
}

const infos = [
    {
        log: 'ADM1JCSF',
        pin: criptografar('ADMJulioF@1'),
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
