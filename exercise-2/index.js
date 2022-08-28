//  Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:

// - Tu nombre (string)

// - Tu edad (number)

// - ¿Eres desarrollador? (boolean)

// - Tu fecha de nacimiento (Date)

// - Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)

const me = [
  "Mark",
  30,
  true,
  new Date("may 27 1992"),
  {
    name: "Werther",
    author: "Goethe",
    year: 1774,
    url: "www.ebooks.com/werther",
  },
];

console.log(me);
