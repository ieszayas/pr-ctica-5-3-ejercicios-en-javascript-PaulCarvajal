// Referencia al elemento <select> que permite al usuario elegir el contenido
const selector = document.getElementById('contentSelector');
// Referencia al área donde se mostrará el contenido correspondiente a la opción elegida
const contentArea = document.getElementById('contentArea');

// Se añade un listener para detectar cuando cambia la selección en el <select>
selector.addEventListener('change', function () {
    // Se obtiene el valor seleccionado del <select>
    const selectedValue = selector.value; // Valor de la opción seleccionada

    // Según el valor seleccionado, se mostrará contenido distinto en el área designada
    switch (selectedValue) {
        // Caso para la opción '1'
        case '1':
            // Se asigna un bloque de HTML específico a contentArea para la opción 1
            contentArea.innerHTML = `
            <h4>Conoce más sobre lo que paso ese año...</h4>
                 <div class="container text-center espacio ">
                    
                    <div class="row align-items-start">
                        <div class="col">
                           <div class="card" style = "width: 18rem;" >
                            <h4>MVP</h4>
                                <img src="../media/viniM.webp" class="card-img-top tamaño-img" alt="vinivini">
                                    <div class="card-body">
                                        <h5 class="card-title">MVP del torneo</h5>
                                        <p class="card-text">Gracias a su gran campaña y valentía, fue nombrado el mejor jugador 
                                        de la temporada 2023/2024 del certamen por el panel de Observadores 
                                        Técnicos de la UEFA, siendo, además, importante en los partidos decisivos. .</p>
                                    </div>
                           </div>   
                         </div>
                    <div class="col">
                         <div class="card" style = "width: 18rem;" >
                            <h4>Entrenador</h4>
                                <img src="../media/ancheloti.webp" class="card-img-top tamaño-img" alt="entrenador">
                                    <div class="card-body">
                                        <h5 class="card-title">Carlo Ancelotti</h5>
                                      <p>El estratega del Real Madrid es el director técnico 
                                        con más trofeos de la justa en su haber. Carlo ha sido campeón de la 
                                        Champions en cuatro ocasiones.</p>
                                    </div>
                           </div> 
                    </div>
                    <div class="col">
                         <div class="card" style = "width: 18rem;" >
                            <h4>Sede</h4>
                                <img src="../media/sede2024.jpg" class="card-img-top tamaño-img" alt="Wembley Stadium de Londres.">
                                    <div class="card-body">
                                        <h5 class="card-title">Wembley Stadium de Londres.</h5>
                                        <p class="card-text">El evento más importante del calendario del fútbol 
                                        europeo de clubes regresó a la sede londinense por octava vez, y la tercera
                                        en la era de la UEFA Champions League tras las finales de 2011 y 2013.</p>
                                    </div>
                           </div> 
                    </div>
                </div>
                `;
            // Se rompe el switch para no ejecutar otros casos
            break;

        // Caso para la opción '2'
        case '2':
            // Se asigna otro bloque de HTML específico a contentArea para la opción 2
            contentArea.innerHTML = `
            <h4>Conoce más sobre lo que paso ese año...</h4>
                 <div class="container text-center espacio ">
                    
                    <div class="row align-items-start">
                        <div class="col">
                           <div class="card" style = "width: 18rem;" >
                            <h4>MVP</h4>
                                <img src="../media/rodri.jpg" class="card-img-top tamaño-img" alt="Rodrigo">
                                    <div class="card-body">
                                        <h5 class="card-title">Rodrigo Hernandez</h5>
                                        <p class="card-text">El centrocampista del Manchester City, Rodri Hernández, ha sido elegido 
                                        este domingo como MVP de la Champions 2022/2023. El español ha sido un fijo para Pep Guardiola 
                                        durante todo el torneo y la temporada, disputando 56 partidos en los que ha marcado 4 goles y 
                                        dado 7 asistencias.</p>
                                    </div>
                           </div>   
                         </div>
                    <div class="col">
                         <div class="card" style = "width: 18rem;" >
                            <h4>Entrenador</h4>
                                <img src="../media/pep.jpg" class="card-img-top tamaño-img" alt="Pep Guardiola  ">
                                    <div class="card-body">
                                        <h5 class="card-title">Pep Guardiola</h5>
                                      <p>Guardiola se convirtió en el cuarto entrenador en ganar tres veces la Copa 
                                      de Europa tras el triunfo del Manchester City 2023 sobre el Inter en Estambul 
                                      y necesita una más para igualar el récord de Carlo Ancelotti de cuatro.</p>
                                    </div>
                           </div> 
                    </div>
                    <div class="col">
                         <div class="card" style = "width: 18rem;" >
                            <h4>Sede</h4>
                                <img src="../media/allianz_arena.jpg" class="card-img-top tamaño-img" alt="Allianz Arena">
                                    <div class="card-body">
                                        <h5 class="card-title">Allianz Arena.</h5>
                                        <p class="card-text">El estadio Allianz Arena del FC Bayern München, en Múnich, ha sido seleccionado como sede para albergar la final de la UEFA Champions League de 2022/23. La capital de Baviera ya albergó las finales de 1993, 1997 y 2012 con gran éxito organizativo y de participación.</p>
                                    </div>
                           </div> 
                    </div>
                </div>
            `;
            // Se rompe el switch para no ejecutar otros casos
            break;

    

        // Caso por defecto: si no se selecciona ninguna opción válida
        default:
            // Se muestra un mensaje indicando que se debe seleccionar una opción
            contentArea.innerHTML = "Por favor, selecciona una opción del menú desplegable para ver el contenido aquí.";
            break;
    }
});
