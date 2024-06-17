let nomeBusca = [];
let emailBusca = [];
let tipoBusca = [];
let msnBusca = [];
let dataBusca = [];
let bandeiraBusca = [];

function extraindodados(dados) {
    dados.forEach((elemento, _index) => {
        nomeBusca.push(elemento.c[0].v)
        emailBusca.push(elemento.c[1].v)
        tipoBusca.push(elemento.c[2].v)
        msnBusca.push(elemento.c[3].v)
        dataBusca.push(elemento.c[4].v)
    })
    nomeBusca.shift();
    emailBusca.shift();
    tipoBusca.shift();
    msnBusca.shift();
    dataBusca.shift();
    console.log(nomeBusca, emailBusca, tipoBusca, msnBusca, dataBusca);
    construtor();
}
async function busca() {
    let url = `https://docs.google.com/spreadsheets/d/1_SjV9CPgsXzq5WlS0eZfSTEckFP9HcsE5l502hgegVo/gviz/tq?tqx=out:json`

    let data = await fetch(url)
        .then(res => res.text())
        .then(text => JSON.parse(text.substr(47).slice(0, -2)))
    extraindodados(data.table.rows);
}

function construtor() {
    nomeBusca.forEach((e, i)=> {
        document.querySelector('#canva-table').innerHTML = `${document.querySelector('#canva-table').innerHTML} <tr><th scope="row">${e}</th><th>${emailBusca[i]}</th><th>${tipoBusca[i]}</th><th>${dataBusca[i]}</th><th onclick="openMsn(${i})" class="open">Abrir Mensagem</th></tr>`
    })
}

function openMsn(id) {
    document.querySelector('#canva-msn').className = 'main dmsn';
    document.querySelector('#canva-msn').innerHTML = `<button class="main__bnt" onclick="closeMsn()">X</button><h1>Detalhes da mensagem:</h1><table><thead><tr class="titulos"><th scope="col">Nome: ${nomeBusca[id]}</th><th scope="col">E-mail: ${emailBusca[id]}</th><th scope="col">Tipo: ${tipoBusca[id]}</th></tr></thead><tbody><tr><th scope="row" colspan="3">${msnBusca[id]}</th></tr></tbody></table>`
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
            <p class="p__main__impressao">Este relatório foi gerado no dia ${construindoData()} ás 19:21, através do site: www.escolaescuta.eagleapp.com.br/pages/adm/html, com o login de ${nameuser}.</p>
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