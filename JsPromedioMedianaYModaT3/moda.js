let obtenerValores = function(lista){
    let getObj = lista.sort(function(a,b){
      return  a - b;
    });
    
    for(let i = 0; i < getObj.length; i++){
       
        if(i === getObj[i]){
            getObj[i] = getObj[i] + 1;
        }
         return console.log("     [ "+ `${getObj}` + " ]");
    }  
    
} 

let encontrarRepetidos = function(lista){
  
    let repetidos = [];
    for(let i = 0; i < lista.length; ++i){
        // console.log( lista.slice(i + 1));
        if( i + 1 < lista.length && lista.slice(i + 1).indexOf(lista[i])
        != -1 && repetidos.indexOf(lista[i]) == -1){ 
            repetidos.push( lista[i] );
        }
    }
    return repetidos;
}

let calModa = function(getResultadoValues){

    if(getResultadoValues[0] >= getResultadoValues[1]){
        console.log("Valor de la Moda : " + getResultadoValues[0] );
    }else if(getResultadoValues[0] <= getResultadoValues[1]){
        console.log("Valor de la Moda : " + getResultadoValues[1] );
    }else if(getResultadoValues[1] >= getResultadoValues[0]){
        console.log("Valor de la Moda : " + getResultadoValues[1]);
    }else if(getResultadoValues[1] <= getResultadoValues[0]){
        console.log("Valor de la Moda : " + getResultadoValues[0]);
    }else{
        console.log("Los datos son incorrectos");
    }
}

let calcularModa = function(lista){ 
    console.log(" ..........MODA ARITMETICA...........");
    console.log(" ............Distribución........");
    let valoresSueltos = obtenerValores(lista);
    let resultado = encontrarRepetidos(lista);
    
    let getResultadoValues = resultado.map(function(value){
        if(value === value){
            return  value ;
        }else{
            "REVISA TU DISTRIBUCIÓN"
        }
    });


    getResultadoValues = calModa(getResultadoValues);
    




    return getResultadoValues;
}



