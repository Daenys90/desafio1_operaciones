// ejercicio 1 - números


var numero1 = parseInt(prompt("Ingrese un número entero difente a 0:"));
var numero2 = parseInt(prompt("Ingrese otro número entero diferente a 0 y al anterior:"));

// Verificar si los números son diferentes y mayores a cero
if (numero1 !== numero2 && numero1 > 0 && numero2 > 0) {
 
  var suma = numero1 + numero2;
  console.log("Suma:", suma);

  // Calcular la resta
  var resta = numero1 - numero2;
  console.log("Resta:", resta);

  // Calcular la división
  var division = numero1 / numero2;
  console.log("División:", division);

  // Calcular la multiplicación
  var multiplicacion = numero1 * numero2;
  console.log("Multiplicación:", multiplicacion);

  // Calcular el módulo
  var modulo = numero1 % numero2;
  console.log("Módulo:", modulo);
} else {
  console.log("Los números deben ser diferentes y mayores a cero.");
}

// ejercicio 2 - temperatura



// ejercicio 3 - días




// ejercicio 4 - cálculos