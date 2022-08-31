// Crea un archivo JS que contenga las siguientes líneas

// - Una cadena de texto con tu Nombre
const name = "Steven";

// - Otra cadena de texto con tu Apellido
const lastName = "Alvarado";

// - Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
const estudiante = `${name} ${lastName}`;

// - Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
const estudianteMayus = estudiante.toUpperCase();

// - Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
const estudianteMinus = estudiante.toLowerCase();

// - Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
const estudianteLength = estudiante.length;

// - Una variable que contenga la primera letra del Nombre
const firstWorldOfName = name[0];

// - Otra variable que contenga la última letra del Apellido
const lastNameLength = lastName.length;
const lastWorldOfLastName = lastName.charAt(lastNameLength - 1);

// - Una cadena de texto que elimine los espacios de la variable "estudiante"
const estudianteWithNoSpaces = estudiante.split(" ").join("");

// - Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
const nombreInEstudiante = estudiante.includes(name);
