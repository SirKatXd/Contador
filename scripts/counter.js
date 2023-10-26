// Contador //
let contador = 0;
let maxIntentos = 0;

//Funciones de control del contador//
function incrementarContador() {
  contador++;
  document.getElementById("contador").innerHTML = contador;
  var intentosInput = document.getElementById("intentosFb");
  maxIntentos = parseInt(intentosInput.value);

  if (contador > maxIntentos) {
    alert("Se alcanzó la cantidad máxima de intentos.");
    contador = maxIntentos;
  }

  document.getElementById("contador").textContent = contador;
}

function reducirContador() {
  contador--;
  document.getElementById("contador").innerHTML = contador;

  if (contador < 0) {
    alert("Los numeros negativos no están permitidos >:v ");
    reiniciarContador();
  }
}

function reiniciarContador() {
  contador = 0;
  document.getElementById("contador").innerHTML = contador;
  document.getElementById("contador").textContent = contador;
}

//Funciones de control para los intentos

function borrarIntentos() {
  var intentosInput = document.querySelector('input[name="intentosFb"]');
  intentosInput.value = "";
}

//Identificador de intentos//

function obtenerValorIntentos() {
  var intentosInput = document.getElementById("intentosFb");
  var valorIntentos = intentosInput.value;
  console.log("El valor del campo de intentos es: " + valorIntentos);
}
