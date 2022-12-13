async function buscaEndereco(cep) {
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = " ";
    try {
    var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    var consultaCEPConvertido = await consultaCEP.json();
    if (consultaCEPConvertido.erro) {
        throw Error('CEP não existente')
    }
    var cidade = document.getElementById('cidade');
    var lagradouro = document.getElementById('endereco');
    var estado = document.getElementById('estado');

    cidade.value = consultaCEPConvertido.localidade;
    lagradouro.value = consultaCEPConvertido.logradouro;
    estado.value = consultaCEP.uf;


    console.log(consultaCEPConvertido) 
    return consultaCEPConvertido;   
    } catch(erro) {
        console.log(erro)
        mensagemErro.innerHTML = `<p> CEP inválido. Tente novamente</p>`
    }
    
}

var cep = document.getElementById('cep');
cep.addEventListener('focusout', ()=> buscaEndereco(cep.value));