$(document).ready(function () {
  $("#texto").keyup(function () {
    var cantidad = $(this).val().length;
    $("#contador").text(cantidad);
  });
});
