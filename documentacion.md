# Documentación del Proyecto: TodoFutbol  


## Índice  
1. [Introducción](#1-introducción) 
2. [Requisitos](#2-requisitos)
2. [Estructura del Proyecto](#3-estructura-del-proyecto)  
3. [Librerías y Recursos Externos](#4-librerías-y-recursos-externos)  
4. [Funcionalidades Interesantes](#5-funcionalidades-interesantes)  
5. [Validaciones](#6-validaciones)  
6. [Conclusión](#7-conclusión)  

---

## 1. Introducción  
TodoFutbol es una plataforma web interactiva centrada en la UEFA Champions League, desarrollada para explorar datos históricos, gestionar suscripciones y visualizar información clave. Combina tecnologías frontend como **HTML5, CSS3 y JavaScript** con herramientas modernas (Bootstrap, Chart.js) para ofrecer una experiencia dinámica y accesible.

---

## 2. Requisitos  
Para que la web funcione correctamente, es necesario ejecutar un archivo en **Maven** llamado **PaqueteApi**. Este archivo proporciona la API necesaria para las operaciones CRUD. Si no está en ejecución, no se podrá acceder a las funciones de la API y la web no mostrará los datos dinámicos.

--- 
## 3. Estructura del Proyecto  

### 3.1 Archivos Principales:  
- **`contenido.html`**  
   - **Función**: Página principal con componentes interactivos.  
   - **Componentes Clave**:  
     - *Tabla de campeones*: Muestra datos desde 2015 hasta 2025 (proyectado), con opción de eliminar filas.  
     - *Carrusel de imágenes*: Incluye 4 imágenes ampliables en un modal con descripciones personalizadas.  
     - *Formulario de añadir campeones*: Permite insertar nuevos registros en la tabla.  
     - *Gráfico de audiencia*: Visualiza datos de espectadores usando Chart.js.  
     - *Reloj digital*: Cuenta regresiva para la próxima jornada.  
- **`contenido.js`**  
   - **Funcionalidades**:  
     - *Modo oscuro*: Alterna estilos del body, tabla, footer y gráfico.  
     - *Consumo de API*: Realiza operaciones CRUD (`GET`, `POST`, `DELETE`) con una API local.  
     - *Control del carrusel*: Navegación entre imágenes y sincronización con el modal.  
     - *Configuración del gráfico*: Renderiza y actualiza colores basados en el modo oscuro.  

- **`contenido.css`**  
   - **Estilos Destacados**:  
     - Diseño responsivo del carrusel (`width: 80%`, `height: 60vh`).  
     - Personalización del navbar (logo ajustado a 40px de altura).  
     - Efectos hover en la tabla (`table-hover`).  

- **`datosInteresantes.html`**  
   - **Función**: Muestra detalles específicos de finales (MVP, entrenador, sede).  
   - **Dinamismo**:  
     - Selector desplegable para elegir el año (2023 o 2024).  
     - Tarjetas responsivas con imágenes (`object-fit: cover`) y texto descriptivo.  

- **`datos.js`**  
   - **Lógica**: Carga contenido HTML dinámico según la selección del usuario, utilizando templates literales.  

- **`formulario.html`**  
   - **Propósito**: Formulario de suscripción con validación en tiempo real.  
   - **Características**:  
     - Campos para nombre, apellido, email, teléfono y fecha de nacimiento.  
     - Notificaciones Toast para confirmar envío/limpieza de datos.  

- **`formulario.js`**  
   - **Validaciones**:  
     - Regex para nombre/apellido (`/^[a-zA-Z]+$/`).  
     - Formato de email y teléfono (`pattern="\d{9}"`).  
     - Edad mínima (18 años).  

### 3.2 Carpetas y Recursos:  
- **`media/`**: Almacena imágenes del carrusel, logos y fondos.  
- **CSS modular**: Estilos separados por páginas (`contenido.css`, `datos.css`, `form.css`).

---

## 4. Librerías y Recursos Externos  
| Recurso               | Uso                                                                     |  
|-----------------------|-------------------------------------------------------------------------|  
| **Bootstrap 5.3**     | Maquetación responsiva, componentes (navbar, modal, Toast).            |  
| **Bootstrap Icons**   | Íconos en botones (trash, moon, sun) y redes sociales.                 |  
| **Chart.js v4**       | Gráfico de audiencia con animaciones y personalización de colores.     |  
| **Fetch API**         | Comunicación con endpoint `http://localhost:8080/api/champions`.       |

---

## 5. Funcionalidades Interesantes  

### 5.1 Modo Oscuro Adaptativo  
- Alterna entre temas sin recargar la página.  
- Afecta a todos los componentes: body, tabla, footer y gráfico.  
- Persistencia visual mediante clases CSS (`dark-mode`).  

### 5.2 Interacción con API Local  
- **CRUD Completo**:  
  - *CREATE*: Añade registros desde el formulario.  
  - *DELETE*: Elimina filas con confirmación interactiva.  
  - *READ*: Carga datos iniciales al iniciar la página.  

### 5.3 Carrusel + Modal Integrado  
- Las imágenes del carrusel pueden ampliarse en un modal con descripciones únicas.  
- Botón "Pasar imagen" para navegar sin cerrar el modal.  

### 5.4 Gráfico Interactivo  
- Actualiza el color de la cuadrícula al cambiar al modo oscuro.  
- Datos estáticos pero estructurados para futura escalabilidad.  

### 5.5 Validaciones en Tiempo Real  
- Feedback inmediato con clases de Bootstrap (`is-valid`, `is-invalid`).  
- Regex aplicados mientras el usuario escribe.

---

## 6. Validaciones  

### 6.1 Formulario de Suscripción:  
- **Nombre/Apellido**:  
   - Solo caracteres alfabéticos.  
   - Mínimo 4 letras.  
- **Email**:  
   - Formato `usuario@dominio.com`.  
- **Teléfono**:  
   - Exactamente 9 dígitos.  
- **Fecha de Nacimiento**:  
   - Fecha máxima: 14 de enero de 2007 (mayoría de edad).  
- **Checkbox Obligatorio**:  
   - Aceptación de términos para enviar el formulario.

### 6.2 Mecanismos de Feedback:  
- Mensajes de error bajo cada campo.  
- Toast de Bootstrap para confirmar acciones.

---

## 7. Conclusión  
TodoFutbol representa un esfuerzo integral por aplicar los conocimientos adquiridos en el ciclo de DAM, integrando tecnologías frontend y backend de manera cohesiva. El proyecto no solo cumple con los requisitos funcionales (CRUD, validaciones, diseño responsivo), sino que también incorpora elementos innovadores como el modo oscuro adaptativo y la interacción con APIs, demostrando competencia en el manejo de JavaScript moderno y librerías externas.

Durante el desarrollo, se enfrentaron desafíos técnicos como la sincronización del modal con el carrusel y la gestión asíncrona de datos mediante Fetch API, superados mediante investigación y prueba-error. Como aprendizajes clave, destacan la importancia de la modularización del código y la planificación previa de la estructura de datos.


*Documento elaborado por Paúl Carvajal*