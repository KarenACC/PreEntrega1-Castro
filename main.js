class Movie{
   
    constructor(genero){
      this.genero=genero.trim().toLowerCase();
     this.pelis=[
        {
            nombre:'13 Exorcismos',
            precio:300,
            genero:'terror',
            info:'Basada en una historia real que pasó en la ciudad de Burgos en el 2014, en la que una familia vivió aterrorizada cuando pensaban que su hija estaba poseída por el demonio y de cómo esa niña, pasó una auténtica pesadilla por parte de un grupo de personas que ella confiaba y que deberían haberla protegido, pero acabaron convirtiéndose en sus mayores enemigos.',        
            img: './assets/img/13ex.jpg'
        },
        {
            nombre:'La ballena',
            precio: 200,
            genero:'drama',
            info:'Charlie (Brendan Fraser) no está contento con su vida de la que no tiene el control para nada. Es un profesor de instituto inglés muy solitario cuya única compañía es su obesidad severa y su lucha contra su trastorno por atracón.',
            img: './assets/img/thewhale.jpeg'
        },
        {
            nombre:'Oso intoxicado',
            precio:200,
            genero:'comedia',
            info:'Jack ha ganado el billete en una timba, y sus aposentos en el barco no son precisamete confortables. Por su parte, Rose, no está contenta con su suerte, pues está comprometida con un hombre al que no ama, Caledon (Billy Zane), que la trata como si fuera otra más de sus posesiones, olvidándose de que en realidad es un ser humano.',
            img: './assets/img/osointoxicado.jpeg'
        },
        {
            nombre:'El gato con botas',
            precio:200,
            genero:'infantiles',
            info:'El Gato con Botas del universo Shrek regresa a las andadas. El último deseo sigue las nuevas andanzas del temerario y valiente felino. En esta ocasión, el campestre personaje descubrirá el precio de su pasión por el peligro y el no tenerle miedo a la muerte. Gato ya ha consumido ocho de sus nuevas vidas, pero él ya ha perdido la cuenta por el camino',
            img: './assets/img/gatobotas.webp'
        },
        {
            nombre:'Las momias y el anillo perdido',
            precio:200,
            genero:'infantiles',
            info:'Jack ha ganado el billete en una timba, y sus aposentos en el barco no son precisamete confortables. Por su parte, Rose, no está contenta con su suerte, pues está comprometida con un hombre al que no ama, Caledon (Billy Zane), que la trata como si fuera otra más de sus posesiones, olvidándose de que en realidad es un ser humano.',
            img: './assets/img/momias.jpg'
        },
        {
            nombre:'Shazam',
            precio:200,
            genero:'accion',
            info:'Regresa Billy Batson (Asher Angel), un joven huérfano de 14 años, normal y corriente, al que le cambia la vida por completo el convertirse en el superhéroe adulto Shazam (Zachary Levi) cada vez que grita la palabra Shazam',
            img: './assets/img/shazam.jpg'
        },
        {
            nombre:'John Wick 4',
            precio:200,
            genero:'accion',
            info:'El asesino a sueldo John Wick (Keanu Reeves) ha vuelto desde el inframundo para poder llevar a cabo su venganza, la cuál le llevará por numerosos lugares como Nueva York, Berlín, París y Osaka.',
            img: './assets/img/johnwick.jpg'
        },
        {
            nombre:'Scream: The sequel',
            precio:200,
            genero:'terror',
            info:'Sexta entrega de la saga Scream, creada por el guionista Kevin Williamson en 1996, tras el retorno de los personajes de Neve Campbell, Courteney Cox y David Arquette en sus respectivos roles como Sidney Prescott, Gale Weathers y Dewey Riley, respectivamente. ',
            img: './assets/img/scream.jpg'
        },
        {
            nombre:'La brigada',
            precio:200,
            genero:'comedia',
            info:'Desde que era una niña, Cathy ha soñado con tener su propio restaurante. Pero a los cuarenta años, nada ha salido según lo previsto y se ve obligada a aceptar un trabajo como trabajadora de comedor social para jóvenes inmigrantes.',
            img: './assets/img/brigada.jpg'
        }
    ]
    }
    

    
    filtrarPeliculas(){
        let peliculasFiltradas=[];
       let p =  this.pelis.map((peli)=>{
        return peli.genero;
       })
       let generoExist = p.indexOf(this.genero.trim().toLowerCase());
        if(generoExist!=-1){
      this.pelis.forEach((pelicula)=>{
            if(pelicula.genero === this.genero){
               peliculasFiltradas.push(pelicula)

            }
        });
        pintarPelis(peliculasFiltradas)
        console.log(`Las peliculas de ${this.genero} son: `,peliculasFiltradas);

        }else{
            alert(`No hay peliculas de ${this.genero} en cartelera en este momento.`)
        }




    }
    
    
    
}





