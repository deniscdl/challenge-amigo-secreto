let amigos = [];

// 01. Função para adicionar amigo
function adicionarAmigo() {
    console.log(amigos);
    let input = document.getElementById("amigo");
    let nome = input.value.trim(); // pega o valor do input e remove espaços

    // 02. Validar entrada
    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    // 03. Atualizar o array
    amigos.push(nome);

    // 04. Limpar o campo de entrada
    input.value = "";

    // 05. Atualizar a lista na tela
    atualizarLista();
}

// 05. Função para atualizar lista de amigos
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // limpa a lista atual

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// 06. Função para sortear amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>O amigo secreto sorteado foi: <strong>${amigoSorteado}</strong></li>`;
}




