// Función para alternar el modo oscuro en la página
function modoOscuro() {
    // Selecciona el elemento body del documento
    const body = document.body;
    // Alterna la clase "dark-mode" en el body para aplicar estilos oscuros
    body.classList.toggle("dark-mode");

    // Alterna la clase "modo-oscuro" en el body (podría ser para estilos adicionales)
    document.body.classList.toggle('modo-oscuro');

    // Cambio del icono para reflejar el modo (sol/luna)
    const icono = document.getElementById('icono');
    if (icono.classList.contains('bi-brightness-high-fill')) {
        // Si el icono actual es de "sol", lo cambia por uno de "luna"
        icono.classList.remove('bi-brightness-high-fill');
        icono.classList.add('bi-moon-stars-fill');
    } else {
        // Si el icono es de "luna", lo cambia por uno de "sol"
        icono.classList.remove('bi-moon-stars-fill');
        icono.classList.add('bi-brightness-high-fill');
    }

    // Selecciona elementos de la tabla para alternar estilos de modo oscuro/claro
    const tabla = document.querySelector(".table");
    const tableHeader = document.querySelector(".table thead");
    const caption = document.querySelector(".table caption");

    // Selecciona el footer y todos los enlaces dentro del footer
    const footer = document.querySelector("footer");
    const footerLinks = document.querySelectorAll("footer a"); // Selecciona todos los enlaces dentro del footer

    // Cambiar estilos del footer según el modo actual
    if (footer.classList.contains("bg-dark")) {
        // Si el footer tiene fondo oscuro, se cambia a fondo claro y texto oscuro
        footer.classList.remove("bg-dark");
        footer.classList.add("bg-light");
        footer.classList.remove("text-white");
        footer.classList.add("text-dark");
    } else {
        // Si el footer tiene fondo claro, se cambia a fondo oscuro y texto blanco
        footer.classList.remove("bg-light");
        footer.classList.add("bg-dark");
        footer.classList.remove("text-dark");
        footer.classList.add("text-white");
    }

    // Alternar el color de los enlaces en el footer
    footerLinks.forEach((link) => {
        if (link.classList.contains("text-white")) {
            // Si el enlace tiene texto blanco, se cambia a texto oscuro
            link.classList.remove("text-white");
            link.classList.add("text-dark");
        } else {
            // Si el enlace tiene texto oscuro, se cambia a texto blanco
            link.classList.remove("text-dark");
            link.classList.add("text-white");
        }
    });

    // Asegura que los íconos dentro del footer con clase "bi" (Bootstrap Icons) no sean alterados
    const footerIcons = footer.querySelectorAll("i");
    footerIcons.forEach((icon) => {
        if (!icon.classList.contains("bi")) return; // No modifica íconos que no sean de Bootstrap
    });

    // Cambiar el estilo de la tabla: alterna entre "table-light" y "table-dark"
    if (tabla.classList.contains("table-light")) {
        tabla.classList.remove("table-light");
        tabla.classList.add("table-dark");
    } else {
        tabla.classList.remove("table-dark");
        tabla.classList.add("table-light");
    }

    // Cambiar el estilo del encabezado de la tabla (thead): alterna entre "table-dark" y "table-light"
    if (tableHeader.classList.contains("table-dark")) {
        tableHeader.classList.remove("table-dark");
        tableHeader.classList.add("table-light");
    } else {
        tableHeader.classList.remove("table-light");
        tableHeader.classList.add("table-dark");
    }

    // Cambiar el estilo del caption de la tabla: alterna entre "text-light" y "text-dark"
    if (caption.classList.contains("text-light")) {
        caption.classList.remove("text-light");
        caption.classList.add("text-dark");
    } else {
        caption.classList.remove("text-dark");
        caption.classList.add("text-light");
    }

    // Fin de la función de modo oscuro (no se realizan más cambios)
}

// Función para cambiar el color del encabezado de la tabla según la selección del usuario
document.addEventListener("DOMContentLoaded", function () {
    // Escucha cambios en el input de color con id "tableColor"
    document.getElementById("tableColor").addEventListener("input", function () {
        const selectedColor = this.value;  // Obtiene el color seleccionado

        // Cambia el color de fondo del encabezado de la tabla con id "dataTable"
        const header = document.querySelector("#dataTable thead");
        header.style.backgroundColor = selectedColor;  // Aplica el color seleccionado

        // También cambia el color de fondo de cada celda (th) del encabezado
        const headerCells = header.querySelectorAll("th");
        headerCells.forEach(cell => {
            cell.style.backgroundColor = selectedColor;
        });
    });
});

