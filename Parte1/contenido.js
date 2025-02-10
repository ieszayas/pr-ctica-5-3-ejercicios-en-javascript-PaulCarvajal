
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


//funcion para cambiar de color la tabla
document.addEventListener("DOMContentLoaded", function () {
    // Escuchar el cambio del input de color
    document.getElementById("tableColor").addEventListener("input", function() {
        const selectedColor = this.value;  // Obtener el valor del color seleccionado

        // Cambiar el color del encabezado de la tabla
        const header = document.querySelector("#dataTable thead");
        header.style.backgroundColor = selectedColor;  // Cambiar el color del encabezado

        // Si quieres, también puedes cambiar el color de las celdas del encabezado
        const headerCells = header.querySelectorAll("th");
        headerCells.forEach(cell => {
            cell.style.backgroundColor = selectedColor;
        });
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


/*
const API_URL = "http://localhost:8080/api/champions"; // API corriendo en tu PC
fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        console.log("Datos recibidos de la API:", data); // 🛠 Agregado para depurar
        const tableBody = document.getElementById("champions-table");
        tableBody.innerHTML = "";

        data.forEach(champ => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${champ.year}</td>
                <td>${champ.sede}</td>
                <td>${champ.campeon}</td>
                <td>${champ.subcampeon}</td>
                <td>${champ.resultado}</td>
            `;
            tableBody.appendChild(row);
        });
    })
    .catch(error => console.error("Error al obtener los datos:", error));
*/

document.addEventListener("DOMContentLoaded", function () {
    const apiUrl = "http://localhost:8080/api/champions"; // Reemplaza con tu API

    // Función para cargar la tabla desde la API
    function loadChampions() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const tableBody = document.getElementById("champions-table");
                tableBody.innerHTML = ""; // Limpiar tabla
                
                data.forEach(champion => {
                    const row = document.createElement("tr");
                    row.innerHTML = `
                        <td>${champion.year}</td>
                        <td>${champion.sede}</td>
                        <td>${champion.campeon}</td>
                        <td>${champion.subcampeon}</td>
                        <td>${champion.resultado}</td>
                        <td class="transparente"><button class="eliminar-btn" data-year="${champion.year}"><i class="bi bi-trash-fill"></i></button></td>
                    `;
                    tableBody.appendChild(row);
                });
                 // Agregar evento de eliminación a los botones
                 const eliminarBtns = document.querySelectorAll('.eliminar-btn');
                 eliminarBtns.forEach(btn => {
                     btn.addEventListener('click', function () {
                         const year = btn.getAttribute('data-year');
                         eliminarChampion(year, btn.closest('tr')); // Pasar también la fila para eliminarla
                     });
                 });
            })
            .catch(error => console.error("Error cargando campeones:", error));
    }

    // Función para eliminar una celda
    function eliminarChampion(year, row) {
        if (!confirm("¿Seguro que quieres eliminar esta fila?")) return;

        fetch(`${apiUrl}/${year}`, { method: "DELETE" })
            .then(response => {
                if (!response.ok) {
                    throw new Error("No se pudo eliminar el campeón");
                }
                return response.text();
            })
            .then(() => {
                row.remove(); // Eliminar la fila del DOM
            })
            .catch(error => console.error("Error eliminando:", error));
    }



//metodo para que el usuario meta celdas
document.getElementById("championForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que la página se recargue

    // Capturar los valores del formulario
    const newChampion = {
        year: document.getElementById("year").value,
        sede: document.getElementById("sede").value,
        campeon: document.getElementById("campeon").value,
        subcampeon: document.getElementById("subcampeon").value,
        resultado: document.getElementById("resultado").value
    };

    // Enviar el nuevo dato a la API
    fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newChampion)
    })
    .then(response => response.json())
    .then(data => {
        console.log("Campeón agregado:", data);
        loadChampions(); // Recargar la tabla con el nuevo dato
        document.getElementById("championForm").reset(); // Limpiar formulario
    })
    .catch(error => console.error("Error agregando campeón:", error));
});

// Cargar la tabla al inicio
loadChampions();
});