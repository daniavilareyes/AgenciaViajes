class Destino {
    constructor(img, lugar, descripcion, precio, id) {
        this.img = img;
        this.lugar = lugar;
        this.descripcion = descripcion;
        this.precio = precio;
        this.id = id;
    }
}
class Actividades {
    constructor(img, experiencia, descripcion, precio, id) {
        this.img = img;
        this.experiencia = experiencia;
        this.descripcion = descripcion;
        this.precio = precio;
        this.id = id;
    }
}
const surf = (new Actividades("./img/Surfplaya.jpg", "Surf", "Clases o full days de surf", "a consultar", "1"));
const caminata = (new Actividades("./img/caminata.jpg", "Trekking", "Expediciones por dias o varios dias", "a consultar", "2"));
const esqui = (new Actividades("./img/esqui.jpg", "Esqui", "Clases para principiantes o avanzados", "a consultar", "3"));
const paddle = (new Actividades("./img/paddle.jpg", "Paddle", "Alquiler de equipos y asistencia durante la actividad", "a consultar", "4"));
const paracaidas = (new Actividades("./img/paracaidas.jpg", "Paracaidas", "Santos principiantes o expertos", "a consultar", "5"));
const rapidos = (new Actividades("./img/rapidos.jpg", "Rapidos", "Disfruta esta experiencia a full adrenalina", "a consultar", "6"));
const experiencias = [surf, caminata, esqui, paddle, paracaidas, rapidos];

const iguazu = (new Destino("./img/iguazu.jpg", "Cataratas de Iguazu", "Visita una de las siete Maravillas naturales del mundo", "a consultar", "1"));
const mendoza = (new Destino("./img/mendoza.jpg", "Mendoza", "Aventurate a conocer la cuna de uno de los mejores vinos del mundo", "a consultar", "2"));
const playa = (new Destino("/img/playa.jpg", "Rio de Janeiro", "Conocé un paraiso viajando a rio", "a consultar", "3"));
const bariloche = (new Destino("./img/bariloche.jpg", "Bariloche", "Viaja a uno de los lugares mas mágicos de Argentina", "a consultar", "4"));
const calafate = (new Destino("./img/calafate.jpg", "Calafate", "Un paisaje como ningún otro te espera en el calafate", "a consultar", "5"));
const jujuy = (new Destino("./img/jujuy.jpg", "Jujuy", "Casi como un viaje a otro planeta pero al norte de Argentina", "a consultar", "6"));
const lugares = [iguazu, mendoza, playa, bariloche, calafate, jujuy];

const ofertas =[iguazu, mendoza, playa]
const info = [...experiencias, ...lugares]


function nuevaCards(Destino) {
    const rowcard = document.querySelector(".rowcard");
    let coldiv = document.createElement("div");
    coldiv.innerHTML = ` 
    <div class="card">
    <img src= ${Destino.img} class="card-img-top border" alt="...">
    <h5 class="card-title">${Destino.lugar}</h5>
    <div class="card-body text-center" style="width: 18rem;">
      <p> ${Destino.descripcion} </p>
      <button id="${Destino.id}" class="btn btn-1 boton">Ver mas </button>
    </div>
    </div>`;
    coldiv.classList.add("col", "col-sm-8", "col-md-6", "col-lg-4");
    rowcard.append(coldiv)
}
function iniciar() {
    ofertas.forEach((res) => {
        nuevaCards(res)
    })
}
iniciar()

function nuevaCardsActividad(Actividades) {
    const rowcardactividades = document.querySelector(".rowcardactividades");
    let columna = document.createElement("div");
    columna.innerHTML = ` 
    <div class="card">
    <img src= ${Actividades.img} class="card-img-top border" alt="...">
    <h5 class="card-title">${Actividades.experiencia}</h5>
    <div class="card-body text-center" style="width: 18rem;">
      <p> ${Actividades.descripcion} </p>
      <button id="${Actividades.id}" class="btn btn-1 boton">Ver mas </button>
    </div>
    </div>`;

    columna.classList.add("col", "col-sm-8", "col-md-6", "col-lg-4");
    rowcardactividades.append(columna)
}

/// esta en JQUERY  

/*$(".option").click(function () {
    $(".option").removeClass("active");
    $(this).addClass("active");
  });
*/

//// intento fallido  REVISAR

/*const option = document.querySelectorAll(".option");
for (const divoption of option) {
let estadoDom = divoption.classList
divoption.addEventListener("click", function(e) {
e.target
let condicion = "option active"
    if (estadoDom === condicion) {
      return  divoption.remove("active")
    } else if (estadoDom !== "active") {
      return  divoption.className = "option active"
    }
}
)
}  */

//// FUNCIONA EJEMPLO DE LA  PAGINA TOKEN TOGGLE
const span = document.querySelectorAll(".option");

for (const boton of span) {
const classes = boton.classList;
boton.addEventListener('click', function() {
  const result = classes.toggle("active");

  if (result) {
    boton.addClass("active");
  } else {
    boton.removeClass("active");
  }
})
} 

/// CREA LAS CARDS DE EXPERIENCIA Y ACTIVIDADES Y MODIFICO EL DOM HTML
const actividadesyexperiencia = document.getElementById("Actividadess")
actividadesyexperiencia.addEventListener("click", function (e) {
    e.target
    e.preventDefault()
    //// Limpio el container ROWCARD para subir el nuevo render
    const rowcard = document.querySelector(".rowcard");
    rowcard.innerHTML = ""
    /// OCULTO AL CARRUSEL
    const carouselExampleCaptions = document.getElementById("carouselExampleCaptions")
    carouselExampleCaptions.style.display = 'none';
    /// OCULTO DIV PRECIOS
    const animationdiv = document.getElementById("animationdiv")
    animationdiv.style.display = 'none';
    /// MUESTO EL EFECTO CSS DE ACTIVIDADES
    const bodys = document.querySelector(".bodys").classList.remove( "d-none");
  

    //// LLAMO AL ARRAY DE EXPERIENCIA Y CREO LA CARDS CON SU INFO
    experiencias.forEach((res) => {
        nuevaCardsActividad(res)

    })
})

///// destinos
const btnDestinos = document.getElementById("destinoss")
btnDestinos.addEventListener("click", function (e) {
    e.target
    e.preventDefault()
    //// Limpio el container ROWCARD para subir el nuevo render
    const rowcard = document.querySelector(".rowcard");
    rowcard.innerHTML = ""
    /// OCULTO AL CARRUSEL
    const carouselExampleCaptions = document.getElementById("carouselExampleCaptions")
    carouselExampleCaptions.style.display = 'none';
     /// OCULTO DIV PRECIOS
     const animationdiv = document.getElementById("animationdiv")
     animationdiv.style.display = 'none';

  

    //// LLAMO AL ARRAY DE EXPERIENCIA Y CREO LA CARDS CON SU INFO
    lugares.forEach((res) => {
       nuevaCards(res)

    })
})











