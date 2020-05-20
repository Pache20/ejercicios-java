let frase = prompt("ingrese una frase");
let cantidad = frase.length;

document.write("cantidad de caracteres:" + cantidad);

for (let i = 0; i < cantidad; i++) {
  document.write("<br>" + frase.substr(i, 1) + "-");
  if (
    frase.substr(i, 1) == "a" ||
    frase.substr(i, 1) == "e" ||
    frase.substr(i, 1) == "i" ||
    frase.substr(i, 1) == "o" ||
    frase.substr(i, 1) == "u"
  ) {
    document.write("<br>" + frase.substr(i, 1) + "-");
  }
}
