$(document).ready(function () {
  $("#buscar").click(function () {
    var texto = $("#texto").val();
    var busqueda = $("#busqueda").val();

    var regex = new RegExp(busqueda, "gi");

    var resultados = texto.match(regex);

    if (resultados) {
      $("#sin-resultados").addClass("d-none");
      $("#resultados").html(
        "Se encontraron " +
          resultados.length +
          " coincidencias:<br>" +
          resultados.join("<br>")
      );
    } else {
      $("#sin-resultados").removeClass("d-none");
    }
  });
});
