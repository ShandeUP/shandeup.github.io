const botonReproducir = document.querySelector('.boton');
const ventanaEmergente = document.getElementById('ventanaEmergente');

botonReproducir.addEventListener('click', mostrarVentanaEmergente);

function mostrarVentanaEmergente() {
    ventanaEmergente.style.display = 'block';
}

function cerrarVentanaEmergente() {
    ventanaEmergente.style.display = 'none';
}
