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


// Transiciones fijas
const seccion1 = document.querySelector('.seccion-1');
const textoSeccion1 = document.querySelector('.texto-seccion-1');

const carrousel = document.querySelector('.carrousel');
const seccion2 = document.querySelector('.seccion-2');
const textoSeccion2 = document.querySelector('.texto-secc-2');

const seccion3 = document.querySelector('.seccion-3');
const tabSeccion3 = document.querySelector('.tabs');
const selectoresSeccion3 = document.querySelector('.selectores');

seccion1.addEventListener('mouseenter', transicion1);

function transicion1() {
    textoSeccion1.classList.add('texto-seccion-1-transicion');
    
}

seccion2.addEventListener('mouseenter', transicion2);

function transicion2() {
    carrousel.classList.add('carrousel-transicion');
    textoSeccion2.classList.add('texto-secc-2-transicion');
    
}

seccion3.addEventListener('mouseenter', transicion3);

function transicion3() {
    tabSeccion3.classList.add('tabs-transicion');
    selectoresSeccion3.classList.add('selectores-transicion');
    
}

// Cambio de colores
let accesible = false;
const linkContrasteAlto = document.getElementById('tema-accesible');
const linkColorClasico = document.getElementById('tema-clasico');

const tituloSeccion2 = document.querySelector('.texto-secc-2>h2');
const fondoSeccion2 = document.querySelector('.fondo-seccion-2');
const tooltip = document.querySelector('.tooltip');
const botonesPrimarios = document.querySelectorAll('.boton-primario');
const botonesSecundarios = document.querySelectorAll('.boton-secundario');

linkColorClasico.addEventListener('click', () => {
    accesible = false;
    document.cookie = 'accesible = false';
    colorClasico();
});

linkContrasteAlto.addEventListener('click', () => {
    accesible = true;
    document.cookie = 'accesible = true';
    colorAccesible();
});

// Comprobar accesible
let cuki = document.cookie;
let esAccesible = cuki.split('=')[1];
esAccesible == 'true' ? colorAccesible() : colorClasico();

function colorAccesible() {
    fondoSeccion2.classList.add('fondo-seccion-2-accesible');
    tituloSeccion2.classList.add('titulo-texto-acc');
    tooltip.classList.add('tooltip-acc');
    botonesPrimarios.forEach(boton => {
        boton.classList.add('boton-primario-acc');
    });
    botonesSecundarios.forEach(boton => {
        boton.classList.add('boton-secundario-acc');
    });
    seccion3.classList.add('seccion-3-acc');

}

function colorClasico() {
    fondoSeccion2.classList.remove('fondo-seccion-2-accesible');
    tituloSeccion2.classList.remove('titulo-texto-acc');
    tooltip.classList.remove('tooltip-acc');
    botonesPrimarios.forEach(boton => {
        boton.classList.remove('boton-primario-acc');
    });
    botonesSecundarios.forEach(boton => {
        boton.classList.remove('boton-secundario-acc');
    });
    seccion3.classList.remove('seccion-3-acc');
}