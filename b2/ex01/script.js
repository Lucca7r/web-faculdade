



  let numeroAleatorio = Math.floor(Math.random() * 3) + 1;
  console.log(numeroAleatorio);


function jogar() {
 

  const escolha = document.getElementById("escolha").value;
  const numero = parseInt(document.getElementById("numero").value);
  const resultadoDiv = document.getElementById("resultado");

  if (numeroAleatorio === numero) {
    if (escolha === "par" && numeroAleatorio % 2 === 0) {
      resultadoDiv.innerHTML = "Você ganhou!";
    } else if (escolha === "impar" && numeroAleatorio % 2 !== 0) {
      resultadoDiv.innerHTML = "Você ganhou!";
    } else {
      resultadoDiv.innerHTML = "Você perdeu!";
    }
  } else {
    resultadoDiv.innerHTML = "Você errou!";
  }
}

novoJogo = () => {
  document.getElementById("escolha").value = "";
  document.getElementById("numero").value = "";
  document.getElementById("resultado").innerHTML = "resultado";

  numeroAleatorio = Math.floor(Math.random() * 3) + 1;
};
