let valor = prompt("valor");

if(parseInt(valor)% 2 == 0)
{
    console.log("Divisible 2");
}else
{
    if(parseInt(valor)% 3 == 0)
    {
        console.log("Divisible 3");
    }else
    {
        if(parseInt(valor)% 5 == 0)
        {
            console.log("Divisible 5");
        }else
        {
            if(parseInt(valor)% 7 == 0)
            {
                console.log("Divisible 7");
            }
        }
    }
}