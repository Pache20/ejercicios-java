
let divis2 = parseInt(
  prompt("colocar numero para saber si es divisible por 2, 3, 5, 7")
);

if (divis2 % 2 == 0) {
  document.write("el numero es divisible por 2 <br>");
}

if (divis2 % 3 == 0) {
  document.write("el numero es divisible por 3 <br>");
}

if (divis2 % 5 == 0) {
  document.write("el numero es divisible por 5 <br>");
}

if (divis2 % 7 == 0) {
    document.write("el numero es divisible por 7 <br>");
}

if ((divis2 % 2 !==0) && (divis2 % 3 !==0) && (divis2 % 5 !==0) && (divis2 % 7 !==0) ) {
    document.write ("no es posible dividir el numero");
}