// Variable para rastrear la imagen actual en el carrusel
let currentImageIndex = 0;
// Array con las descripciones de las imágenes del carrusel
let imageDescriptions = [
    "El Barca levantando el trofeo de la Champions League",
    "El Bayern alzandose con la victoria, 10 años después.",
    "El Real Madrid levantado su decimoquinta champios pesaos.",
    "El ansiado trofeo que todo equipo quiere levantar"
];

// Función para mostrar una imagen ampliada en el modal junto con su descripción
function showImage(imgElement, description) {
    // Selecciona el elemento de imagen del modal y le asigna la fuente de la imagen clickeada
    const modalImage = document.getElementById("modalImage");
    modalImage.src = imgElement.src; // Establece la imagen en el modal

    // Actualiza el texto del modal con la descripción proporcionada
    const modalText = document.getElementById("modalText");
    modalText.textContent = description;

    // Ajusta el tamaño máximo de la imagen en el modal
    modalImage.style.maxWidth = '120vw'; // Se establece el ancho máximo de la imagen

    // Centra el contenido del modal para mejor visualización
    const modalContent = document.getElementById("modal-content");
    modalContent.style.textAlign = 'center'; // Centra el contenido del modal
}

// Función para avanzar a la siguiente imagen del carrusel
function nextImage() {
    // Selecciona todas las imágenes que están en el carrusel
    const images = document.querySelectorAll(".carousel-item img");

    // Calcula el siguiente índice de forma circular
    currentImageIndex = (currentImageIndex + 1) % images.length;

    // Actualiza la imagen en el modal con la siguiente imagen del carrusel
    const modalImage = document.getElementById("modalImage");
    modalImage.src = images[currentImageIndex].src;

    // Actualiza el texto del modal con la descripción correspondiente
    const modalText = document.getElementById("modalText");
    modalText.textContent = imageDescriptions[currentImageIndex];
}

// Evento para asegurar que el modal se cierre correctamente y se remueva la clase "modal-open"
document.getElementById("imageModal").addEventListener("hidden.bs.modal", function () {
    document.body.classList.remove("modal-open");
});

// Función para actualizar la cuenta regresiva hasta el siguiente miércoles
function updateCountdown() {
    const now = new Date(); // Fecha y hora actuales
    const dayOfWeek = now.getDay(); // Día de la semana (0 para domingo, 6 para sábado)
    const nextWednesday = new Date(); // Crea una nueva fecha para el próximo miércoles
    // Calcula los días restantes hasta el próximo miércoles (si es 0, se establece a 7)
    const daysToWednesday = (3 - dayOfWeek + 7) % 7 || 7;

    // Establece la fecha del próximo miércoles a las 14:00:00
    nextWednesday.setDate(now.getDate() + daysToWednesday);
    nextWednesday.setHours(14, 0, 0, 0);

    // Si el tiempo actual ya pasó el miércoles, añade 7 días más
    if (nextWednesday.getTime() <= now.getTime()) {
        nextWednesday.setDate(nextWednesday.getDate() + 7);
    }

    // Calcula la diferencia en milisegundos entre el próximo miércoles y ahora
    const diff = nextWednesday - now;

    // Convierte la diferencia en horas, minutos y segundos
    const hours = String(
        Math.floor((diff / (1000 * 60 * 60)) % 24)
    ).padStart(2, "0");
    const minutes = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, "0");
    const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, "0");

    // Actualiza el contenido del elemento con id "digitalClock" mostrando la cuenta regresiva
    document.getElementById("digitalClock").textContent = `Faltan ${hours}:${minutes}:${seconds} para la siguiente jornada de Champions League`;
}

// Actualiza la cuenta regresiva cada segundo y la inicializa inmediatamente
setInterval(updateCountdown, 1000); // Llama a updateCountdown cada segundo
updateCountdown(); // Inicializa la cuenta regresiva inmediatamente

