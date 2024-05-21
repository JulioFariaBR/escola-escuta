let proximaQuestão = 'a';

questoes = {
    a: "",
    b: "",
    c: "",
}

function voltarParaHome() {
    let confirmacao = confirm("Ao clicar em OK, todas seu avanço será perdido. Está ação será irreversivel.");
    if (confirmacao = true) {
        window.location.replace('../../')
    }

}

function querSeIndentificar(idf) {
    if (idf == 1) {
        proximaQuestão = 'b';
    } else if (idf == 0) {
        proximaQuestão = 'c';
    }
    console.log(proximaQuestão);
}