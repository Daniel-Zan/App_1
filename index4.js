$(document).ready(function () {
  $("#calcular").click(function () {
    var nombre = $("#nombre").val();
    var materia = $("#materia").val();
    var nota1 = parseFloat($("#nota1").val());
    var nota2 = parseFloat($("#nota2").val());
    var nota3 = parseFloat($("#nota3").val());
    var promedio = (nota1 + nota2 + nota3) / 3;
    var resultado = "";
    if (promedio >= 3.0) {
      resultado =
        "<span style='color:green'>¡Felicitaciones, " +
        nombre +
        "! Aprobaste la materia de " +
        materia +
        " con un promedio de " +
        promedio.toFixed(2) +
        ".</span>";
    } else {
      resultado =
        "<span style='color:red'>Lo siento, " +
        nombre +
        ", no aprobaste la materia de " +
        materia +
        " con un promedio de " +
        promedio.toFixed(2) +
        ".</span>";
    }
    $("#resultado").html(resultado);
  });
});
