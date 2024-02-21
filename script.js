function calcularHidratacion(){
    var peso = document.getElementById("peso").value;
    var resultadoElemento = document.getElementById("resultado");

   

    // Weight convertion to a number
    peso = parseFloat(peso);

    //Calculate hydration according to the given rules
    var hidratacion = 0;
    var sc=((peso*4)+7)/(peso+90);
    var mantenimiento = 0;
    var mm2 = 0;
     // Weight validation
     if (isNaN(peso)) {
        resultadoElemento.innerHTML = "Por favor, ingrese un valor válido para el peso.";
        return;
    }else if (peso >= 0 && peso <= 10) {
        hidratacion = peso * 100;
        mantenimiento = hidratacion/24;
        mm2=mantenimiento*1.5;
        // Show the result
        resultadoElemento.innerHTML = "La hidratación recomendada es de " + hidratacion + " cc.<br>" + " El mantinimiento diario es de " +mantenimiento +"cc/hr.<br>" + "El m+m/2 diario es de " + mm2 +"cc/hr.";
    } else if (peso > 10 && peso <= 20) {
        hidratacion = 10 * 100 + (peso - 10) * 50;
        mantenimiento = hidratacion/24;
        mm2=mantenimiento*1.5;
        // Show the result
        resultadoElemento.innerHTML = "La hidratación recomendada es de " + hidratacion + " cc.<br>" + " El mantinimiento diario es de " +mantenimiento +"cc/hr.<br>" + "El m+m/2 diario es de " + mm2 +"cc/hr.";
    } else if (peso > 20) {
        hidratacion = 10 * 100 + 10 * 50 + (peso - 20) * 20;
        mantenimiento = hidratacion/24;
        mm2=mantenimiento*1.5;
        // Show the result
        resultadoElemento.innerHTML = "La hidratación recomendada es de " + hidratacion + " cc.<br>" + " El mantinimiento diario es de " +mantenimiento +"cc/hr.<br>" + "El m+m/2 diario es de " + mm2 +"cc/hr.";
    } else if (peso > 20) {
        hidratacion = sc*1500;
        mantenimiento = hidratacion/24;
        mm2=mantenimiento*1.5;
         // Show the result
        resultadoElemento.innerHTML = "La hidratación recomendada es de " + hidratacion + " cc.<br>" + " El mantinimiento diario es de " +mantenimiento +"cc/hr.<br>" + "El m+m/2 diario es de " + mm2 +"cc/hr.";
    }
 
}