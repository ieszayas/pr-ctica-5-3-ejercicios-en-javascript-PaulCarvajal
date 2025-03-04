// Obtener elementos del DOM necesarios para la validación y manejo del formulario
const formulario = document.getElementById('formulario');
const btnLimpiar = document.getElementById('btnLimpiar'); 
const nombre = document.getElementById('nombre'); 
const apellido = document.getElementById('apellido'); 
const email = document.getElementById('email'); 
const fecha = document.getElementById('fecha');
const telefono = document.getElementById('telefono'); 
const checkbox = document.getElementById('checkbox'); 

// -------------------------
// Funciones de validación
// -------------------------

// Validación del campo Nombre
function validarNombre() {
    // Se obtiene el valor del campo y se eliminan espacios en blanco al inicio y final
    const valor = nombre.value.trim();
    // Se remueven clases de validación anteriores
    nombre.classList.remove('is-valid', 'is-invalid');

    // Comprobar si el campo está vacío
    if (valor === '') {
        // Muestra mensaje de error y aplica la clase de invalidez
        nombre.nextElementSibling.textContent = 'El campo Nombre no puede estar vacío.';
        nombre.classList.add('is-invalid');
        return false;
    }
    // Validar que el nombre contenga únicamente letras (a-z, A-Z)
    else if (!/^[a-zA-Z]+$/.test(valor)) {
        // Si no cumple, muestra mensaje de error y marca el campo como inválido
        nombre.nextElementSibling.textContent = 'El Nombre solo puede contener letras (a-z, A-Z).';
        nombre.classList.add('is-invalid');
        return false;
    } else {
        // Si es válido, muestra mensaje de éxito y aplica la clase de validez
        nombre.nextElementSibling.textContent = '¡Nombre válido!';
        nombre.classList.add('is-valid');
        return true;
    }
}

// Validación del campo Apellido
function validarApellido() {
    // Se obtiene el valor del apellido y se eliminan espacios en blanco al inicio y final
    const valor = apellido.value.trim();
    // Se eliminan clases de validación previas
    apellido.classList.remove('is-valid', 'is-invalid');

    // Validar si el campo está vacío
    if (valor === '') {
        apellido.nextElementSibling.textContent = 'El campo Apellido no puede estar vacío.';
        apellido.classList.add('is-invalid');
        return false;
    }
    // Validar que el apellido contenga solo letras
    else if (!/^[a-zA-Z]+$/.test(valor)) {
        apellido.nextElementSibling.textContent = 'El Apellido solo puede contener letras (a-z, A-Z).';
        apellido.classList.add('is-invalid');
        return false;
    } else {
        // Si el apellido es correcto, se muestra mensaje de éxito y se añade la clase de validez
        apellido.nextElementSibling.textContent = 'Apellido válido!';
        apellido.classList.add('is-valid');
        return true;
    }
}

// Validación del campo Fecha de Nacimiento
function validarFechaNacimiento() {
    // Se obtiene el valor de la fecha y se eliminan espacios en blanco
    const valor = fecha.value.trim();
    // Se remueven clases de validación anteriores
    fecha.classList.remove('is-valid', 'is-invalid');
    
    // Comprobar si el campo está vacío
    if (valor === '') {
        fecha.nextElementSibling.textContent = 'El campo Fecha de Nacimiento no puede estar vacío.';
        fecha.classList.add('is-invalid');
        return false;
    } else {
        // Si la fecha está proporcionada, se muestra mensaje de éxito y se marca como válida
        fecha.nextElementSibling.textContent = '¡Fecha válida!';
        fecha.classList.add('is-valid');
        return true;
    }
}

// Validación del campo Email
function validarEmail() {
    // Se obtiene el valor del email y se eliminan espacios en blanco
    const valor = email.value.trim();
    // Se remueven clases de validación anteriores
    email.classList.remove('is-valid', 'is-invalid');
    // Expresión regular para validar un formato de correo electrónico
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Verifica si el campo está vacío
    if (valor === '') {
        email.nextElementSibling.textContent = 'El campo Email no puede estar vacío.';
        email.classList.add('is-invalid');
        return false;
    }
    // Comprueba que el email cumpla con el formato esperado
    else if (!regexEmail.test(valor)) {
        email.nextElementSibling.textContent = 'Por favor, introduce un correo electrónico válido.';
        email.classList.add('is-invalid');
        return false;
    } else {
        // Si el email es correcto, se muestra mensaje de éxito y se marca como válido
        email.nextElementSibling.textContent = '¡Correo válido!';
        email.classList.add('is-valid');
        return true;
    }
}

