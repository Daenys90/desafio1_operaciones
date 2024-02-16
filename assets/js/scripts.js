// ejercicio 1 - números


var numero1 = parseInt(prompt("Ingrese un número entero diferente a 0:"));
var numero2 = parseInt(prompt("Ingrese otro número entero diferente a 0 y al anterior:"));

// Verificar si los números son diferentes y mayores a cero
if (numero1 !== numero2 && numero1 > 0 && numero2 > 0) {
 
  var suma = numero1 + numero2;
  document.write("Suma: ", suma, "<hr>");

  // Calcular la resta
  var resta = numero1 - numero2;
  document.write("Resta: ", resta, "<hr>");
  // Calcular la división
  var division = numero1 / numero2;
  document.write("División: " + division,"<hr>");

  // Calcular la multiplicación
  var multiplicacion = numero1 * numero2;
  document.write("Multiplicación: " + multiplicacion, "<hr>");
  // Calcular el módulo
  var modulo = numero1 % numero2;
  document.write("Módulo: ", modulo, "<hr>");
} else {
  alert("Los números deben ser diferentes y mayores a cero.");
}



// ejercicio 2 - temperatura



// ejercicio 3 - días




// ejercicio 4 - cálculos