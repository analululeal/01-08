const texto = document.getElementById("meuTexto");

document.getElementById("mudarCor").addEventListener("click", function() {
  texto.style.color = "blue";
});

document.getElementById("mudarTexto").addEventListener("click", function() {
  texto.textContent = "O texto foi alterado com sucesso!";
});

document.getElementById("esconderTexto").addEventListener("click", function() {
  texto.style.display = "none";
});

document.getElementById("mostrarTexto").addEventListener("click", function() {
  texto.style.display = "block";
});
