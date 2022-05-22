//RETO 1 CONVERTIR TODO ESTE CODIGO EN UNA FUNCION
// ORDENAR NUESTRA LISTA 

// Validar si es par nuestro algun nuermero
let esPar = function(numerito){
    if( numerito % 2 === 0 ){
        
        return true;
    }else{
        return false;
    }
}

let orderList = function(lista){
    let getOrderList =
   lista.sort(function(value1, value2){
        if( value1 > value2 ){
            return 1;
        }
        if( value1 < value2 ){ 

            return -1;
        }else{
            
            return 0;    
        }
    
    });

    return getOrderList;
      
} 

// Funcion calcular Media Aritmetica
let calcularMedianaAritmetica = function( lista  ){
    
    let getListOrder = orderList(lista);
    //Show the list Order 
    console.log( getListOrder  );
    
    const mitadLista1 = parseInt(lista.length / 2);
    
    let mediana;
    
    if( esPar(lista.length) ){
        const elemento1 = lista[mitadLista1 - 1];
        const elemento2 = lista[mitadLista1];
        const promedioElemento1y2 = calcularMedianaAritmetica([
            elemento1,
            elemento2
        ]);

        mediana = promedioElemento1y2;
        
    }else{
        mediana = lista[mitadLista1];
        //posicion mitadLista1 dentro lista1
    }
    // console.log(getListOrder);
    
    return mediana;
    // getListOrder;
};

// calcularMedianaAritmetica();