
function gerarDiaDaSemana(){
    const diaDaSemana = new Date().toLocaleDateString('pt-BR', {weekday: 'long'});
    const data = new Date().toLocaleDateString('pt-BR');
    const hora = new Date().toLocaleTimeString('pt-BR', {hour: 'numeric', minute: 'numeric'});
    const dataCompleta = `${diaDaSemana} (${data}) às ${hora}`;

return dataCompleta;
}

//Tipo de exportação para unica funcionalidade
export default gerarDiaDaSemana;
