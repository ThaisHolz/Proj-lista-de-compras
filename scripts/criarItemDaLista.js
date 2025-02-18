import gerarDiaDaSemana from './gerarDiaDaSemana.js';
const inputItem = document.getElementById('input-item');
let contador = 0;

//Permite exportar multiplas partes
export function criarItemDaLista(){
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
    const dataCompleta = gerarDiaDaSemana();
    
    const itemData = document.createElement('p');

    itemData.innerText = dataCompleta;
    itemData.classList.add('texto-data'); //Add o estilo das letras
    itemDaLista.appendChild(itemData);

    return itemDaLista;
}
