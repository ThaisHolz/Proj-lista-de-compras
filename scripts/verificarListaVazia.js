
const msgListaVazia = document.querySelector('.msg-lista-vazia');

function verificarListaVazia(listaDeCompras){
    const elementosDaLista = listaDeCompras.querySelectorAll('li');
    if (elementosDaLista.length === 0){
        msgListaVazia.style.display = 'block';
    }else {
        msgListaVazia.style.display = 'none';
    }
}

export default verificarListaVazia;