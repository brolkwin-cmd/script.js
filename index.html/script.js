/*let promedioNotas =  []
let nota1 = Number(prompt("Ingrese la primera nota a promediar"))
let nota2 = Number(prompt("Ingrese la SEgunda nota a promediar"))
let nota3 = Number(prompt("Ingrese la Tercera nota a promediar"))
let nota4 = Number(prompt("Ingrese la Cuarta nota a promediar"))
let nota5 = Number(prompt("Ingrese la Quintaa nota a promediar"))
promedioNotas.push(nota1,nota2,nota3,nota4,nota5)
let promedio = (nota1+nota2+nota3+nota4+nota5)/(promedioNotas.length)
console.log(promedio)*/


/*let precioProducto = Number(prompt("Ingrese el valor del producto"))

if(precioProducto <= 100 )
    { console.log(precioProducto * 1.1)
}
else if (precioProducto>100 && precioProducto<=200)
    { console.log(precioProducto * 0.9)}

else console.log (precioProducto * 0.75)*/



let operacion = (prompt(`¿Que operacion deseas hacer?
    
    1 = suma
    2 = resta
    3 = multiplicación
    4 = división`))

let numero1 = Number(prompt("Ingrese el primer valor"))
let numero2 = Number(prompt("Ingrese el segundo valor"))

if (operacion == 1){console.log("Su resultado es" , numero1+numero2)}

else if (operacion == 2) {console.log("Su resultado es" , numero1-numero2)}
else if (operacion == 3) {console.log("Su resultado es" ,numero1*numero2)}
else {console.log("Su resultado es" , numero1/numero2)}




