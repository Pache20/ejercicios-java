let numero1 = prompt("ingrese el primer numero");
document.write (numero1);
let numero2 = prompt("ingrese el segundo numero");
document.write (numero2);

if ( parseInt (numero1) > parseInt (numero2) )
{
     document.write ( "el numero1 es mayor al numero2" );
}
else if (parseInt(numero1) == parseInt(numero2))
{
    document.write ( "los numeros son iguales" )
}
else
{
    document.write ( "el numero 2 es mayor que el numero 1" )
} 