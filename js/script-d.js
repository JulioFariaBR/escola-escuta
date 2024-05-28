let nomeBusca = [];
let emailBusca = [];
let tipoBusca = [];
let msnBusca = [];
let bandeiraBusca = [];

function extraindodados(dados) {
    dados.forEach((elemento, _index) => {
        nomeBusca.push(elemento.c[0].v)
        emailBusca.push(elemento.c[1].v)
        tipoBusca.push(elemento.c[2].v)
        msnBusca.push(elemento.c[3].v)
    })
    nomeBusca.shift();
    emailBusca.shift();
    tipoBusca.shift();
    msnBusca.shift();
    console.log(nomeBusca, emailBusca, tipoBusca, msnBusca);
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
        document.querySelector('#canva-table').innerHTML = `${document.querySelector('#canva-table').innerHTML} <tr><th scope="row">${e}</th><th>${emailBusca[i]}</th><th>${tipoBusca[i]}</th><th>  . . .  </th><th onclick="openMsn(${i})" class="open">Abrir Mensagem</th></tr>`
    })
}

function openMsn(id) {
    console.log(id)
}