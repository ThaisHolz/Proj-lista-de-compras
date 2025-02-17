import { criarItemDaLista } from './scripts/criarItemDaLista.js';

const listaDeCompras = document.getElementById('lista-de-compras');
const botaoAdicionar = document.getElementById('adicionar-item');

botaoAdicionar.addEventListener('click', function(evento) {
    evento.preventDefault();
    const itemDaLista = criarItemDaLista();
    listaDeCompras.appendChild(itemDaLista);
    verificarListaVazia();
})

//Mensagem de lista vazia
const msgListaVazia = document.querySelector('.msg-lista-vazia');

function verificarListaVazia(){
    const elementosDaLista = listaDeCompras.querySelectorAll('li');
    if (elementosDaLista.length === 0){
        msgListaVazia.style.display = 'block';
    }else {
        msgListaVazia.style.display = 'none';
    }
}

verificarListaVazia();
