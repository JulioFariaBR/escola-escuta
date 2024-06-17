const canvamain = document.getElementById('main');
const canvamsn = document.getElementById('canva-msn');
const canvaimpress = document.getElementById('canva-impress');

window.addEventListener("afterprint", (event) => {
    canvamain.className = "maine"
    canvamsn.className = "canva-impress"
    canvaimpress.className = "display-block"
});

window.addEventListener("beforeprint", (event) => {
    canvamain.className = "maine display-none"
    canvamsn.className = "canva-impress display-none"
    canvaimpress.className = "display-none"
});


function imprimir() {
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
                    <p class="p__main__impressao">Julio Cesar Siqueira Faria</p>
                </div>
                <div class="div__main__impressao">
                    <p class="p__main__impressao">Email:</p>
                    <p class="p__main__impressao">julio.cesar.faria2021@gmail.com</p>
                </div>
                <div class="div__main__impressao">
                    <p class="p__main__impressao">Data:</p>
                    <p class="p__main__impressao">14/06/2024</p>
                </div>
            </section>
            <section class="sect__main__impressao2">
                <h2 class="sect__main__impressao">Mensagem:</h2>
                <p class="p__main__impressao">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pharetra pulvinar dolor, faucibus finibus risus rhoncus auctor. In vel sem lorem. Nam sapien lorem, vulputate sit amet varius vitae, placerat ut urna. Quisque sed purus velit. Nullam non tortor risus. Nullam ornare, diam eu venenatis faucibus, lorem mauris mattis dolor, eu fermentum sem nunc ac dolor. Pellentesque vehicula tellus ligula, quis sagittis sapien luctus ut. Nulla facilisi. Mauris varius pretium efficitur. Phasellus laoreet sem et nulla interdum, a fermentum dui maximus. Nunc non neque blandit, placerat nisi et, dignissim risus. Aenean vitae erat et orci finibus consectetur quis sit amet leo. Nullam ac dui luctus, ultricies velit et, mollis diam.</p>
            </section>
        </main>
        <footer class="footer__impressao">
            <p class="p__main__impressao">Este relatório foi gerado no dia 14/06/2024 ás 19:21, através do site: www.escolaescuta.eagleapp.com.br/pages/adm/html, com o login de JULIO CESAR SIQUEIRA FARIA.</p>
        </footer>
    </div>`
}