
    // Obtener elementos del DOM
    const formulario = document.getElementById('formulario');
    const btnLimpiar = document.getElementById('btnLimpiar');
    const nombre = document.getElementById('nombre');
    const apellido = document.getElementById('apellido');
    const email = document.getElementById('email');
    const fecha = document.getElementById('fecha');
    const telefono = document.getElementById('telefono');
    const checkbox = document.getElementById('checkbox');

    // Validación de los campos

    // Validación del Nombre
    function validarNombre() {
        const valor = nombre.value.trim();
        nombre.classList.remove('is-valid', 'is-invalid');

        // Validar si el campo está vacío
        if (valor === '') {
            nombre.nextElementSibling.textContent = 'El campo Nombre no puede estar vacío.';
            nombre.classList.add('is-invalid');
            return false;
        }

        // Validar si el nombre contiene solo letras
        else if (!/^[a-zA-Z]+$/.test(valor)) {
            nombre.nextElementSibling.textContent = 'El Nombre solo puede contener letras (a-z, A-Z).';
            nombre.classList.add('is-invalid');
            return false;
        } else {
            nombre.nextElementSibling.textContent = '¡Nombre válido!';
            nombre.classList.add('is-valid');
            return true;
        }
    }


    // Validación del apellido
    function validarApellido() {
        const valor = apellido.value.trim();
        //ver esto
        apellido.classList.remove('is-valid', 'is-invalid');

        // Validar si el campo está vacío
        if (valor === '') {
            apellido.nextElementSibling.textContent = 'El campo Apellido no puede estar vacío.';
            apellido.classList.add('is-invalid');
            return false;
        }

        // Validar si el apellido contiene solo letras
        else if (!/^[a-zA-Z]+$/.test(valor)) {
            apellido.nextElementSibling.textContent = 'El Apellido solo puede contener letras (a-z, A-Z).';
            apellido.classList.add('is-invalid');
            return false;
        } else {
            apellido.nextElementSibling.textContent = 'Apellido válido!';
            apellido.classList.add('is-valid');
            return true;
        }
    }

    //Validacion fecha
    function validarFechaNacimiento() {
        const valor = fecha.value.trim();
        fecha.classList.remove('is-valid', 'is-invalid');
        if (valor === '') {
            fecha.nextElementSibling.textContent = 'El campo Fecha de Nacimiento no puede estar vacío.';
            fecha.classList.add('is-invalid');
            return false;
        } else {
            fecha.nextElementSibling.textContent = '¡Fecha válida!';
            fecha.classList.add('is-valid');
            return true;
        }
    }


    //Validacion Email
    function validarEmail() {
        const valor = email.value.trim();
        email.classList.remove('is-valid', 'is-invalid');
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (valor === '') {
            email.nextElementSibling.textContent = 'El campo Email no puede estar vacío.';
            email.classList.add('is-invalid');
            return false;
        } else if (!regexEmail.test(valor)) {
            email.nextElementSibling.textContent = 'Por favor, introduce un correo electrónico válido.';
            email.classList.add('is-invalid');
            return false;
        } else {
            email.nextElementSibling.textContent = '¡Correo válido!';
            email.classList.add('is-valid');
            return true;
        }
    }

    //Validar telefono
    function validarTelefono() {
        const valor = telefono.value.trim();
        //ver esto
        telefono.classList.remove('is-valid', 'is-invalid');

        // Validar si el campo está vacío
        if (valor === '') {
            telefono.nextElementSibling.textContent = 'El campo telefono no puede estar vacío.';
            telefono.classList.add('is-invalid');
            return false;
        }

        // Validar si el telefono contiene solo numeros
        else if (!/^\d+$/.test(valor)) {
            telefono.nextElementSibling.textContent = 'El telefono solo puede contener numeros [0-9]';
            telefono.classList.add('is-invalid');
            return false;
        } else {
            telefono.nextElementSibling.textContent = 'Telefono válido!';
            telefono.classList.add('is-valid');
            return true;
        }
    }

    // Evento para limpiar los datos del formulario
    btnLimpiar.addEventListener('click', () => {
            
            const toastEnviar = new bootstrap.Toast(document.getElementById('toastLimpiar'));
            toastEnviar.show();
            formulario.reset();

            const campos = [nombre, apellido, fecha, email, telefono];
            campos.forEach(campo => {
                campo.classList.remove('is-valid', 'is-invalid');
                campo.nextElementSibling.textContent = '';
            });
        });

    // Evento para enviar el formulario
    formulario.addEventListener('submit', (event) => {
        event.preventDefault();

        const esNombreValido = validarNombre();
        const esApellidoValido = validarApellido();
        const esTelofonoValido = validarTelefono();
        const esEmailValido = validarEmail();
        const esFechaValida = validarFechaNacimiento();

        // Verificar si el checkbox de términos está marcado
        if (!checkbox.checked) {
            checkbox.classList.add('is-invalid');
            return;
        } else {
            checkbox.classList.remove('is-invalid');
        }

        if (esNombreValido && esApellidoValido && esTelofonoValido && esEmailValido && esFechaValida && checkbox.checked) {
            const toastEnviar = new bootstrap.Toast(document.getElementById('toastEnviar'));
            toastEnviar.show();
            formulario.reset(); // Limpia el formulario

            // Eliminar clases y mensajes de validación
            const campos = [nombre, apellido, telefono, email, fecha];
            campos.forEach(campo => {
                campo.classList.remove('is-valid', 'is-invalid');
                campo.nextElementSibling.textContent = '';
            });
        }
    });

    // Validación en tiempo real
    nombre.addEventListener('input', validarNombre);
    apellido.addEventListener('input', validarApellido);
    telefono.addEventListener('input', validarTelefono);
    email.addEventListener('input', validarEmail);
    fecha.addEventListener('input', validarFechaNacimiento);
