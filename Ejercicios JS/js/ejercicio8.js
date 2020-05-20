let numero = prompt ( "ingresar numero" )

/**% es un modulo, se usa en este caso para saber si el valor es divisible */
if ( (parseInt (numero) % 2 ) == 0 )

{
    document.write ( numero + " Es divisible por 2 " )
}

else {
    document.write ( numero + " no es divisible por 2 " )
}