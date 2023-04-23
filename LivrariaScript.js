const formCompras = document.querySelector('#form-compras');
const ListaDeLivros = document.querySelector('#livraria');
const livros = document.querySelector('#livro');
const EditoradoLivro = document.querySelector('#editora');


let ComprasDeLivros = [];

function atualizarLista() {
    ListaDeLivros.innerHTML = '';
    ComprasDeLivros.forEach((livro, index) => {

        const li = document.createElement('li');
        li.innerHTML = `${livro.livro} - ${livro.editora} 
        
        <button class="editar" data-index="${index}">
        <img src="6324826.png" alt="editar" style="width:10px;"></button>
      
        <button class="excluir" data-index="${index}">Delete</button>`;

        ListaDeLivros.appendChild(li);
    });

    const botoesEditar = document.querySelectorAll('.editar');
    botoesEditar.forEach(botao => {
        botao.addEventListener('click', (event) => {
            const index = event.target.dataset.index;
            const livro = ComprasDeLivros[index];
            const novolivro = prompt('Digite o novo nome do livro:', livro.livro);
            const novaeditora = prompt('Digite a nova editora:', livro.editora);
            ComprasDeLivros[index] = { livro: novolivro, editora: novaeditora };
            atualizarLista();
        });
    });

    const botoesExcluir = document.querySelectorAll('.excluir');
    botoesExcluir.forEach(botao => {
        botao.addEventListener('click', (event) => {
            const index = event.target.dataset.index;
            ComprasDeLivros.splice(index, 1);
            atualizarLista();
        });
    });
}


formCompras.addEventListener('submit', (event) => {
    event.preventDefault();

    const livro = livros.value;
    const editora = EditoradoLivro.value;
    ComprasDeLivros.push({ livro, editora });

    livros.value = '';
    EditoradoLivro.value = '';


    atualizarLista();
});
