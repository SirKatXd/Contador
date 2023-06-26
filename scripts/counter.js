let contador = 0;

function incrementarContador() {
  contador++
  document.getElementById("contador").innerHTML = contador;
}

function reducirContador() {
  contador--
  document.getElementById("contador").innerHTML = contador;

  if(contador<0){
    
    alert("Los numeros negativos no están permitidos >:v ")
    reiniciarContador()
  
  }
}


function reiniciarContador() {
  contador = 0
  document.getElementById("contador").innerHTML = contador;


}

function borrarIntentos() {
  var intentosInput = document.querySelector('input[name="intentosFb"]');
  intentosInput.value = '';
}
