const amigos = [];
let disponiveis = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();
    const lista = document.getElementById("listaAmigos");
    
    if (nome === "" || amigos.includes(nome)) {
        alert("Nome inválido ou já adicionado.");
        return;
    }
    if (amigos.length >= 20) {
        alert("Máximo de 20 amigos atingido.");
        return;
    }
    
    amigos.push(nome);
    disponiveis.push(nome);
    const li = document.createElement("li");
    li.textContent = nome;
    lista.appendChild(li);
    input.value = "";
}

function sortearAmigo() {
    if (disponiveis.length < 1) {
        document.getElementById("resultado").innerHTML = "<p>Todos os amigos já foram sorteados!</p>";
        return;
    }
    
    let sorteadoIndex;
    let sorteado;
    do {
        sorteadoIndex = Math.floor(Math.random() * disponiveis.length);
        sorteado = disponiveis[sorteadoIndex];
    } while (amigos.length > 1 && sorteado === amigos[amigos.length - disponiveis.length]);
    
    disponiveis.splice(sorteadoIndex, 1);
    
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<p>O seu amigo secreto é <strong>${sorteado}</strong></p>`;
}
