const acertou = document.getElementById('result');
const indicador = document.getElementById('indicador');
const jogar = document.getElementById('jogar');
const comeca = document.getElementById('novojogo');
const input = document.getElementById('input_num');
const numeroAleatorio = Math.floor(Math.random() * 5);

const acertouOuErrou = (conteudo) => {

  if(conteudo){
    acertou.style.backgroundColor ="green";
  }else{
    acertou.style.backgroundColor = "red";
  }
}

function verificarValorAleatorio() {
 
  console.log("funcionou")  
  const valorInput = input.value;
 
  const valorInputNumero = parseInt(valorInput);
 
  if (valorInputNumero === numeroAleatorio) {
    acertou.style.backgroundColor = 'green';

    indicador.innerHTML = "parabens!";
    result.innerHTML = "acertou"

} else {
    indicador.innerHTML = "Você errou!";

    acertou.style.backgroundColor = 'red';
  }
}
  
  jogar.addEventListener('click', function() {
    
  
    verificarValorAleatorio();
  
  });
  