// Validación del campo Teléfono
function validarTelefono() {
    // Se obtiene el valor del teléfono y se eliminan espacios en blanco
    const valor = telefono.value.trim();
    // Se remueven clases de validación anteriores
    telefono.classList.remove('is-valid', 'is-invalid');

    // Verificar si el campo está vacío
    if (valor === '') {
        telefono.nextElementSibling.textContent = 'El campo telefono no puede estar vacío.';
        telefono.classList.add('is-invalid');
        return false;
    }
    // Validar que el teléfono contenga solo números (0-9)
    else if (!/^\d+$/.test(valor)) {
        telefono.nextElementSibling.textContent = 'El telefono solo puede contener numeros [0-9]';
        telefono.classList.add('is-invalid');
        return false;
    } else {
        // Si el teléfono es correcto, se muestra mensaje de éxito y se añade la clase de validez
        telefono.nextElementSibling.textContent = 'Telefono válido!';
        telefono.classList.add('is-valid');
        return true;
    }
}

// ---------------------------------
// Manejo de eventos del formulario
// ---------------------------------

// Evento para limpiar los datos del formulario al hacer clic en el botón "Limpiar"
btnLimpiar.addEventListener('click', () => {
    // Se crea un toast de Bootstrap para notificar que se están limpiando los datos
    const toastEnviar = new bootstrap.Toast(document.getElementById('toastLimpiar'));
    toastEnviar.show();
    // Se reinicia el formulario
    formulario.reset();

    // Se limpian las clases de validación y mensajes de error/éxito de cada campo
    const campos = [nombre, apellido, fecha, email, telefono];
    campos.forEach(campo => {
        campo.classList.remove('is-valid', 'is-invalid');
        campo.nextElementSibling.textContent = '';
    });
});

// Evento para enviar el formulario
formulario.addEventListener('submit', (event) => {
    event.preventDefault(); // Previene el comportamiento por defecto de enviar el formulario y recargar la página

    // Se validan todos los campos del formulario y se guardan los resultados en variables
    const esNombreValido = validarNombre();
    const esApellidoValido = validarApellido();
    const esTelofonoValido = validarTelefono();
    const esEmailValido = validarEmail();
    const esFechaValida = validarFechaNacimiento();

    // Verificar que el checkbox de términos esté marcado
    if (!checkbox.checked) {
        // Si no está marcado, se añade la clase de invalidez y se termina la ejecución
        checkbox.classList.add('is-invalid');
        return;
    } else {
        // Si está marcado, se asegura de remover la clase de invalidez
        checkbox.classList.remove('is-invalid');
    }

    // Si todos los campos son válidos y el checkbox está marcado, se procede a enviar el formulario
    if (esNombreValido && esApellidoValido && esTelofonoValido && esEmailValido && esFechaValida && checkbox.checked) {
        // Se crea un toast de Bootstrap para notificar el envío correcto
        const toastEnviar = new bootstrap.Toast(document.getElementById('toastEnviar'));
        toastEnviar.show();
        formulario.reset(); // Se limpia el formulario tras el envío

        // Se eliminan las clases y mensajes de validación de todos los campos
        const campos = [nombre, apellido, telefono, email, fecha];
        campos.forEach(campo => {
            campo.classList.remove('is-valid', 'is-invalid');
            campo.nextElementSibling.textContent = '';
        });
    }
});

// -------------------------
// Validación en tiempo real
// -------------------------

// Se añade un listener de "input" para validar en tiempo real a medida que el usuario escribe en los campos
nombre.addEventListener('input', validarNombre);
apellido.addEventListener('input', validarApellido);
telefono.addEventListener('input', validarTelefono);
email.addEventListener('input', validarEmail);
fecha.addEventListener('input', validarFechaNacimiento);
