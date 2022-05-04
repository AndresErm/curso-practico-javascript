    console.group("CUADRADO");
    //Código del cuadrado
    // const ladoCuadrado = 5;
    // console.log("Los lados del cuadrado miden: "+ ladoCuadrado + "cm");


    let perimetroCuadrado = function(lado ){
        return lado * 4;
    };

    perimetroCuadrado();

    // console.log("El perimetro del cuadrado es: "+ perimetroCuadrado + "cm");
    
    let areaCuadrado = function(lado){
        return lado * lado;
    }  

    areaCuadrado();
    
    
    // console.log("El área del cuadrado es: "+ areaCuadrado + "cm^2");
    console.groupEnd();
    

    console.group("TRIANGULO");
    // const ladoTriangulo1 = 6;
    // const ladoTriangulo2 = 6;
    // const baseTriangulo3 = 4;
    
    // console.log(
    //     "Los lados del triángulo miden: "
    //     + ladoTriangulo1 
    //     + "cm, "
    //     + ladoTriangulo2 
    //     + "cm, " 
    //     + baseTriangulo3 
    //     + "cm, "
    //     ); 
        
        // const alturaTriangulo = 5.5;
        // console.log("La altura del triángulo es de: : "+ alturaTriangulo + "cm");
        
        let perimetroTriangulo = function( lado1, lado2 , base3){
            return lado1 + lado2 + base3;
        }
        // console.log("El perimetro del triángulo es : "+ perimetroTriangulo  + "cm");
        
        let areaTriangulo = function( base, altura ){
            return (base* altura) / 2;

        }
        // console.log("El area del triangulo es: " + areaTriangulo + "cm^2");
        console.groupEnd();
        
        
    console.group("CIRCULO");
    //Código del circulo
    

// Radio
    // const radioCirculo = 4;
    // console.log("El Radio del Circulo es: "+ radioCirculo + "cm");
    // Diametro

    let  diametroCirculo = function(radio){
        return radio * 2;
    } ;
    
    // console.log("El Diametro del Circulo es: "+ diametroCirculo + "cm");
    // PI
    // const PI = 3.1415;
    const PI = Math.PI;
    console.log("El PI del Circulo es: "+ PI + "cm");
    
    // Circuferencia
    let perimetroCirculo = function(radio){
        //Llamamos a una función dentro de otra función para obtener su valor
        // y la almacenamos en una nueva var
        const diametro = diametroCirculo(radio);
        return diametro * PI;
    };
    // console.log("La perímetro del Circulo es: "+ perimetroCirculo + "cm");
    
    // Área
    let areaCirculo = function(radio){
        return (radio * radio) * PI;
    };
    // console.log("El perimetro del Circulo es: "+ areaCirculo + "cm^2");
    





console.groupEnd();
