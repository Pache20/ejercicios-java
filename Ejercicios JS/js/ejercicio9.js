let texto = prompt("colocar el texto");
let a = 0;
let e = 0;
let i = 0;
let o = 0;
let u = 0;

for (let index = 0; index < texto.length; index++) {
  switch (texto[index]) {
    case "a":
      a++;
      break;
    case "e":
      e++;
      break;
    case "i":
      i++;
      break;
    case "o":
      o++;
      break;
    case "u":
      u++;
      break;
    case "A":
      a++;
      break;
    case "E":
      e++;
      break;
    case "I":
      i++;
      break;
    case "O":
      o++;
      break;
    case "U":
      u++;
      break;
  }
}
document.write(
  "a: " +
    a +
    "  " +
    "e: " +
    e +
    "  " +
    "i: " +
    i +
    "  " +
    "o: " +
    o +
    "  " +
    "u: " +
    u +
    "  "
);
