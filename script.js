const CALCULAR = document.getElementById("calculadoraBuena");
const RESULTADO = document.getElementById("resultado");
const INPUT = document.getElementById("peso");
CALCULAR.addEventListener("click", calcularHidratacion);
function calcularHidratacion() {
  var peso = document.getElementById("peso").value;
  var resultadoElemento = document.getElementById("resultado");

  // Weight convertion string to a float
  peso = parseFloat(peso);

  //Calculate hydration according to the given rules
  var hidratacion = 0;
  var mantenimiento = 0;
  var mm2 = 0;

  // Weight validation and calculation
    if(peso<=0){
      resultadoElemento.innerHTML ="Por favor ingresar los datos de manera correcta";
      resultado.style.display= "block";
    return;
  } else if(isNaN(peso)) {
      resultadoElemento.innerHTML ="Por favor ingresar los datos";
      resultado.style.display= "block";
    return;
  }else if ( peso <= 10) {
      hidratacion = peso * 100;
  } else if (peso <= 20) {
      hidratacion = 1000 + (peso - 10) * 50;
  } else if (peso > 20) {
      hidratacion = 1500 + (peso - 20) * 20;
  } else if (peso > 30) {
      hidratacion = calculoSC(peso) * 1500;
  }
  // Calculate maintenance and m+m/2 values
  mantenimiento = hidratacion / 24;
  mm2 = mantenimiento * 1.5;
  // Show the result
  resultadoElemento.innerHTML =
    hidratacion +
    " cc.<br>" +
    mantenimiento.toFixed(2) +
    "cc/hr.<br>" +
    mm2 +
    "cc/hr.";
  RESULTADO.style.display = "block";
}
// Function to calculate SC value based on weight
function calculoSC(peso) {
  return (peso * 4 + 7) / (peso + 90);
}

