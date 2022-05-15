// const precioOriginal = 120;
// const descuento = 18;

let usersCoupon = [{
    user: "Andres Esteban",
    coupon: 25, 
}];

console.log();

let getUserCoupon = usersCoupon[0].coupon;

let renderUsersValues = function(){

    const getUsersAttr = usersCoupon.find( function(userCoupon){
        return userCoupon.coupon === 25;
    });

    console.log( getUsersAttr?.coupon || "No encontrado");
    let renderUsersName = document.getElementById("user");
    let renderUsersCoupon = document.getElementById("userCouponValue");

    renderUsersName.innerText = `Este es tú usuario : ${getUsersAttr.user}`;
    renderUsersCoupon.innerText = `Este es tú porcentaje del cupon : ${ getUsersAttr.coupon }%`;


} 

renderUsersValues();


let calcularPrecioConDescuento = function(precio, descuento){

    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    
    
    return precioConDescuento;

}

let calcularPrecioConDescuentoAndCoupon = function(precio, descuento, coupon){
    


    // calcular Precio con descuento
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    // calcular Precio con descuento y coupon
    const porcentajePrecioConDescuentoCoupon = 100 - coupon;
    const precioConDescuentoCopon = (precioConDescuento * porcentajePrecioConDescuentoCoupon) / 100;

    return precioConDescuentoCopon;

}



let onClickButtonPriceDiscount = function(){
    const inputPrice = document.getElementById("inputPrice");
    const inputDiscount = document.getElementById("inputDiscount");
    
    const priceValue = inputPrice.value;
    const discountValue = inputDiscount.value;
    
    
    const priceWhitDiscount= calcularPrecioConDescuento( priceValue, discountValue, );
    
    const resulP = document.getElementById("ResultPrice");
    resulP.innerText = "El precio con descuento son: $" + priceWhitDiscount ;

    
}        


let onClickButtonPriceDiscountWhitCoupon = function(){
    
    const inputPrice = document.getElementById("inputPrice");
    const inputDiscount = document.getElementById("inputDiscount");
    
    const priceValue = inputPrice.value;
    const discountValue = inputDiscount.value;
        
    const inputCoupon = document.getElementById("inputCoupon");
    const valueCoupon = Number(inputCoupon.value);
    console.log( getUserCoupon );

    if( getUserCoupon === valueCoupon){
        const priceWhitDiscountAndCoupon = calcularPrecioConDescuentoAndCoupon( priceValue, discountValue, valueCoupon );
        const resulP = document.getElementById("ResultPrice");
        resulP.innerText = "El precio con descuento son: $" + priceWhitDiscountAndCoupon ;
        
    }else{
        const validateCoupon = document.getElementById("couponValidate");
        validateCoupon.innerText = "Ingresa el porcentaje asignado"
        console.log("ingresa el porcentaje correcto");
    }
    

}

