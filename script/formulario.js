const inputs = document.querySelectorAll('.input>input');

inputs.forEach(input => {
    input.addEventListener('input', esValido);
})

function esValido(e) {
    let img = e.target.parentElement.children[2];
    if (!validar(e.target)) {
        img.setAttribute('src', '../img/icon/advertencia.png');
        img.classList.add('icono-visible');
    } else {
        img.setAttribute('src', '../img/icon/valido.png');
        img.classList.add('icono-visible');
    }
}

function validar(valor) {
    if ( valor.validity.valueMissing ) {
        valor.setCustomValidity('Introduce un valor.');
    } else if ( valor.validity.patternMismatch ){
        valor.setCustomValidity('Formato no válido.');
    } else {
        valor.setCustomValidity('');
    }
    
    if (valor.checkValidity()) {
        return true;
    } else {
        return false;
    }
}