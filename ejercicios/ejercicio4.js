//Opcion 2 del codigo filtrar.js
//Codigo sin expresiones ragulares

var expresion = new RegExp(this.value,"i");
if(!expresion.test(nombre)){
paciente.classList.add("invisible");
} else {
paciente.classList.remove("invisible");
} 

var string = "Alura";
var resultado = string.substring(1,4);

nombre.substring(0, this.value.length);

var comparar = nombre.substring(0, this.value.length);
if(!(this.value == comparar)){
paciente.classList.add("invisible");
} else {
paciente.classList.remove("invisible");
} 

var comparar = nombre.substring(0, this.value.length);
var compararMinuscula = comparar.toLowerCase();
var valorDigitadoMinuscula = this.value.toLowerCase();
if(!(valorDigitadoMinuscula  == compararMinuscula )){
paciente.classList.add("invisible");
} else {
paciente.classList.remove("invisible");
} 