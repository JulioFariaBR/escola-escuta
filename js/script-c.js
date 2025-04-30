let condition

const infos = [
    {
        log: 'ADM1JCSF',
        pin: 'KNWTevsyP@1',
        name: 'JULIO CESAR SIQUEIRA FARIA'
    },
    {
        log: 'ADM2LM',
        pin: 'KNWVemskW@2',
        name: 'LUCIA MALDONADO'
    },
    {
        log: 'ADM3DVC',
        pin: 'KNWNkxsovF@3',
        name: 'DANIEL VICTORINO CALDAS'
    },
]

function criptografar(text) {
    const texto = text;
    let resultado = '';
    const chave = 10; // deslocamento usado na cifra de César

    for (let i = 0; i < texto.length; i++) {
      let char = texto[i];
      if (char.match(/[a-z]/i)) {
        const codigo = texto.charCodeAt(i);
        // letras maiúsculas
        if (codigo >= 65 && codigo <= 90) {
          char = String.fromCharCode(((codigo - 65 + chave) % 26) + 65);
        }
        // letras minúsculas
        else if (codigo >= 97 && codigo <= 122) {
          char = String.fromCharCode(((codigo - 97 + chave) % 26) + 97);
        }
      }
      resultado += char;
    }
    return resultado
  }

function descriptografar(text) {
    const texto = text;
    let resultado = '';
    const chave = 10; // deslocamento usado na cifra de César

    for (let i = 0; i < texto.length; i++) {
      let char = texto[i];
      if (char.match(/[a-z]/i)) {
        const codigo = texto.charCodeAt(i);
        // letras maiúsculas
        if (codigo >= 65 && codigo <= 90) {
          char = String.fromCharCode(((codigo - 65 - chave + 26) % 26) + 65);
        }
        // letras minúsculas
        else if (codigo >= 97 && codigo <= 122) {
          char = String.fromCharCode(((codigo - 97 - chave + 26) % 26) + 97);
        }
      }
      resultado += char;
    }
    return resultado

}

let nameuser

function realizarLogin() {
    let conditionforlogin = false
    condition = false
    infos.forEach((e) => {
        console.log(conditionforlogin);
        if (condition == false) {
            if (e.log == (document.querySelector('#login').value) && (e.pin == criptografar(document.querySelector('#pass').value))) {
                document.querySelector('#main').innerHTML = `<div id="filtro"><h1>Selecionar Intervalo de Datas</h1>
                        <label for="startDate" class="main__fieldset--label">Data de Início:</label>
                        <input type="date" id="startDate" name="startDate" required class="main__fieldset--input">
                        <br><br>
                        <label for="endDate" class="main__fieldset--label">Data de Fim:</label>
                        <input type="date" id="endDate" name="endDate" required class="main__fieldset--input">
                        <br><br>
                        <button onclick="busca()" class="main__bnt">Filtrar Datas</button><button class="main__bnt" onclick="impvariasmsn()" style="display: none;">Imprimir todas as Mensagens</button>
                    </div><table><thead><tr class="titulos"><th scope="col">Nome</th><th scope="col">E-mail</th><th scope="col">Tipo</th><th scope="col">Mensagem</th><th scope="col"></th></tr></thead><tbody id="canva-table"></tbody></table>`
                nameuser = e.name
                conditionforlogin = true
            
            }
        }
    })
    if (conditionforlogin == false) {
        alert("LOGIN ou SENHA estão incorretos.")
    }
}
