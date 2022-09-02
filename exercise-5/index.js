// Crea un archivo JS que contenga las siguientes líneas

// - Una variable que contenga tu altura en centímetros (entero)

const alturaEnCm = 182;

// - Una variable que contenga tu altura en metros (número de coma flotante)

const alturaEnMts = 1.87;

// - Una variable que contenga tu peso en kilogramos (número de coma flotante)

const pesoEnKg = 80.4;

// - Una variable que contenga tu altura en metros redondeada hacia arriba

const alturaEnMtsRedondeadaArriba = alturaEnMts.toFixed(1);
console.log(alturaEnMtsRedondeadaArriba);

// - Una variable que contenga tu peso en kilogramos redondeado hacia abajo

const alturaEnMtsRedondeadaAbajo = pesoEnKg.toFixed(0);
console.log(alturaEnMtsRedondeadaAbajo);

// - Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript

const maxValuePlusOne = Number.MAX_VALUE + 1 === Number.MAX_VALUE;
console.log(maxValuePlusOne);
