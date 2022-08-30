//Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break

let n = 10;
let fact = n - 1;

while (fact > 0) {
  n = n * fact;
  fact--;
  console.log(n);

  if (fact === 1) {
    break;
  }
}
