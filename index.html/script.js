let promedioNotas =  []
let nota1 = Number(prompt("Ingrese la primera nota a promediar"))
let nota2 = Number(prompt("Ingrese la SEgunda nota a promediar"))
let nota3 = Number(prompt("Ingrese la Tercera nota a promediar"))
let nota4 = Number(prompt("Ingrese la Cuarta nota a promediar"))
let nota5 = Number(prompt("Ingrese la Quintaa nota a promediar"))

promedioNotas.push(nota1,nota2,nota3,nota4,nota5)
let promedio = (nota1+nota2+nota3+nota4+nota5)/(promedioNotas.length)
console.log(promedio)

