//solicitar al usuario 5 números y guardarlos en sus variables correspondientes

var num1 = parseFloat(prompt("Ingrese primer número"));
var num2 = parseFloat(prompt("Ingrese segundo número"));
var num3 = parseFloat(prompt("Ingrese tercer número"));
var num4 = parseFloat(prompt("Ingrese cuarto número"));
var num5 = parseFloat(prompt("Ingrese quinto número"));

//sumar los numeros
var sumar = num1 + num2 + num3 + num4 + num5;

//sacar promedios
var promedio = sumar / 5;

//mostrar resultados
document.write("Los números ingresados son ", num1, " , ", num2, " , ", num3, " , ", num4, " , ", num5, ".<hr>");
document.write("La suma de los números ingresados es ", sumar, "<hr>");
document.write("El promedio de los números ingresados es ", promedio);

