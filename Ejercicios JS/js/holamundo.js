//este mensaje se muestra en la consola del navegador
console.log("hola mundo :)");

//este mensaje es como una ventana emergente en el navegador
//alert("hola usuarios");

//este mensaje se imprime dentro del html de mi sitio
document.write("Hola mundo :D ");

//declaracion de variable
let nombre = "Juan";

document.write("Hola " + nombre);

//declaracion de variables: let - var - const

var edad = 30;
let age = 29;

document.write("<br> Variables var y let")
document.write("<br> Edad = "+ edad);
document.write("<br> Edad = "+ age);

edad = 25;
age = 30;

document.write("<br> Modificamos el valor de edad y age")
document.write("<br> Edad = "+ edad);
document.write("<br> Edad = "+ age);

const url = "https://google.com";
document.write("<br> URL= "+url);

//url = "algun texto";
//document.write("<br> URL= "+url);

//operador unitario
let contador = 1;
document.write ("<br> contador= "+contador);
contador++; //contador = contador mas 1 los ++ o -- sirven para sumar o restar
document.write ("<br> contador= "+contador);