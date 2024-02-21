function calcularHidratacion() {
    var peso = document.getElementById("peso").value;
    var resultadoElemento = document.getElementById("resultado");

    // Weight validation
    if (isNaN(peso)) {
        resultadoElemento.textContent = "Por favor, ingrese un valor válido para el peso.";
        return;
    }

    // Weight convertion to a number
    peso = parseFloat(peso);

    // Calcular la hidratación según las reglas dadas
    var hidratacion = 0;
    if (peso >= 0 && peso <= 10) {
        hidratacion = peso * 100;
    } else if (peso > 10 && peso <= 20) {
        hidratacion = 10 * 100 + (peso - 10) * 50;
    } else if (peso > 20) {
        hidratacion = 10 * 100 + 10 * 50 + (peso - 20) * 20;
    }
    // Show the result
    resultadoElemento.textContent = "La hidratación recomendada es de " + hidratacion + " cc.";
}