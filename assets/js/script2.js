// ingresar la temperatura en grados Celsius

var celsius = parseInt(prompt("Ingrese la temperatura en Celsius"));

// transformar en Kelvin

var kelvin = celsius + 273.75;
document.write(celsius, " grados Celsius equivalen a ", kelvin, " grados Kelvin <hr>");

//transformar en Fahrenheit

var fahren = ((celsius * (9/5)) + 32);  

document.write(celsius, " grados Celsius equivalen a ", fahren, " grados Fahrenheit <hr>");
