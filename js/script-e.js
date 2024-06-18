const canvamain = document.getElementById('main');
const canvamsn = document.getElementById('canva-msn');
const canvaimpress = document.getElementById('canva-impress');

window.addEventListener("afterprint", (event) => {
    canvamain.className = "maine"
    canvamsn.className = "main dmsn"
    canvaimpress.className = "display-none"
    canvaimpress.innerHTML = ``;
});

window.addEventListener("beforeprint", (event) => {
    canvamain.className = "maine display-none"
    canvamsn.className = "main dnone"
    canvaimpress.className = "display-block"
});

function impvariasmsn() {
    nomeBusca.forEach((e, i) => {
        canvaimpress.innerHTML = `${canvaimpress.innerHTML}<div class="impressao">
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
                    <p class="p__main__impressao">${nomeBusca[i]}</p>
                </div>
                <div class="div__main__impressao">
                    <p class="p__main__impressao">Email:</p>
                    <p class="p__main__impressao">${emailBusca[i]}</p>
                </div>
                <div class="div__main__impressao">
                    <p class="p__main__impressao">Tipo de Mensagem:</p>
                    <p class="p__main__impressao">${tipoBusca[i]}</p>
                </div>
                <div class="div__main__impressao">
                    <p class="p__main__impressao">Data:</p>
                    <p class="p__main__impressao">${dataBusca[i]}</p>
                </div>
            </section>
            <section class="sect__main__impressao2">
                <h2 class="sect__main__impressao">Mensagem:</h2>
                <p class="p__main__impressao">${msnBusca[i]}</p>
            </section>
        </main>
        <footer class="footer__impressao">
            <p class="p__main__impressao">Este relatório foi gerado no dia ${construindoData()} ás ${construindoHora()}, através do site: www.escolaescuta.eagleapp.com.br/pages/adm/html, com o login de ${nameuser}.</p>
        </footer>
    </div>`
    })
    window.print();
    canvamsn.className = "main dnone"
}