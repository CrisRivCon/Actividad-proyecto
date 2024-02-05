// Menu responsive

let botonMenu = document.getElementById('abrir-menu');
let menu = document.getElementById('menu');

botonMenu.addEventListener('click', mostrarMenu);

function mostrarMenu() {
    menu.classList.toggle('nav-visible');
};

// Cambio de colores
const linkContrasteAlto = document.getElementById('tema-accesible');
const linkColorClasico = document.getElementById('tema-clasico');

const cuerpo = document.getElementById('body');

linkColorClasico.addEventListener('click', () => {
    borrarCuki('accesible');
    //document.cookie = 'accesible = false';
    setCookie('accesible', false);
    colorClasico();
});

linkContrasteAlto.addEventListener('click', () => {
    borrarCuki('accesible');
    setCookie('accesible', true);
    //document.cookie = 'accesible = true';
    colorAccesible();
});

// Comprobar accesible
let cuki = document.cookie;
console.log(cuki);
let esAccesible = getValueCookie('accesible');
esAccesible == 'true' ? colorAccesible() : colorClasico();

function colorAccesible() {
    cuerpo.classList.add('accesible');
}

function colorClasico() {
    cuerpo.classList.remove('accesible');
}


function setCookie(nombre, valor, expires, path = '/') {
    let cuki = encodeURIComponent(nombre) + '=' + encodeURIComponent(valor) + '; path =' + path;
    let fecha = new Date(Date.now() + (expires * 24 * 60 * 60));
    document.cookie = cuki + ';expires=' + fecha.toUTCString() + '; samesite = lax';
}

function borrarCuki(nombre) {
    setCookie(nombre, '', -10);

}

/**
 * Devulve el valor de una cookie cuyo nombre 
 * se pasa por parámetro
 * @param {string} nombre 
 * @returns {string}
 */
function getValueCookie(nombre) {
    const regex = new RegExp(`${nombre}=.*;?`, 'ig');
    let match = document.cookie.split(';').find((ele) => ele.match(regex));
    let valor = decodeURIComponent(match).split('=');
    return valor[1];
}