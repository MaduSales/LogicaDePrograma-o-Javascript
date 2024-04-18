var Celsius, Fahrenheit;

Fahrenheit = parseInt(prompt("Digite a temperatura em Fahrenheit"));
Celsius = (Fahrenheit - 32) * 5/9;
alert("Em Celsius, os graus " + Fahrenheit + " serão " + Celsius + " °C");