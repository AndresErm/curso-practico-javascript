let calcularPromedioFinal = function(listaCalificaciones = [], totalDeCalificaciones){

    let savedListCalificaciones = listaCalificaciones;
    let savedTotalCalificaciones = totalDeCalificaciones;
    console.log("Parciales: " + "                      PRIMERO" + "               SEGUNDO     " + "          TERCERO") ;
    console.log( "Estas son tus calificaiones :       " 
    + savedListCalificaciones[0] + "          |          " + 
    + savedListCalificaciones[1] +  "          |          " 
    + savedListCalificaciones[2]  );
    console.log( "Total de calificaciones:  " + savedTotalCalificaciones);
    

    // ReduceRight reduce todo los valores de un array, sumandolos,
    let getCalificacionesSuma = savedListCalificaciones.reduceRight(function(valorPrevio, valorActual,){
        return valorPrevio + valorActual;
    });

    console.log("Suma total de todas las calificaciones:  " + getCalificacionesSuma +" / " + savedTotalCalificaciones);
    let formulaCalPromedioFinal =  getCalificacionesSuma / savedTotalCalificaciones;



    let showPromedioFinal = console.log( "PROMEDIO FINAL : " + formulaCalPromedioFinal);

    return showPromedioFinal;


}





 

