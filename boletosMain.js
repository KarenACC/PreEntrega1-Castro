function retornoFilaHTML() {
    const tbody = document.querySelector("tbody")
    boletos =  JSON.parse(localStorage.getItem('pelicula'))
    console.log("boletos ",boletos[0]);
    boletos.forEach(element => {
        tbody.innerHTML +=  `<tr>
        <td>${element.nombre}</td> 
        <td>$ ${element.precio}</td>
    </tr>`
    })
}

retornoFilaHTML();

function pagarBoletos(){
    boletos =  JSON.parse(localStorage.getItem('pelicula'))

    let suma =0;
    boletos.forEach(boleto=>{
        console.log("bole ",boleto.precio);
        suma+=boleto.precio;
    })
    alert('Tu total a pagar es: '+suma)
    console.log("suma ",suma);

}

