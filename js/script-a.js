let require = false;
let proximaQuestão = 1;
const canva = document.querySelector('#canva');
const inputname = document.querySelector('#name');
const inputmail = document.querySelector('#mail');
let dados = {
    nome: '',
    email: '',
};

questoes = [`<h1 class="prin__section--h1">Você gostaria de se indentificar?</h1><fieldset class="prin__section--fieldset"><div class="custom-radio"><input id="radio-1" name="question" value="1" type="radio" onclick="querSeIndentificar(1)"><label for="radio-1" class="label">Sim</label></div><div class="custom-radio"><input id="radio-2" name="question" value="0" type="radio" onclick="querSeIndentificar(0)"><label for="radio-2" class="label">Não</label></div></fieldset><button onclick="escreverQuestao()" class="prin__section--button">Próximo.</button>`, ``, ``,]

function voltarParaHome() {
    let confirmacao = confirm("Ao clicar em OK, todas seu avanço será perdido. Está ação será irreversivel.");
    if (confirmacao = true) {
        window.location.replace('../../');
    }
}

function querSeIndentificar(idf) {
    if (idf == 1) {
        proximaQuestão = 2;
    } else if (idf == 0) {
        proximaQuestão = 3;
    }
    require = true;
    console.log(proximaQuestão);
}

function escreverQuestao() {
    if (require == true) {
        canva.innerHTML = `${questoes[proximaQuestão]}`
        require = false
    } else {
        alert('Marque alguma opção ou escreva algo...')
    }
}

function cadDados(perguntas) {
    if (perguntas == 1) {
        if (inputname.value != '' && inputmail.value != '') {
            require = true;
            dados.nome = inputname.value;
            dados.email = inputmail.value;
        } else if (inputname.value == '' && inputmail.value == '') {
            require = false;
        }
        proximaQuestão = 3;
    }
}