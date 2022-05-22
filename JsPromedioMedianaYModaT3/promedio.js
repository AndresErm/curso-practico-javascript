const lista = [
    100,
    200,
    300,
    500,
];



let calcularMediaAritmetica = function(lista){
    // let sumaLista = 0;
    
    // for(let i = 0; i <lista.length; i++){
    //     // Acemos que se sumen los numeros de un array
    //     sumaLista = sumaLista +lista[i];
    //     // console.log(sumaLista1);
    // };
    
    const sumaLista = lista.reduce(
        function(valorAcomulado = 0, nuevoElemento){
            return valorAcomulado + nuevoElemento;
        }
    );


    const promedioLista = sumaLista / lista.length;
    
    return promedioLista;
    
};

let calMediaAritmetica = function(){
    let getInput = document.getElementById("mediaAritmeticaValues");
    let inputValues =  getInput.value ;
    // let inputValues =  Number( getInput.value );

    console.log( inputValues );

}

calMediaAritmetica();