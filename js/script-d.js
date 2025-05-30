let nomeBusca = [];
let emailBusca = [];
let tipoBusca = [];
let msnBusca = [];
let dataBusca = [];
let nomeBuscaS = [];
let emailBuscaS = [];
let tipoBuscaS = [];
let msnBuscaS = [];
let dataBuscaS = [];
let bandeiraBusca = [];

function extraindodados(dados) {
    nomeBuscaS = [];
    emailBuscaS = [];
    tipoBuscaS = [];
    msnBuscaS = [];
    dataBuscaS = [];
    nomeBusca = [];
    emailBusca = [];
    tipoBusca = [];
    msnBusca = [];
    dataBusca = [];
    dados.forEach((elemento, _index) => {
        nomeBuscaS.push(elemento.c[0].v)
        emailBuscaS.push(elemento.c[1].v)
        tipoBuscaS.push(elemento.c[2].v)
        msnBuscaS.push(elemento.c[3].v)
        dataBuscaS.push(elemento.c[4].v)
    })
    nomeBuscaS.shift();
    emailBuscaS.shift();
    tipoBuscaS.shift();
    msnBuscaS.shift();
    dataBuscaS.shift();
    console.log(nomeBuscaS, emailBuscaS, tipoBuscaS, msnBuscaS, dataBuscaS);
    selecioneAsDatas();
    console.log(nomeBusca, emailBusca, tipoBusca, msnBusca, dataBusca);
    construtor();
}
async function busca() {
    let url = `https://docs.google.com/spreadsheets/d/1Mnb1tMcby9WgIBJcX0eGN7p7_maNZb_yNTFqTkL6Qrg/gviz/tq?tqx=out:json`

    let data = await fetch(url)
        .then(res => res.text())
        .then(text => JSON.parse(text.substr(47).slice(0, -2)))
    extraindodados(data.table.rows);
}

function stringToDate(dateStr) {
    const [day, month, year] = dateStr.split('/').map(Number);
    return new Date(year, month - 1, day); // JavaScript months are 0-based
}

// Função para converter uma string no formato aaaa-mm-dd para um objeto Date
function inputDateToDate(dateStr) {
    const [year, month, day] = dateStr.split('-').map(Number);
    return new Date(year, month - 1, day); // JavaScript months are 0-based
}

function selecioneAsDatas() {
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;

    if (!startDate || !endDate) {
        console.log("As datas de início e fim devem ser fornecidas.");
        return;
    }

    const start = inputDateToDate(startDate);
    const end = inputDateToDate(endDate);

    if (start > end) {
        console.log("A data de início não pode ser maior que a data de fim.");
        return;
    }

    const dataBuscaP = dataBuscaS.filter((dataStr, index) => {
        const data = stringToDate(dataStr);
        if (data >= start && data <= end) {
            console.log(`Data: ${dataStr}, Índice: ${index}`);
            nomeBusca.push(nomeBuscaS[index])
            emailBusca.push(emailBuscaS[index])
            tipoBusca.push(tipoBuscaS[index])
            msnBusca.push(msnBuscaS[index])
            dataBusca.push(dataBuscaS[index])
            return true;
        }
        return false;
    });

    console.log("Datas filtradas:", dataBuscaP); 
}

function construtor() {
    document.querySelector('#canva-table').innerHTML = ``;
    nomeBusca.forEach((e, i)=> {
        document.querySelector('#canva-table').innerHTML = `${document.querySelector('#canva-table').innerHTML} <tr><th scope="row">${e}</th><th>${emailBusca[i]}</th><th>${tipoBusca[i]}</th><th>${dataBusca[i]}</th><th onclick="openMsn(${i})" class="open">Abrir Mensagem</th></tr>`
    })
}

function openMsn(id) {
    document.querySelector('#canva-msn').className = 'main dmsn';
    document.querySelector('#canva-msn').innerHTML = `<button class="main__bnt" onclick="closeMsn()">X</button><button class="main__bnt" onclick="window.print()">Imprimir esta Mensagem</button><h1>Detalhes da mensagem:</h1><table><thead><tr class="titulos"><th scope="col">Nome: ${nomeBusca[id]}</th><th scope="col">E-mail: ${emailBusca[id]}</th><th scope="col">Tipo: ${tipoBusca[id]}</th><th scope="col">Data: ${dataBusca[id]}</th></tr></thead><tbody><tr><th scope="row" colspan="4">${msnBusca[id]}</th></tr></tbody></table>`
    let canvaimpress = document.getElementById('canva-impress');
    canvaimpress.innerHTML = `<div class="impressao">
        <header class="cab__impressao">
            <img src="../img/assets-11.png" alt="" class="img__impressao">
            <div class="cab--div__impressao">
                <h1 class="h1__impressao">Projeto Escola Escuta</h1>
                <h2 class="h2__impressao">Colégio Estadual Vila Alta</h2>
            </div>
        </header>
        <main class="main__impressao">
            <h1 class="h1__main__impressao">Relatório da mensagem:</h1>
            <section class="sect__main__impressao1">
                <h2 class="sect__main__impressao">Dados da Mensagem:</h2>
                <div class="div__main__impressao">
                    <p class="p__main__impressao">Nome:</p>
                    <p class="p__main__impressao">${nomeBusca[id]}</p>
                </div>
                <div class="div__main__impressao">
                    <p class="p__main__impressao">Email:</p>
                    <p class="p__main__impressao">${emailBusca[id]}</p>
                </div>
                <div class="div__main__impressao">
                    <p class="p__main__impressao">Tipo de Mensagem:</p>
                    <p class="p__main__impressao">${tipoBusca[id]}</p>
                </div>
                <div class="div__main__impressao">
                    <p class="p__main__impressao">Data:</p>
                    <p class="p__main__impressao">${dataBusca[id]}</p>
                </div>
            </section>
            <section class="sect__main__impressao2">
                <h2 class="sect__main__impressao">Mensagem:</h2>
                <p class="p__main__impressao">${msnBusca[id]}</p>
            </section>
        </main>
        <footer class="footer__impressao">
            <p class="p__main__impressao">Este relatório foi gerado no dia ${construindoData()} ás ${construindoHora()}, através do site: www.escolaescuta.eagleapp.com.br/pages/adm/html, com o login de ${nameuser}.</p>
        </footer>
    </div>`
}

function closeMsn() {
    document.querySelector('#canva-msn').className = 'main dnone';
}

function construindoData() {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    return today.toLocaleDateString();
}

function construindoHora() {
    const data = new Date(); // momento atual 
    const horas = data.getHours();
    const minutos = data.getMinutes();

    const hhmmm = [horas, minutos].join(':');
    return hhmmm
}