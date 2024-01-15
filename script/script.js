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
        let operacion = i * -50;
        grande.style.transform = `translateX(${operacion}%)`;
        let activo = document.querySelector('.activo');
        activo.classList.remove('activo');
        e.target.classList.add('activo');
    })
})