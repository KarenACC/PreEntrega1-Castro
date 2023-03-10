const precioNinio= 60
const precioAdulto=80
let totalPrecio=0

let boletosNinios;
do{
    boletosNinios= prompt("Ingrese cuántos boletos de niños desea");
    if(boletosNinios<0 || boletosNinios>20){
        alert("Por favor ingrese un número positivo (Máximo puedes comprar 20 boletos)") 
    }
    
}while(boletosNinios<0 || boletosNinios>20)
alert(`Usted compró ${boletosNinios} boletos para niños.`)

let boletosAdultos;
do{
    boletosAdultos = prompt ("Ingrese cuántos boletos de adultos desea")
    if(boletosAdultos<0 || boletosAdultos>20){
        alert("Por favor ingrese un número positivo (Máximo puedes comprar 20 boletos)") }
}while (boletosAdultos<0 || boletosAdultos>20)
    alert(`Usted compró ${boletosAdultos} boletos para adultos`)
    
    function calculaTotalPrecio(){
        totalPrecio=(boletosAdultos*precioAdulto) + (boletosNinios*precioNinio)
        alert (`Su total a pagar es de $${totalPrecio}.00. Drisfruta tu película`);
        
    }
    calculaTotalPrecio();