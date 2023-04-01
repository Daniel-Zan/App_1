$(document).ready(function () {
  $("#verificar").on("click", function () {
    const valor = $("#valor").val();
    if (isNaN(valor)) {
      $("#resultado").text("El valor ingresado es un texto");
    } else {
      $("#resultado").text("El valor ingresado es un número");
    }
  });
});
