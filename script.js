const button = document.querySelector("#fale");

button.addEventListener("click", faleComigo);

function faleComigo() {
  const divContato = document.querySelector(".contato");

  divContato.innerText = "Olá pessoa, deu certo!";
}
