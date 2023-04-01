$(document).ready(function () {
  $("form").submit(function (e) {
    e.preventDefault();
    var num = $("#numberInput").val();

    if (num % 1 !== 0 || num < 0) {
      $("#result").text("Ingresa un número entero positivo válido");
      return;
    }

    if (num % 2 === 0) {
      $("#result").text(num + " es un número par");
    } else {
      $("#result").text(num + " es un número impar");
    }
  });
});
