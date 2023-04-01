$(document).ready(function() {

  let nombre = $('#nombre').val();
  let materia = $('#materia').val();
  let nota1 = parseFloat($('#nota1').val());
  let nota2 = parseFloat($('#nota2').val());
  let nota3 = parseFloat($('#nota3').val());


  let promedio = (nota1 + nota2 + nota3) / 3;

 
  let resultado = $('#resultado');

 
  if (promedio >= 3.0) {
    resultado.html(`${nombre}, ¡felicitaciones! Has aprobado la materia de ${materia} con un promedio de ${promedio.toFixed(2)}.`);
    resultado.removeClass('text-danger');
    resultado.addClass('text-success');
  } else {
    resultado.html(`${nombre}, lo siento pero has reprobado la materia de ${materia} con un promedio de ${promedio.toFixed(2)}.`);
    resultado.removeClass('text-success');
    resultado.addClass('text-danger');
  }
});