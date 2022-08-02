class servicio {
  constructor(img, titulo, descripcion, precio, id, category){
      this.img= img;
      this.titulo = titulo;
      this.descripcion=descripcion;
      this.precio= precio;
      this.id= id;
      this.category= category;
  }
}

const surf = ( new servicio("./img/Surfplaya.jpg", "Surf", "Clases o full days de surf", "a consultar", "1", "actividades"));
const caminata = ( new servicio("./img/caminata.jpg", "Trekking", "Expediciones por dias o varios dias", "a consultar", "2", "actividades"));
const esqui = ( new servicio("./img/esqui.jpg", "Esqui", "Clases para principiantes o avanzados", "a consultar", "3", "actividades"));
const paddle = ( new servicio("./img/paddle.jpg", "Paddle", "Alquiler de equipos y asistencia durante la actividad", "a consultar", "4", "actividades"));
const paracaidas = ( new servicio("./img/paracaidas.jpg", "Paracaidas", "Santos principiantes o expertos", "a consultar", "5", "actividades"));
const rapidos = ( new servicio("./img/rapidos.jpg", "Rapidos", "Disfruta esta experiencia a full adrenalina", "a consultar", "6", "actividades"));
const iguazu =( new servicio ("./img/iguazu.jpg", "Cataratas de Iguazu","Visita una de las siete Maravillas naturales del mundo", "a consultar", "7" , "destino"));
const mendoza = ( new servicio ("./img/mendoza.jpg", "Mendoza", "Aventurate a conocer la cuna de uno de los mejores vinos del mundo", "a consultar", "8", "destino"));
const playa = ( new servicio ("/img/playa.jpg", "Rio de Janeiro", "Conocé un paraiso viajando a rio", "a consultar", "9","destino" ));
const bariloche = (new servicio("./img/bariloche.jpg", "Bariloche","Viaja a uno de los lugares mas mágicos de Argentina", "a consultar", "10", "destino"));
const calafate = ( new servicio ("./img/calafate.jpg", "Calafate", "Un paisaje como ningún otro te espera en el calafate", "a consultar", "11", "destino"));
const jujuy = ( new servicio ("./img/jujuy.jpg", "Jujuy","Casi como un viaje a otro planeta pero al norte de Argentina", "a consultar", "12", "destino" ));
const experiencias = [surf, caminata, esqui, paddle, paracaidas, rapidos,iguazu, mendoza, playa, bariloche, calafate, jujuy];

const ofertas =[iguazu, mendoza, playa]

almacenados = [];

function nuevaCards(servicio) {
    const rowcard = document.querySelector(".rowcard");
    let coldiv = document.createElement("div");
    coldiv.innerHTML = ` 
    <div class="card">
    <img src= ${servicio.img} class="imagencard" alt="...">
    <h5 class="card-title">${servicio.titulo}</h5>
    <div class="card-body text-center" style="width: 18rem;">
      <p> ${servicio.descripcion} </p>
      <button id="${servicio.id}" class="btn btn-1 boton">Reservar </button>
    </div>
    </div>`;
    coldiv.classList.add("col", "col-sm-8", "col-md-6", "col-lg-4");
    rowcard.append(coldiv)

    const btn = document.querySelectorAll(".boton");
    for (const boton of btn ){
      boton.addEventListener( "click", hacerReserva);
    }
}
function iniciar() {
    ofertas.forEach((res) => {
        nuevaCards(res)
    })
}
iniciar()
///CARRUSEL EXPERIENCIAS
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
///////////
/// CREA LAS CARDS DE EXPERIENCIA Y ACTIVIDADES Y MODIFICO EL DOM HTML
const actividadesyexperiencia = document.querySelector(".actividadesyexperiencia")
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
   const filteresult = experiencias.filter(( respuesta) => respuesta.category.toLowerCase().includes(e.target.id))
   filteresult.forEach((res) => {
    nuevaCards(res)
})

})

///// DESTINOS
const btnDestinos = document.querySelector(".destinos")
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
    const filterdest = experiencias.filter((respuesta) => respuesta.category.toLowerCase().includes(e.target.id))
    filterdest.forEach((res) =>{
      nuevaCards(res)
    })

})

