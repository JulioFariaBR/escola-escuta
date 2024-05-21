let proximaQuestão = 1;
const canva = document.querySelector('#canva');

questoes = [`<h1>Você gostaria de se indentificar?</h1>
<fieldset>
    <div class="custom-radio">
        <input id="radio-1" name="question" value="1" type="radio" onclick="querSeIndentificar(1)">
        <label for="radio-1">Sim</label>
      </div>
      
      <div class="custom-radio">
        <input id="radio-2" name="question" value="0" type="radio" onclick="querSeIndentificar(0)">
        <label for="radio-2">Não</label>
      </div>
</fieldset>
<button onclick="escreverQuestao()">Próximo.</button>`, ``, ``,]

function voltarParaHome() {
    let confirmacao = confirm("Ao clicar em OK, todas seu avanço será perdido. Está ação será irreversivel.");
    if (confirmacao = true) {
        window.location.replace('../../')
    }

}

function querSeIndentificar(idf) {
    if (idf == 1) {
        proximaQuestão = '2';
    } else if (idf == 0) {
        proximaQuestão = '3';
    }
    console.log(proximaQuestão);
}

function escreverQuestao() {
    canva.innerHTML = `${questoes[proximaQuestão]}`
}