// Tabs
let selectores = document.querySelectorAll('.selectores div');
const TAB = {
    'socio-tab': 'socio',
    'micro-tab': 'micro',
    'dona-tab': 'dona',
    'apadrina-tab': 'apadrina',
}

for (i = 0; i < selectores.length; i++) {
    selectores[i].addEventListener('click', e => {
        cambioDeTab(e);
        cambioDescripcion(e);
    });
}

function cambioDeTab(e) {
    let activo = document.querySelector('.tab-activo');
    activo.classList.remove('tab-activo');
    e.target.classList.add('tab-activo');
}

function cambioDescripcion(e) {
    let descripcion = document.getElementById(TAB[e.target.id]);
    let descripcionActiva = document.querySelector('.activo');
    descripcionActiva.classList.remove('activo');
    descripcion.classList.add('activo');
}

// Carrousel

const grande = document.querySelector('.grande');
const punto = document.querySelectorAll('.punto');

punto.forEach(( cadaPunto, i ) =>{
    punto[i].addEventListener('click', (e) =>{
        let operacion = i * -25;
        grande.style.transform = `translateX(${operacion}%)`;
        let activo = document.querySelector('.punto-activo');
        activo.classList.remove('punto-activo');
        e.target.classList.add('punto-activo');
    });
});

// Lightbox

let lightbox = document.querySelector('.lightbox');
let cerrar = document.querySelector('.cerrar');
let imgGrande = document.querySelector('.img-grande');
let videoGrande = document.querySelector('.video-grande');
let elementos = document.querySelectorAll('.elementos');

elementos.forEach(elemento => {
    elemento.addEventListener('click', e =>{
        let etiqueta = e.target.localName;
        let ruta = elemento.src;
        
        lightbox.classList.add('activo');

        if (etiqueta == 'img'){
            imgGrande.classList.add('activo');
            imgGrande.setAttribute('src', ruta);
        } else if (etiqueta == 'video'){
            videoGrande.classList.add('activo');
            videoGrande.setAttribute('src', ruta);
        }

    });
});

cerrar.addEventListener('click', ()=>{
    lightbox.classList.remove('activo');
    let activo = document.querySelector('.lightbox .activo');
    activo.classList.remove('activo');
    activo.setAttribute('src', '');
});


// Menu responsive

let botonMenu = document.getElementById('abrir-menu');
let menu = document.getElementById('menu');

botonMenu.addEventListener('click', mostrarMenu);

function mostrarMenu() {
    menu.classList.toggle('nav-visible');
};