///CARRITO
const btnOpenCarrito = document.getElementById("boton-comprar");
const cartWrapper = document.querySelector(".side-bar-wrapper");

btnOpenCarrito.addEventListener("click", function () {
  cartWrapper.style.width = "80vw";
  document.querySelector("#side-bar").style.width = "570px";

})

const btnCloseCarrito = document.querySelector("#btncerrarcart");

btnCloseCarrito.addEventListener("click", function(){
  cartWrapper.style.width = "0px";
  document.querySelector("#side-bar").style.width = "0px";
})
cartWrapper.addEventListener("click", function(e) {
  cartWrapper.style.width = "0vw";
  document.querySelector("#side-bar").style.width = "0px";
});
document.querySelector("#side-bar").addEventListener("click", function(e) {
  e.stopPropagation();
});


////AGREGAR A CARRITO
function hacerReserva(e){
  /*e.target.setAttribute("disabled", true);
  e.target.innerHTML = "Agregado";*/
  let productoClickeado = experiencias.find((item) => item.id == e.target.id );
  almacenados.push(productoClickeado);
  const aJson = JSON.stringify(almacenados);
  localStorage.setItem("reserva", aJson);
  objparse = JSON.parse(localStorage.getItem("reserva"))
  actualizarTabla()
} 

let tablabody = document.getElementById("tablabody")

let totalproductos = document.getElementById("Totalproducto")
let totalprecio = document.getElementById("Totalprecio")
let tabla = document.getElementById("tablabody");

///AGREGAR DATOS A TABLA (CARRITO)
function mostrartabla(servicio){
    let filaservicio = document.createElement("tr");
    filaservicio.innerHTML= `
    <th>${servicio.id}</th>
    <th>${servicio.titulo}</th>
    <th>${servicio.category}</th>
    <th>${servicio.precio}</th>
    <th><button class="eliminaritem botontabla" id="#${servicio.id}">Eliminar</button></th>`
    tablabody.appendChild(filaservicio);
    const locationItem = almacenados.indexOf(servicio);
    ///////ELIMINAR ARTICULO CARRITO
    const eliminarBtn = document.querySelectorAll(".eliminaritem");
    for (const eliminaritem of eliminarBtn) {
      eliminaritem.onclick = () =>{
        almacenados.splice(locationItem,1);
        localStorage.setItem("reserva", JSON.stringify(almacenados));
        actualizarTabla();
        rehabilitarBotonesyLocal();
        console.log("eliminadooooooos")
    }
}}
almacenados = JSON.parse(localStorage.getItem("reserva")) || [];

function actualizarTabla(){
  tablabody.innerHTML= "";
  almacenados.forEach(respuesta =>{
    mostrartabla(respuesta)
  })
}

////VACIAR TABLA
const btnvaciartabla = document.querySelector(".vaciarcarrito")
btnvaciartabla.addEventListener("click", function(e) {
  e.preventDefault()
    localStorage.removeItem("reserva");
    almacenados = [] ;
    console.log("borrado") ;
    actualizarTabla();

})

////EFECTUAR RESERVA
const btncomprar = document.querySelector(".botoncompra");
  btncomprar.onclick = (e) => {
    e.target;
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Haz hecho la reserva exitosamente',
      showConfirmButton: false,
      timer: 1500
    })
        totalproductos.innerHTML = "";
        totalprecio.innerHTML = "";
        tabla.innerHTML = "";
        almacenados = [];
        localStorage.setItem("reserva", JSON.stringify(almacenados));
        console.log("Haz comprado")
  }

actualizarTabla();

let deLocal = JSON.parse(localStorage.getItem("reserva"));

/*function rehabilitarBotonesyLocal() {
  const deLocal = JSON.parse(localStorage.getItem("reserva"));
  let productoEliminado = deLocal.find(() => servicio.id === servicio.id);
  let productoId = productoEliminado.id;
  let btnProducto = document.getElementById(productoId);
  document.getElementById(productoId).innerHTML = "Reservar";
  btnProducto.disabled = false;
  let indiceProducto = deLocal.indexOf(productoEliminado);
  deLocal.splice(indiceProducto, 1);
  localStorage.setItem("listaProductos", JSON.stringify(deLocal));
}*/
