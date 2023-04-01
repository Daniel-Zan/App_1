function verificarEdad() {
  const nombre = document.getElementById("nombre").value;
  const edad = document.getElementById("edad").value;
  if (edad >= 18) {
    document.getElementById("resultado").innerHTML =
      nombre + " es mayor de edad.";
  } else {
    document.getElementById("resultado").innerHTML =
      nombre + " no es mayor de edad.";
  }
}
