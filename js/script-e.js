const canvamain = document.getElementById('main');
const canvamsn = document.getElementById('canva-msn');
const canvaimpress = document.getElementById('canva-impress');

window.addEventListener("afterprint", (event) => {
    canvamain.className = "maine"
    canvamsn.className = "main dmsn"
    canvaimpress.className = "display-none"
});

window.addEventListener("beforeprint", (event) => {
    canvamain.className = "maine display-none"
    canvamsn.className = "main dnone"
    canvaimpress.className = "display-block"
});