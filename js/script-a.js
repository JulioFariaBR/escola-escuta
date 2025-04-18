let require = false;
let proximaQuestao = 1;
const canva = document.querySelector('#canva');
let dados = {
    nome: '',
    email: '',
    tipo: '',
    msn: '',
    data: ''
};

questoes = [`<h1 class="prin__section--h1">Você gostaria de se indentificar?</h1><fieldset class="prin__section--fieldset"><div class="custom-radio"><input id="radio-1" name="question" value="1" type="radio" onclick="querSeIndentificar(1)"><label for="radio-1" class="label">Sim</label></div><div class="custom-radio"><input id="radio-2" name="question" value="0" type="radio" onclick="querSeIndentificar(0)"><label for="radio-2" class="label">Não</label></div></fieldset><button onclick="escreverQuestao()" class="prin__section--button">Próximo.</button>`, `<h1 class="prin__section--h1">Suas informações:</h1><fieldset class="prin__section--fieldset"><label for="name" class="label">Nome:</label><input type="text" name="name" id="name" class="input__text text-line" ></fieldset><fieldset class="prin__section--fieldset"><label for="mail" class="label">E-mail:</label>    <input type="email" name="mail" id="mail" class="input__text text-line"></fieldset><button onclick="cadDados(1); escreverQuestao();" class="prin__section--button">Próximo.</button>`, `<h1 class="prin__section--h1">Sua mensagem se caracteriza como:</h1><fieldset class="prin__section--fieldset newdivinputtype">
<div class="custom-radio newinputtype"><input id="radio-1" name="question" value="0" type="radio" onclick="classificacaoDaMensagem(0)"><label for="radio-1" class="label">Dúvida</label></div><div class="custom-radio newinputtype"><input id="radio-2" name="question" value="1" type="radio" onclick="classificacaoDaMensagem(1)"><label for="radio-2" class="label">Reclamação</label></div><div class="custom-radio newinputtype"><input id="radio-3" name="question" value="2" type="radio" onclick="classificacaoDaMensagem(2)"><label for="radio-3" class="label">Ideia</label></div><div class="custom-radio newinputtype"><input id="radio-4" name="question" value="3" type="radio" onclick="classificacaoDaMensagem(3)"><label for="radio-4" class="label">Desabafo</label></div><div class="custom-radio newinputtype"><input id="radio-5" name="question" value="4" type="radio" onclick="classificacaoDaMensagem(4)"><label for="radio-5" class="label">Elogio</label></div></div><div class="custom-radio newinputtype"><input id="radio-6" name="question" value="5" type="radio" onclick="classificacaoDaMensagem(5)"><label for="radio-6" class="label">Outros</label></div></fieldset><button onclick="escreverQuestao()" class="prin__section--button">Próximo.</button>`,`<div class="div__flex"><fieldset class="prin__section--fieldset fieldset__flex"><label for="mail" class="label">Nos escreva:</label><textarea name="" id="textarea" rows="7" cols="35" class="input__text"></textarea></fieldset><button onclick="cadDados(2); escreverQuestao();" class="prin__section--button">Enviar.</button></div>`,`<h1 class="prin__section--h1">Mensagem foi enviada.</h1><button onclick="voltarParaHome()" class="prin__bntb"> &LeftArrow; Voltar</button>`, ``]

function voltarParaHome() {
    let confirmacao = confirm("Ao clicar em OK, todas seu avanço será perdido. Está ação será irreversivel.");
    if (confirmacao = true) {
        window.location.replace('../../');
    }
}

function querSeIndentificar(idf) {
    if (idf == 1) {
        proximaQuestao = 2;
    } else if (idf == 0) {
        proximaQuestao = 3;
    }
    require = true;
    console.log(proximaQuestao);
}

function escreverQuestao() {
    if (require == true) {
        canva.innerHTML = `${questoes[(proximaQuestao-1)]}`
        require = false
    } else {
        alert('Marque alguma opção ou escreva algo...')
    }
}

function cadDados(perguntas) {
    if (perguntas == 1) {
        if (document.querySelector('#name').value != '' && document.querySelector('#mail').value != '') {
            require = true;
            dados.nome = document.querySelector('#name').value;
            dados.email = document.querySelector('#mail').value;
            proximaQuestao = 3;
        } else if (document.querySelector('#name').value == '' && document.querySelector('#mail').value == '') {
            require = false;
        }
        proximaQuestao = 3;
    }
    if (perguntas == 2) {
        if (document.querySelector('#textarea').value != '') {
            require = true;
            dados.msn = document.querySelector('#textarea').value;
            proximaQuestao = 5;
            dados.data = contruindoData();
            bancoDeDados(dados);
        } else if (document.querySelector('#textarea').value == '') {
            require = false;
        }
        proximaQuestao = 5;
    }
}

function classificacaoDaMensagem(perg) {
    let ordem = ['Dúvida', 'Reclamação', 'Ideia', 'Desabafo', 'Elogio', 'Outros']
    ordem.forEach((e, i) => {
        if (perg == i) {
            dados.tipo = e;
        }
    })
    require = true;
    proximaQuestao = 4;
}

function contruindoData() {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    return today.toLocaleDateString();
}