let arrayPelis=[
    {
        nombre:'13 Exorcismos',
        precio:300,
        genero:'terror',
        info:'Basa en una historia real que pasó en la ciudad de Burgos en el 2014, en la que una familia vivió aterrorizada cuando pensaban que su hija estaba poseída por el demonio y de cómo esa niña, pasó una auténtica pesadilla por parte de un grupo de personas que ella confiaba y que deberían haberla protegido, pero acabaron convirtiéndose en sus mayores enemigos.',        
        img: './assets/img/13ex.jpg'
    },
    {
        nombre:'La ballena',
        precio: 200,
        genero:'drama',
        info:'Charlie (Brendan Fraser) no está contento con su vida de la que no tiene el control para nada. Es un profesor de instituto inglés muy solitario cuya única compañía es su obesidad severa y su lucha contra su trastorno por atracón.',
        img: './assets/img/thewhale.jpeg'
    },
    {
        nombre:'Oso intoxicado',
        precio:200,
        genero:'comedia',
        info:'Jack ha ganado el billete en una timba, y sus aposentos en el barco no son precisamete confortables. Por su parte, Rose, no está contenta con su suerte, pues está comprometida con un hombre al que no ama, Caledon (Billy Zane), que la trata como si fuera otra más de sus posesiones, olvidándose de que en realidad es un ser humano.',
        img: './assets/img/osointoxicado.jpeg'
    },
    {
        nombre:'El gato con botas',
        precio:200,
        genero:'infantiles',
        info:'El Gato con Botas del universo Shrek regresa a las andadas. El último deseo sigue las nuevas andanzas del temerario y valiente felino. En esta ocasión, el campestre personaje descubrirá el precio de su pasión por el peligro y el no tenerle miedo a la muerte. Gato ya ha consumido ocho de sus nuevas vidas, pero él ya ha perdido la cuenta por el camino',
        img: './assets/img/gatobotas.webp'
    },
    {
        nombre:'Las momias y el anillo perdido',
        precio:200,
        genero:'infantiles',
        info:'Jack ha ganado el billete en una timba, y sus aposentos en el barco no son precisamete confortables. Por su parte, Rose, no está contenta con su suerte, pues está comprometida con un hombre al que no ama, Caledon (Billy Zane), que la trata como si fuera otra más de sus posesiones, olvidándose de que en realidad es un ser humano.',
        img: './assets/img/momias.jpg'
    },
    {
        nombre:'Shazam',
        precio:200,
        genero:'accion',
        info:'Regresa Billy Batson (Asher Angel), un joven huérfano de 14 años, normal y corriente, al que le cambia la vida por completo el convertirse en el superhéroe adulto Shazam (Zachary Levi) cada vez que grita la palabra Shazam',
        img: './assets/img/shazam.jpg'
    },
    {
        nombre:'John Wick 4',
        precio:200,
        genero:'accion',
        info:'El asesino a sueldo John Wick (Keanu Reeves) ha vuelto desde el inframundo para poder llevar a cabo su venganza, la cuál le llevará por numerosos lugares como Nueva York, Berlín, París y Osaka.',
        img: './assets/img/johnwick.jpg'
    },
    {
        nombre:'Scream: The sequel',
        precio:200,
        genero:'terror',
        info:'Sexta entrega de la saga Scream, creada por el guionista Kevin Williamson en 1996, tras el retorno de los personajes de Neve Campbell, Courteney Cox y David Arquette en sus respectivos roles como Sidney Prescott, Gale Weathers y Dewey Riley, respectivamente. ',
        img: './assets/img/scream.jpg'
    },
    {
        nombre:'La brigada',
        precio:200,
        genero:'comedia',
        info:'Desde que era una niña, Cathy ha soñado con tener su propio restaurante. Pero a los cuarenta años, nada ha salido según lo previsto y se ve obligada a aceptar un trabajo como trabajadora de comedor social para jóvenes inmigrantes.',
        img: './assets/img/brigada.jpg'
    }
]

let peliculasAgregadas=[];
function comprarBoleto(idImg){

    console.log("boleto", idImg);
   let pelicula = arrayPelis.filter((peli)=>{
        return peli.img===idImg;
    })
    console.log("peli ",pelicula[0]);
    peliculasAgregadas.push(pelicula[0])
    localStorage.setItem('pelicula',[])
    localStorage.setItem('pelicula',JSON.stringify(peliculasAgregadas) );
    alert("Se agregaron tus boletos, revisa la seccion de Boletos")


}

function activarClickEnBotones() {
    const buttons = document.querySelectorAll("button")
          for (boton of buttons) {
            boton.addEventListener("click", (e)=> {
                comprarBoleto(e.target.id)
            })
          }
}
function pintarPelis(pelis){
    peliculasFiltradas=[];
    if(pelis.length ===0){

             let listap= document.getElementById('listaPeliculas');
        console.log("listap",listap);
            
    
       
        document.getElementById('listaPeliculas').style.display='none';
    }else{
        document.getElementById('listaPeliculas').style.display='flex';
        pelis.forEach(element => {
            console.log("element ",element);
            let card = `
            <div class="card">
                <div class="card-img">
                <img src="${element.img}">
                </div>
                <div class="card-info">
                    <p>${element.info}</p>
                </div>
                <div class="card-button">
                    <button id="${element.img}"> comprar boletos </button>
                </div>
            </div>
            `
            document.getElementById('listaPeliculas').innerHTML+=card;
            
        });
    }

    activarClickEnBotones();

}

let peli;
let categoria = prompt("¿Qué tienes ganas de ver hoy?\n Tenemos en cartelera películas de \n TERROR \n ACCION \n INFANTILES\n COMEDIA \n DRAMA \n Escribe el género que quieres ver\n Mira el resultado en la consola");
peli = new Movie(categoria);
peli.filtrarPeliculas();
