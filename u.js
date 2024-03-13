//limpiar los datos
const nombreField = document.getElementById('nombre');
const apellidoField = document.getElementById('apellido');
const correoField = document.getElementById('correo');
const contactoField = document.getElementById('contacto');
const mensajeField = document.getElementById('mensaje');
const limpiarCamposBtn = document.getElementById('limpiarCampos');

limpiarCamposBtn.addEventListener('click', () => {
    nombreField.value = '';
    apellidoField.value = '';
    correoField.value = '';
    contactoField.value = '';
    mensajeField.value = '';
});