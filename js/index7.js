$(document).ready(function () {
  $("#form").submit(function (event) {
    event.preventDefault();
    var num1 = $("#num1").val();
    var num2 = $("#num2").val();
    if (num1 % num2 == 0) {
      $("#result").text(num1 + " es divisible por " + num2);
    } else if (num2 % num1 == 0) {
      $("#result").text(num2 + " es divisible por " + num1);
    } else {
      $("#result").text("Los números no son divisibles entre sí");
    }
  });
});
