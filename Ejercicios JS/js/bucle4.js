let texto = 0;
let input;
let letra = 0;

while (true) {
  letra = parseInt(prompt("Ingresar un numero"));
  if (isNaN (letra) == true) {
      alert ("por favor ingrese un numero");
  }else {
      texto += letra;
  }
  input = confirm("Desea seguir!");
  if (input == false) {
    document.write(texto);
    break;
  }
}
