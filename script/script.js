// Menu responsive

let botonMenu = document.getElementById('abrir-menu');
let menu = document.getElementById('menu');

botonMenu.addEventListener('click', mostrarMenu);

function mostrarMenu() {
    menu.classList.toggle('nav-visible');
};
console.log(URL);
console.log(document.URL.match(new RegExp('/.*$')));

// Cambio de colores
let accesible = false;
const linkContrasteAlto = document.getElementById('tema-accesible');
const linkColorClasico = document.getElementById('tema-clasico');

const cuerpo = document.getElementById('body');

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
    cuerpo.classList.add('accesible');

 /*    fondoSeccion2.classList.add('fondo-seccion-2-accesible');
    tituloSeccion2.classList.add('titulo-texto-acc');
    tooltip.classList.add('tooltip-acc');
    botonesPrimarios.forEach(boton => {
        boton.classList.add('boton-primario-acc');
    });
    botonesSecundarios.forEach(boton => {
        boton.classList.add('boton-secundario-acc');
    });
    seccion3.classList.add('seccion-3-acc');
 */
}

function colorClasico() {
    cuerpo.classList.remove('accesible');

   /*  fondoSeccion2.classList.remove('fondo-seccion-2-accesible');
    tituloSeccion2.classList.remove('titulo-texto-acc');
    tooltip.classList.remove('tooltip-acc');
    botonesPrimarios.forEach(boton => {
        boton.classList.remove('boton-primario-acc');
    });
    botonesSecundarios.forEach(boton => {
        boton.classList.remove('boton-secundario-acc');
    });
    seccion3.classList.remove('seccion-3-acc'); */
}


