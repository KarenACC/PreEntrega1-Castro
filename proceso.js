class Compra {
    constructor(carrito){
        this.carrito=carrito
    }
    
    getTotal(){
        this.carrito=carrito
        if(this.carrito.length>0){
            return this.carrito.reduce((cont,movie)=> cont+movie.precio, 0)
            
        } else{
            return "Tu carrito está vacío"
        }
        
    }
    
    confirmarCompra(){
        if(this.getTotal() !== "Tu carrrito está vacío"){
            return `Tu total a pagar es de $ ${this.getTotal} \n ¡Disfruta tu película!`.
            
        } else {
            return "Hubo un error con tu pago"
        }
        
    }
}