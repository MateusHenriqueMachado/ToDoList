const inputTarefa = document.getElementById('nova-tarefa');
const btnAdicionar = document.getElementById('btn-adicionar');
const listaTarefas = document.getElementById('lista-tarefas');

function adicionarTarefa() {
    const textoTarefa = inputTarefa.value.trim();

    if (textoTarefa === "") {
        alert("Por favor, digite uma tarefa antes de adicionar!");
        return; 
    }


    const novoItem = document.createElement('li');

    const spanTexto = document.createElement('span');
    spanTexto.innerText = textoTarefa;
    
    const divButtons = document.createElement('div');
    divButtons.classList.add('action-buttons');

    const btnConcluir = document.createElement('button');
    btnConcluir.innerText = "Concluir";
    btnConcluir.classList.add('btn-concluir');
    btnConcluir.addEventListener('click', function() {
        novoItem.classList.toggle('concluida'); 
    });

    const btnRemover = document.createElement('button');
    btnRemover.innerText = "Remover";
    btnRemover.classList.add('btn-remover');
    btnRemover.addEventListener('click', function() {
        novoItem.remove(); 
    });


    divButtons.appendChild(btnConcluir);
    divButtons.appendChild(btnRemover);

    novoItem.appendChild(spanTexto);
    novoItem.appendChild(divButtons);

    listaTarefas.appendChild(novoItem);

    inputTarefa.value = "";
    inputTarefa.focus();
}


btnAdicionar.addEventListener('click', adicionarTarefa);

inputTarefa.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        adicionarTarefa();
    }
});