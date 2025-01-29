
function modoOscuro() {
    const body = document.body;
    body.classList.toggle("dark-mode");

    // Alternar clase del cuerpo para modo oscuro
    document.body.classList.toggle('modo-oscuro');

    // Cambiar el icono
    const icono = document.getElementById('icono');
    if (icono.classList.contains('bi-brightness-high-fill')) {
        icono.classList.remove('bi-brightness-high-fill');
        icono.classList.add('bi-moon-stars-fill');
    } else {
        icono.classList.remove('bi-moon-stars-fill');
        icono.classList.add('bi-brightness-high-fill');
    }



    const tabla = document.querySelector(".table");
    const tableHeader = document.querySelector(".table thead");
    const caption = document.querySelector(".table caption");

    const footer = document.querySelector("footer");
    const footerLinks = document.querySelectorAll("footer a"); // Seleccionar todos los enlaces dentro del footer

    //cambiar footer
    if (footer.classList.contains("bg-dark")) {
        footer.classList.remove("bg-dark");
        footer.classList.add("bg-light");
        footer.classList.remove("text-white");
        footer.classList.add("text-dark");
    } else {
        footer.classList.remove("bg-light");
        footer.classList.add("bg-dark");
        footer.classList.remove("text-dark");
        footer.classList.add("text-white");
    }

    footerLinks.forEach((link) => {
        if (link.classList.contains("text-white")) {
            link.classList.remove("text-white");
            link.classList.add("text-dark");
        } else {
            link.classList.remove("text-dark");
            link.classList.add("text-white");
        }
    });

    // Asegurar que las clases de los íconos no sean alteradas
    const footerIcons = footer.querySelectorAll("i");
    footerIcons.forEach((icon) => {
        if (!icon.classList.contains("bi")) return; // Preservar clases Bootstrap Icons
    });

    //cambiar tabla
    if (tabla.classList.contains("table-light")) {
        tabla.classList.remove("table-light");
        tabla.classList.add("table-dark");
    } else {
        tabla.classList.remove("table-dark");
        tabla.classList.add("table-light");
    }

    //cambiar cabecera
    if (tableHeader.classList.contains("table-dark")) {
        tableHeader.classList.remove("table-dark");
        tableHeader.classList.add("table-light");
    } else {
        tableHeader.classList.remove("table-light");
        tableHeader.classList.add("table-dark");
    }

    //cambair caption
    if (caption.classList.contains("text-light")) {
        caption.classList.remove("text-light");
        caption.classList.add("text-dark");
    } else {
        caption.classList.remove("text-dark");
        caption.classList.add("text-light");
    }
}



document.addEventListener("DOMContentLoaded", () => {
    const colorPicker = document.getElementById("tableColor");
    const table = document.getElementById("dataTable");

    colorPicker.addEventListener("input", (event) => {
        table.style.backgroundColor = event.target.value; // Eliminar "important"
    });
});




// Variable para rastrear la imagen activa en el carrusel
let currentImageIndex = 0;
let imageDescriptions = [
    "El Barca levantando el trofeo de la Champions League",
    "El Bayern alzandose con la victoria, 10 años después.",
    "El Real Madrid levantado su decimoquinta champios pesaos.",
    "El ansiado trofeo que todo equipo quiere levantar"
];

// Función para mostrar la imagen ampliada en el modal y el texto correspondiente
function showImage(imgElement, description) {
    const modalImage = document.getElementById("modalImage");
    modalImage.src = imgElement.src; // Establecer la imagen del modal

    // Mostrar el texto relacionado con la imagen
    const modalText = document.getElementById("modalText");
    modalText.textContent = description;

    // Ajustar la imagen al 50% de la pantalla
    modalImage.style.maxWidth = '120vw'; // Establecer el tamaño de la imagen

    // Asegurarse de que el modal se mantenga centrado
    const modalContent = document.getElementById("modal-content");
    modalContent.style.textAlign = 'center'; // Centra el contenido del modal
}

// Función para pasar a la siguiente imagen del carrusel
function nextImage() {
    const images = document.querySelectorAll(".carousel-item img");

    // Obtener la siguiente imagen (circular)
    currentImageIndex = (currentImageIndex + 1) % images.length;

    // Actualizar la imagen en el modal
    const modalImage = document.getElementById("modalImage");
    modalImage.src = images[currentImageIndex].src;

    // Actualizar el texto según la imagen
    const modalText = document.getElementById("modalText");
    modalText.textContent = imageDescriptions[currentImageIndex];
}

// Para que el modal se cierre sin problemas si es necesario
document.getElementById("imageModal").addEventListener("hidden.bs.modal", function () {
    document.body.classList.remove("modal-open");
});

// Cuenta regresiva hasta el siguiente miércoles
function updateCountdown() {
    const now = new Date();
    const dayOfWeek = now.getDay();
    const nextWednesday = new Date();
    const daysToWednesday = (3 - dayOfWeek + 7) % 7 || 7; // Calcula días restantes hasta miércoles

    nextWednesday.setDate(now.getDate() + daysToWednesday);
    nextWednesday.setHours(14, 0, 0, 0);

    if (nextWednesday.getTime() <= now.getTime()) {
        nextWednesday.setDate(nextWednesday.getDate() + 7);
    }

    const diff = nextWednesday - now;

    const hours = String(
        Math.floor((diff / (1000 * 60 * 60)) % 24)
    ).padStart(2, "0");
    const minutes = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(
        2,
        "0"
    );
    const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, "0");

    document.getElementById(
        "digitalClock"
    ).textContent = `Faltan ${hours}:${minutes}:${seconds} para la siguiente jornada de Champions League`;
}

setInterval(updateCountdown, 1000); // Actualizar cada segundo
updateCountdown(); // Llamar inmediatamente para inicializar
