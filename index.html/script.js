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



/*let operacion = (prompt(`¿Que operacion deseas hacer?
    
    1 = suma
    2 = resta
    3 = multiplicación
    4 = división`))

let numero1 = Number(prompt("Ingrese el primer valor"))
let numero2 = Number(prompt("Ingrese el segundo valor"))

if (operacion == 1){console.log("Su resultado es" , numero1+numero2)}

else if (operacion == 2) {console.log("Su resultado es" , numero1-numero2)}
else if (operacion == 3) {console.log("Su resultado es" ,numero1*numero2)}
else {console.log("Su resultado es" , numero1/numero2)}*/


/*let options = ["piedra", "papel", "tijera"];
let azar = Math.floor(Math.random() * 3) + 1; 
let computer = azar; 

let user = Number(prompt(`Ingrese su opción:
    1 - piedra
    2 - papel
    3 - tijera`));

console.log("Computadora: " , options[computer - 1]);
console.log("Usuario: " , options[user - 1]);

if (computer === user) {
    console.log("Empate");
} 

else if (
    (computer === 1 && user === 2) || (computer === 2 && user === 3) || (computer === 3 && user === 1)
) {
    console.log("¡Victoria!");
} 

else if (
    (computer === 1 && user === 3) || (computer === 2 && user === 1) ||  (computer === 3 && user === 2)
) {
    console.log("Derrota");
} 

else {
    console.log("Por favor, ingrese un valor válido: 1, 2 o 3");
}*/

let numeros = [ 2 , 5 , 7 , 12 , 0 , 17 , 22];
let pares = []
let impares = []

for (let i = 0; i < numeros.length; i++) { 
    
    if (numeros[i] % 2 === 0) {
        pares.push(numeros[i]);
    } else {
        impares.push(numeros[i]);
    }
}

console.log("Los números pares son:", pares);
console.log("Los números impares son:", impares);