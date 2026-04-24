const list = [
  {
    nombre: "Mateo",
    apellidos: "Alzate",
    edad: 31,
    ciudad: "Bogota",
    altura: 1.75,
    peso: 95,
  },
  {
    nombre: "Sofia",
    apellidos: "Gomez",
    edad: 28,
    ciudad: "Medellin",
    altura: 1.65,
    peso: 60,
  },
  {
    nombre: "Valentina",
    apellidos: "Rodriguez",
    edad: 25,
    ciudad: "Cali",
    altura: 1.70,
    peso: 55,
  }
];

function calcularIMC(peso, altura) {
  return peso / (altura ** 2);
}

function calcularG (calcularIMC) {
  if (calcularIMC < 18.5) {
    return "Bajo peso" ;
  } else if (calcularIMC < 25) {
    return "Peso normal" ;
 } else if (calcularIMC < 30) {
    return "Un poco pasado de peso" ;
  } else {
    return "Sobrepeso" ;
  }
}

for ( let i = 0; i < list.length; i++) {
console.log(`Nombre: ${list[i].nombre}, Apellidos: ${list[i].apellidos}, Edad: ${list[i].edad}, Ciudad: ${list[i].ciudad}, Altura: ${list[i].altura}m, Peso: ${list[i].peso}kg, IMC: ${calcularIMC(list[i].peso, list[i].altura).toFixed(2)}`);


} 