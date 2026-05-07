let opcion = Number(prompt(
    "seleccione un ejercicio :"+
    "1. validar si es mayor de edad"+
    "2. validar si un numero es positivo , negativo y cero" +
    "3.evaluar notas"+
    "4.dia de la semana"+
    "tabal de multiplicar"
));
if (opcion === 1){
    let edad= Number(prompt("ingrese su edad"))
    if (edad >=18){
        alert("eres mayor de edad");
    } else {
        alert("eres menor de edad")
    }
} else if (opcion ===2){
    let num=Number(prompt("ingrese un numero :"))
    if (num>0){
        alert("el numero es positivo");
    }      else if (num < 0) {
        alert("el numero es negativo")
    } else {
        alert("el numero es 0")
    }
} else if (opcion===3){
    let nota = Number(prompt("ingrese una nota entre 1 y 7"))
    if (nota>=6 && nota<=7){
        alert("excelente")
    } else if (nota >= 4 && nota >6){
            alert("aprobado")
    } else if (nota >=1 && nota <4){
            alert("reprobado")
    } else {
        alert("nota invalida")
    }   
} else if (opcion ===4){
    let dia = Number (prompt("ingrese dia de la semana del 1 al 7 :"))
    switch (dia) {
        case 1:
            alert("lunes")
            break
        case 2:
            alert("martes")
            break
        case 3:
            alert("miercoles")
            break
        case 4:
            alert("jueves")
            break
        case 5:
            alert("viernes")
            break
        case 6:
            alert("sabado")
            break
        case 7:
            alert("domingo")
            break
        default:
            alert("numero no valido, debe ingresar entre dia de la semana del 1 al 7")
    }
} else if (opcion ===5){
    let num=Number(prompt("ingrese un numero para generar su tabla:"))
    console.log(`tabla de multiplicar ${num}`);
    for (let i =1; i<= 10; i++)(
        console.log(`${num} x ${i}=${num*1}`)
    )
}
else{
    alert("opcion no valida debe seleccionar entre el 1 al 9")

}