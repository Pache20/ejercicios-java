document.write ("1-");
document.write ("<br>2-");
document.write ("<br>3-");
document.write ("<br>4-");
document.write ("<br>5-");

//Bucles while

//while(condicion){
//    aqui va el codigo que quiero que se ejecute
//    condicion=falso;
//}

let i = 0;
while (i <= 5){
    document.write ("<br>linea -"+i);
    i++; //i=i+1;
}

//do-while (hacer mientras se cumpla la condicion)

//do{
//    aqui va mi codigo
//}while (condicion)

let x = 1;
do{
    document.write ("<br> numero:"+ x)
    x++;
}while (x<=25)

//for(inicializacion; condicion; incrementador)

for(let a = 30; a>=10; a=a-2){
    document.write("<br> numeros creados con for:"+a);
}