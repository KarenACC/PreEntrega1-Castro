// const precioNinio= 60
// const precioAdulto=80
// let totalPrecio=0

// let boletosNinios;
// do{
//     boletosNinios= prompt("Ingrese cuántos boletos de niños desea");
//     if(boletosNinios<0 || boletosNinios>20){
//         alert("Por favor ingrese un número positivo (Máximo puedes comprar 20 boletos)") 
//     }
    
// }while(boletosNinios<0 || boletosNinios>20)
// alert(`Usted compró ${boletosNinios} boletos para niños.`)

// let boletosAdultos;
// do{
//     boletosAdultos = prompt ("Ingrese cuántos boletos de adultos desea")
//     if(boletosAdultos<0 || boletosAdultos>20){
//         alert("Por favor ingrese un número positivo (Máximo puedes comprar 20 boletos)") }
// }while (boletosAdultos<0 || boletosAdultos>20)
//     alert(`Usted compró ${boletosAdultos} boletos para adultos`)
    
//     function calculaTotalPrecio(){
//         totalPrecio=(boletosAdultos*precioAdulto) + (boletosNinios*precioNinio)
//         alert (`Su total a pagar es de $${totalPrecio}.00. Drisfruta tu película`);
        
//     }
//     calculaTotalPrecio();

let categoria = prompt("¿Qué tienes ganas de ver hoy?\n Tenemos en cartelera películas de \n TERROR \n ACCION \n INFANTILES\n COMEDIA \n Escribe el género que quieres ver\n Mira el resultado en la consola");
let peli;
class Movie{
   
    constructor(genero){
      this.genero=genero.trim().toLowerCase();
     this.peliculas=[
        {
            nombre:'13 Exorcismos',
            precio:300,
            genero:'terror',
            info:'Basa en una historia real que pasó en la ciudad de Burgos en el 2014, en la que una familia vivió aterrorizada cuando pensaban que su hija estaba poseída por el demonio y de cómo esa niña, pasó una auténtica pesadilla por parte de un grupo de personas que ella confiaba y que deberían haberla protegido, pero acabaron convirtiéndose en sus mayores enemigos.',        
        },
        {
            nombre:'La ballena',
            precio: 200,
            genero:'drama',
            info:'Charlie (Brendan Fraser) no está contento con su vida de la que no tiene el control para nada. Es un profesor de instituto inglés muy solitario cuya única compañía es su obesidad severa y su lucha contra su trastorno por atracón.',
        },
        {
            nombre:'Oso intoxicado',
            precio:200,
            genero:'comedia',
            info:'Jack ha ganado el billete en una timba, y sus aposentos en el barco no son precisamete confortables. Por su parte, Rose, no está contenta con su suerte, pues está comprometida con un hombre al que no ama, Caledon (Billy Zane), que la trata como si fuera otra más de sus posesiones, olvidándose de que en realidad es un ser humano.',
        },
        {
            nombre:'El gato con botas',
            precio:200,
            genero:'infantiles',
            info:'El Gato con Botas del universo Shrek regresa a las andadas. El último deseo sigue las nuevas andanzas del temerario y valiente felino. En esta ocasión, el campestre personaje descubrirá el precio de su pasión por el peligro y el no tenerle miedo a la muerte. Gato ya ha consumido ocho de sus nuevas vidas, pero él ya ha perdido la cuenta por el camino',
        },
        {
            nombre:'Las momias y el anillo perdido',
            precio:200,
            genero:'infantiles',
            info:'Jack ha ganado el billete en una timba, y sus aposentos en el barco no son precisamete confortables. Por su parte, Rose, no está contenta con su suerte, pues está comprometida con un hombre al que no ama, Caledon (Billy Zane), que la trata como si fuera otra más de sus posesiones, olvidándose de que en realidad es un ser humano.',
        },
        {
            nombre:'Shazam',
            precio:200,
            genero:'accion',
            info:'Regresa Billy Batson (Asher Angel), un joven huérfano de 14 años, normal y corriente, al que le cambia la vida por completo el convertirse en el superhéroe adulto Shazam (Zachary Levi) cada vez que grita la palabra Shazam',
        },
        {
            nombre:'John Wick 4',
            precio:200,
            genero:'accion',
            info:'El asesino a sueldo John Wick (Keanu Reeves) ha vuelto desde el inframundo para poder llevar a cabo su venganza, la cuál le llevará por numerosos lugares como Nueva York, Berlín, París y Osaka.',
        },
        {
            nombre:'Scream: The sequel',
            precio:200,
            genero:'terror',
            info:'Sexta entrega de la saga Scream, creada por el guionista Kevin Williamson en 1996, tras el retorno de los personajes de Neve Campbell, Courteney Cox y David Arquette en sus respectivos roles como Sidney Prescott, Gale Weathers y Dewey Riley, respectivamente. ',
        },
        {
            nombre:'La brigada',
            precio:200,
            genero:'comedia',
            info:'Desde que era una niña, Cathy ha soñado con tener su propio restaurante. Pero a los cuarenta años, nada ha salido según lo previsto y se ve obligada a aceptar un trabajo como trabajadora de comedor social para jóvenes inmigrantes.',
        }
    ]
    }
    
    filtrarPeliculas(){
        let peliculasFiltradas=[];
       let p =  this.peliculas.map((peli)=>{
        return peli.genero;
       })
       let generoExist = p.indexOf(this.genero.trim().toLowerCase());
        if(generoExist!=-1){
      this.peliculas.forEach((pelicula)=>{
            if(pelicula.genero === this.genero){
               peliculasFiltradas.push(pelicula.nombre)

            }
        });
        console.log(`Las peliculas de ${this.genero} son: `,peliculasFiltradas);
        }else{
            alert(`No hay peliculas de ${this.genero} en cartelera en este momento.`)
        }




    }
    
    
    
}

peli = new Movie(categoria);
peli.filtrarPeliculas();
