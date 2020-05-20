let dia = parseInt(
  prompt(
    "seleccione un numero: 1-lunes 2-martes 3-miercoles 4-jueves 5-viernes 0-sabado/domingo"
  )
);

//switch ( condicion ){
//    case 1:
//        codigo a ejecutar si la condicion es igual 1;
//        break;
//    case 2:
//        codigo;
//            break;
//    case 3:
//        codigo;
//            break;
//    default:
//        codigo;
//}

switch (dia) {
  case 1:
    document.write("el dia seleccionado es lunes");
    break;
  case 2:
    document.write("el dia seleccionado es martes");
    break;
  case 3:
    document.write("el dia seleccionado es miercoles");
    break;
  case 4:
    document.write("el dia seleccionado es jueves");
    break;
  case 5:
    document.write("el dia seleccionado es viernes");
    break;
  case 0:
    document.write("el dia seleccionado es sabado o domingo");
    break;
  default:
    document.write("la opcion ingresada es incorrecta");
}
