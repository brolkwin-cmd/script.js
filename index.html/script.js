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

/*let numeros = [ 2 , 5 , 7 , 12 , 0 , 17 , 22];
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
console.log("Los números impares son:", impares);*/



/*let numeros = [1, 6, 23, 5, 9];
let suma = 0;
let max = numeros[0];

for (let i = 0; i < numeros.length; i++) {
    suma = + numeros[i]; 

    if (numeros[i] > max) {
        max = numeros[i];
    }
}
console.log(`La suma total es: ${suma}`);
console.log(`El número mayor es: ${max}`);*/



/*let btn1 = document.getElementById(`btn1`)
let btn2 = document.getElementById(`btn2`)
let btn3 = document.getElementById(`btn3`)

btn1.addEventListener(`click`, ()=>{

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
 })

 btn2.addEventListener(`click`, ()=>{
let options = ["piedra", "papel", "tijera"];
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
}
 })

  btn3.addEventListener(`click`, ()=>{
let promedioNotas =  []
let nota1 = Number(prompt("Ingrese la primera nota a promediar"))
let nota2 = Number(prompt("Ingrese la SEgunda nota a promediar"))
let nota3 = Number(prompt("Ingrese la Tercera nota a promediar"))
let nota4 = Number(prompt("Ingrese la Cuarta nota a promediar"))
let nota5 = Number(prompt("Ingrese la Quintaa nota a promediar"))
promedioNotas.push(nota1,nota2,nota3,nota4,nota5)
let promedio = (nota1+nota2+nota3+nota4+nota5)/(promedioNotas.length)
console.log(promedio)
 })*/
 



const celulares = [
    // --- GAMA ALTA ---
    { nombre: "iPhone 15 Pro", categoria: "Gama Alta", imagen: "https://placehold.co/400x400?text=iPhone+15+Pro" },
    { nombre: "Samsung S24 Ultra", categoria: "Gama Alta", imagen: "https://placehold.co/400x400?text=S24+Ultra" },
    { nombre: "Google Pixel 8 Pro", categoria: "Gama Alta", imagen: "https://placehold.co/400x400?text=Pixel+8+Pro" },
    { nombre: "Xiaomi 14 Ultra", categoria: "Gama Alta", imagen: "https://placehold.co/400x400?text=Xiaomi+14" },
    { nombre: "OnePlus 12", categoria: "Gama Alta", imagen: "https://placehold.co/400x400?text=OnePlus+12" },
    { nombre: "Samsung Z Fold 5", categoria: "Gama Alta", imagen: "https://placehold.co/400x400?text=Z+Fold+5" },
    { nombre: "Sony Xperia 1 V", categoria: "Gama Alta", imagen: "https://placehold.co/400x400?text=Xperia+1" },

    // --- GAMA MEDIA ---
    { nombre: "Nothing Phone (2)", categoria: "Gama Media", imagen: "https://placehold.co/400x400?text=Nothing+2" },
    { nombre: "Samsung Galaxy A54", categoria: "Gama Media", imagen: "https://placehold.co/400x400?text=Galaxy+A54" },
    { nombre: "Google Pixel 7a", categoria: "Gama Media", imagen: "https://placehold.co/400x400?text=Pixel+7a" },
    { nombre: "Motorola Edge 40", categoria: "Gama Media", imagen: "https://placehold.co/400x400?text=Moto+Edge+40" },
    { nombre: "Redmi Note 13 Pro", categoria: "Gama Media", imagen: "https://placehold.co/400x400?text=Redmi+Note+13" },
    { nombre: "Poco F5 Pro", categoria: "Gama Media", imagen: "https://placehold.co/400x400?text=Poco+F5" },
    { nombre: "Realme 11 Pro+", categoria: "Gama Media", imagen: "https://placehold.co/400x400?text=Realme+11" },

    // --- GAMA ENTRADA ---
    { nombre: "Samsung Galaxy A14", categoria: "Gama Entrada", imagen: "https://placehold.co/400x400?text=Galaxy+A14" },
    { nombre: "Motorola Moto G23", categoria: "Gama Entrada", imagen: "https://placehold.co/400x400?text=Moto+G23" },
    { nombre: "Redmi 12C", categoria: "Gama Entrada", imagen: "https://placehold.co/400x400?text=Redmi+12C" },
    { nombre: "Nokia G42", categoria: "Gama Entrada", imagen: "https://placehold.co/400x400?text=Nokia+G42" },
    { nombre: "Honor X6", categoria: "Gama Entrada", imagen: "https://placehold.co/400x400?text=Honor+X6" },
    { nombre: "ZTE Blade V50", categoria: "Gama Entrada", imagen: "https://placehold.co/400x400?text=ZTE+Blade" }
];

let title = document.querySelector(`h1`);
let container = document.querySelector(`section`);

 console.log(container);

 for (let i = 0; i < celulares.length; i++) {
    let nombre = celulares[i].nombre;
    let imagen = celulares[i].imagen;

container.innerHTML += `

<div class="card">
        <div class="img">
            <img src="${imagen}" alt="">
            <p>${nombre}</p>
        </div>
    </div>`; }


/*<div class="card">
    <div class="img">
        <img src="https://cdn.pixabay.com/animation/2022/10/21/02/41/02-41-36-956_512.gif" alt="">
        <p>Celulares</p>
    </div>
*/

