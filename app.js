let listaDeNumerosSort = []
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
let numeroLimite = 10;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
function mensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Parabens!');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 
        'tentativa';
        let mensagemTentavias = `Você descobriu o número secreto com 
        ${tentativas} ${palavraTentativas}!`;
        exibirTextoNaTela('p', mensagemTentavias);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else{
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementosLista = listaDeNumerosSort.length;
    if (quantidadeElementosLista == numeroLimite){
        listaDeNumerosSort = [];
    }
    if (listaDeNumerosSort.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else{
        listaDeNumerosSort.push(numeroEscolhido);
        console.log(listaDeNumerosSort);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function novoJogo(){
    numeroSecreto = gerarNumeroAleatorio()
    mensagemInicial()
    tentativas = 1;
    limparCampo()
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
mensagemInicial()









