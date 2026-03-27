/*let costoCena = Number(prompt(`¿Cuanto costo la cena?`));
let comensales = Number(prompt(`¿Cuantas comenzales hubo en la cena?`));
let gloton = (prompt(`¿Quien fue la persona que más comío?`));
let anemico = (prompt(`¿Quien fue la persona que comio menos?`))
let totalfraccion = 2 + 0.5 + (comensales - 2 )
let valorfraccion = costoCena / totalfraccion
let valorgloton = valorfraccion * 2
let valoranemico = valorfraccion * 0.5  
let preciofinal = valorfraccion





console.log(`Gracias por comer con nosotros: en total son: $${costoCena}, y fueron ${comensales} comensales, pero ${gloton}, fue el que más consumio, por lo tanto pagará: ${valorgloton.toFixed(2)}, y ${anemico} fue el que menos comio, por lo que debera pagar: $ ${valoranemico.toFixed(2)}, por lo tanto, todos los demás deben cancelar: ${valorfraccion.toFixed(2)}`); */


let valorCdt = Number(prompt(`¿Con que monto quieres abrir tu CDT?`));
let meses1 = Number(prompt(`¿Cuantos meses vas a guardar este dinero?`));
let interes = 10 / 12 
let iinteresmes = (valorCdt * interes)/100
let valorcapital = valorCdt + (iinteresmes * meses1)

console.log(`Gracias por ahorrar con nosotros: tu CDT por valor de: ${valorCdt}, a  ${meses1} de meses. 
    Tiene un interes de1 10% Anual: por lo que mensualmente acumular: ${iinteresmes.toFixed(2)} de interes ganado!
    Al finalizar los ${meses1} de meses., obtendras un total de: $ ${valorcapital .toFixed(2)}`)
    