// Cuando el documento se haya cargado, se ejecutan las siguientes funciones relacionadas con la API
document.addEventListener("DOMContentLoaded", function () {
    const apiUrl = "http://localhost:8080/api/champions"; // URL de la API (modificar según el entorno real)

    // Función para cargar los campeones desde la API y mostrarlos en la tabla
    function loadChampions() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const tableBody = document.getElementById("champions-table");
                tableBody.innerHTML = ""; // Limpia la tabla antes de agregar nuevas filas

                // Recorre cada objeto campeón y crea una fila en la tabla
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
                // Agrega eventos a cada botón de eliminar para remover la fila correspondiente
                const eliminarBtns = document.querySelectorAll('.eliminar-btn');
                eliminarBtns.forEach(btn => {
                    btn.addEventListener('click', function () {
                        const year = btn.getAttribute('data-year'); // Obtiene el año del campeón a eliminar
                        eliminarChampion(year, btn.closest('tr')); // Llama a la función para eliminar la fila y su registro
                    });
                });
            })
            .catch(error => console.error("Error cargando campeones:", error));
    }

    // Función para eliminar un campeón mediante la API y quitar la fila de la tabla
    function eliminarChampion(year, row) {
        if (!confirm("¿Seguro que quieres eliminar esta fila?")) return; // Pide confirmación al usuario

        fetch(`${apiUrl}/${year}`, { method: "DELETE" })
            .then(response => {
                if (!response.ok) {
                    throw new Error("No se pudo eliminar el campeón");
                }
                return response.text();
            })
            .then(() => {
                row.remove(); // Elimina la fila del DOM tras la eliminación exitosa
            })
            .catch(error => console.error("Error eliminando:", error));
    }

    // Evento para enviar el formulario que agrega un nuevo campeón
    document.getElementById("championForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Previene la recarga de la página al enviar el formulario

        // Captura los valores ingresados en el formulario
        const newChampion = {
            year: document.getElementById("year").value,
            sede: document.getElementById("sede").value,
            campeon: document.getElementById("campeon").value,
            subcampeon: document.getElementById("subcampeon").value,
            resultado: document.getElementById("resultado").value
        };

        // Envía el nuevo campeón a la API usando el método POST
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
                loadChampions(); // Recarga la tabla para mostrar el nuevo dato
                document.getElementById("championForm").reset(); // Limpia el formulario después de enviarlo
            })
            .catch(error => console.error("Error agregando campeón:", error));
    });

    // Carga la tabla de campeones al inicio
    loadChampions();
});

// Función para dibujar la gráfica de audiencia utilizando Chart.js
document.addEventListener("DOMContentLoaded", function () {
    // Definir colores para la cuadrícula de la gráfica
    var originalGridColor = 'rgba(0, 0, 0, 0.1)'; // Color original de la cuadrícula
    var whiteGridColor = 'rgba(255, 255, 255, 0.3)'; // Color alternativo (blanco) para la cuadrícula

    // Obtiene el contexto 2D del canvas con id "audienceChart"
    var ctx = document.getElementById('audienceChart').getContext('2d');
    // Crea una nueva gráfica de barras
    var audienceChart = new Chart(ctx, {
        type: 'bar',
        data: {
            // Etiquetas para el eje X representando los años
            labels: ['2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
            datasets: [{
                label: 'Audiencia (millones)',
                data: [350, 380, 360, 370, 380, 350, 320, 350], // Datos de audiencia para cada año
                // Colores de fondo para cada barra
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(199, 199, 199, 0.2)',
                    'rgba(83, 102, 255, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)'
                ],
                // Colores para el borde de cada barra
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(199, 199, 199, 1)',
                    'rgba(83, 102, 255, 1)',
                    'rgba(255, 205, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true, // La gráfica se adapta al tamaño del contenedor
            scales: {
                y: {
                    beginAtZero: true, // El eje Y comienza en 0
                    title: {
                        display: true,
                        text: 'Audiencia (millones)' // Título del eje Y
                    },
                    grid: {
                        color: originalGridColor // Color de la cuadrícula en el eje Y
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Año' // Título del eje X
                    },
                    grid: {
                        color: originalGridColor // Color de la cuadrícula en el eje X
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Audiencia de la Final de Champions League por Año', // Título de la gráfica
                    color: 'gray' // Color del título
                }
            }
        }
    });
    // Evento para cambiar el color de la cuadrícula al pulsar el botón con id "cambiarColor"
    document.getElementById('cambiarColor').addEventListener('click', function () {
        // Obtiene el color actual de la cuadrícula
        var currentColor = audienceChart.options.scales.x.grid.color;
        // Alterna entre el color blanco y el color original
        var newColor = currentColor === whiteGridColor ? originalGridColor : whiteGridColor;

        // Actualiza el color de la cuadrícula en ambos ejes (x e y)
        audienceChart.options.scales.x.grid.color = newColor;
        audienceChart.options.scales.y.grid.color = newColor;

        audienceChart.update(); // Refresca la gráfica para aplicar el nuevo color
    });
});
