const inputItem = document.getElementById('input-item');
const listaDeCompras = document.getElementById('lista-de-compras');
const botaoAdicionar = document.getElementById('adicionar-item');
let contador = 0;

botaoAdicionar.addEventListener('click', function(evento) {
    evento.preventDefault();
    if (inputItem.value === ""){
        alert('Por favor, insira um item!');
        return;
    }

    //Criando item na lista
    const itemDaLista = document.createElement('li');
    const containerItemDaLista = document.createElement('div');
    containerItemDaLista.classList.add('lista-item-container');

    const inputCheckbox = document.createElement('input');
    inputCheckbox.type = 'checkbox';
    inputCheckbox.id = 'checkbox-' + contador++;

    const nomeItem = document.createElement('p');
    nomeItem.innerHTML = inputItem.value;

    //Add interação de riscar o nome da lista
    inputCheckbox.addEventListener('click', function(){
        if (inputCheckbox.checked){
            nomeItem.style.textDecoration = 'line-through';
        }else {
            nomeItem.style.textDecoration = 'none';
        }
    });

    //Conectando os itens de 'filho para pai'
    containerItemDaLista.appendChild(inputCheckbox);
    containerItemDaLista.appendChild(nomeItem);

    itemDaLista.appendChild(containerItemDaLista);

    //Para colocar data e hora
    const diaDaSemana = new Date().toLocaleDateString('pt-BR', {weekday: 'long'});
    const data = new Date().toLocaleDateString('pt-BR');
    const hora = new Date().toLocaleTimeString('pt-BR', {hour: 'numeric', minute: 'numeric'});
    const dataCompleta = `${diaDaSemana} (${data}) às ${hora}`;
    const itemData = document.createElement('p');

    itemData.innerText = dataCompleta;
    itemData.classList.add('texto-data'); //Add o estilo das letras
    itemDaLista.appendChild(itemData);
    listaDeCompras.appendChild(itemDaLista);

})
