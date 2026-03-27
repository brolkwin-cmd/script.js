let costoCena = Number(prompt(`¿Cuanto costo la cena?`));
let comensales = Number(prompt(`¿Cuantas comenzales hubo en la cena?`));
let gloton = (prompt(`¿Quien fue la persona que más comío?`));
let anemico = (prompt(`¿Quien fue la persona que comio menos?`))
let totalfraccion = 2 + 0.5 + (comensales - 2 )
let valorfraccion = costoCena / totalfraccion
let valorgloton = valorfraccion * 2
let valoranemico = valorfraccion * 0.5  
let preciofinal = valorfraccion





console.log(`Gracias por comer con nosotros: en total son: $${costoCena}, y fueron ${comensales} comensales, pero ${gloton}, fue el que más consumio, por lo tanto pagará: ${valorgloton.toFixed(2)}, y ${anemico} fue el que menos comio, por lo que debera pagar: $ ${valoranemico.toFixed(2)}, por lo tanto, todos los demás deben cancelar: ${valorfraccion.toFixed(2)}`); 




s