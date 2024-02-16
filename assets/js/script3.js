// input de días

var  input = parseInt(prompt("Ingrese una cantidad de días"));

// transformar en años
var years = (Math.floor
(input / 365));
//esto me da la cantidad de años pero si me queda sobrando?

//calcular meses
var months = (Math.floor((input % 365)/30));

// calcular dias
var days = ((input%365)%30);


document.write(days, " días equivale a ", years, " años, ", months, " meses y ",
days, " días.");

