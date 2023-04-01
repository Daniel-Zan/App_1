$(document).ready(function () {
  const button = document.getElementById("calcular");
  const numeros = document.getElementById("numeros");
  const resultado = document.getElementById("resultado");

  button.addEventListener("click", function () {
    const lista = numeros.value.split(",");
    let pares = "";
    let impares = "";

    for (let i = 0; i < lista.length; i++) {
      let num = parseInt(lista[i]);
      if (num % 2 === 0) {
        pares += num + ", ";
      } else {
        impares += num + ", ";
      }
    }

    if (pares === "") {
      resultado.innerHTML = "No hay números pares.";
    } else {
      resultado.innerHTML = "Pares: " + pares.slice(0, -2) + ".";
    }

    if (impares === "") {
      resultado.innerHTML += "<br>No hay números impares.";
    } else {
      resultado.innerHTML += "<br>Impares: " + impares.slice(0, -2) + ".";
    }
  });
});
