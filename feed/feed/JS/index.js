/*JS PARA FILTRO DE GENEROS MUSICALES,
*/

// OBTENER LOS ELEMENTOS DE LOS CARDS
const cards = document.querySelectorAll('.card');

// OBTENER EL ELEMENTO DEL DROPDOWN
const dropdown = document.querySelector('.dropdown-menu');

// AÑADIR UN LISTNER PARA ESCUCHAR LOS CLICKS EN EL DROPDOWN
dropdown.addEventListener('click', (event) => {

  //PREVENIR QUE SE RECARGUE LA PAGINA AL HACER CLICK EN UNA OPCION DEL DROPDOWN
  event.preventDefault();

  // OBTENER EL VALOR DEL GENERO SELECCIONADO
  const genre = event.target.getAttribute('data-genre');

  // ITERAR SOBRE CADA CARD
  cards.forEach(card => {
    // OBTENER EL GENERO DEL CARD ACTUAL
    const cardGenre = card.getAttribute('data-genre');

    // SI LA CARD TIENE LA CLASE GENERAL QUE SE MUESTRE SIEMPRE
    if (card.classList.contains('general')) {
      card.style.display = 'block';
    }

    //SI EL GENERO DE LA CARD ACTUAL ES IGUAL AL GENERO SELECCIONADO EN EL DROPDOWN
    // MOSTRAR EL CARD, DE LO CONTRARIO QUE LA OCULTE
    else if (genre === 'todos' || cardGenre === genre) 
        card.style.display = 'block';
    else if (cardGenre === genre || genre === 'all') {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});
/*FIN DE JS PARA FILTRO DROPDOWN
*/


/*JS PARA BLOQUEAR LA REPRODUCCION SIMULTANEA DE ARCHIVOS DE AUDIO
*/
const players = document.querySelectorAll('audio'); // OBTIENE TODOS LOS ELEMENTOS DE AUDIO DE LA PAGINA
players.forEach(player => {
  player.addEventListener('play', () => {
    players.forEach(otherPlayer => {
      if (otherPlayer !== player && !otherPlayer.paused) {
        otherPlayer.pause(); // PAUSA LA REPRODUCCION DE OTROS ELEMENTOS DE AUDIO
        otherPlayer.ended
      }
    });
  });
});
/*FIN DE JS PARA REPRODUCTOR MUSICAL
*/

/*FUNCION JS PARA DESAPARECER LA ANIMACION DE PARTICULAS Y DESTRUIR SU CONTENEDOR TEMPORALMENTE
*/
function hideParticles() {
  var particlesContainer = document.getElementById('particles-container');
  //REMUEVE EL CSS DE MOSTRARSE EN PANTALLA
  particlesContainer.classList.remove('show');
  //PONE UN TIEMPO DE SALIDA
  setTimeout(function() { 
    // Detener la animación
    particlesJS('particles-container', 'destroy');
    // Ocultar el contenedor
    particlesContainer.style.display = 'none';
  }, 300); // AGREGA UN RETRASO DE 300MS ANTES QUE EL CONTENEDOR SEA DESTRUIDO, ESTO CON EL PROPOSITO DE QUE LA ANIMACION SE DESVANEZCA
        //Y NO DESAPAREZCA AL INSTANTE
/*FIN DE FUNCION JS PARA DESAPARICION DE ANIMACION DE PARTICULAS
*/

/*JS PARA DESAPARICION ANIMACION DE PARTICULAS DEL SEGUNDO CONTENEDOR DE ANIMACION, FUE DESACTIVADO POR PROBLEMAS DE SATURACION DENTRO DE LA PAGINA
  PERO ESTA DISPONIBLE PARA FUTUROS ARREGLOS Y POSIBLE RE INTEGRACION
*/
/*
  var particlesContainer = document.getElementById('particles-container2');
  particlesContainer.classList.remove('show2');
  setTimeout(function() {
    // Detener la animación
    particlesJS('particles-container', 'destroy');
    // Ocultar el contenedor
    particlesContainer.style.display = 'none';
  }, 300); // Agregamos un retraso de 100ms
  */
}
/*FIN DE FUNCION JS PARA DESAPARICION DE ANIMACION DE PARTICULAS
*/

/*FUNCION JS PARA MOSTRAR ANIMACION DE PARTICULAS
*/
function showParticles() {
    //VARIABLE QUE OBTIENE EL ELEMENTO CON EL ID CORRESPONDIENTE
  var particlesContainer = document.getElementById('particles-container');
  // MOSTRAR EL CONTENEDOR
  particlesContainer.classList.add('show');
  particlesContainer.style.display = 'block';
  //ANIMACION DE PARTICULAS
  particlesJS('particles-container', {
    "particles": {
        //CANTIDAD DE PARTICULAS
        "number": {
            "value": 150,
            "density": {
                "enable": true,
                "value_area": 800
            }
        //COLOR DE PARTICULAS
        },
        "color": {
            "value": "#ffffff"
        },
        //FORMA DE PARTICULAS
        "shape": {
            "type": "polygon",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        //OPACIDAD DE PARTICULAS
        "opacity": {
            "value": 0.5,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        //TAMAÑO DE PARTICULAS
        "size": {
            "value": 2, // ajustar este valor para cambiar el tamaño de las partículas
            "random": true,
            "anim": {
                "enable": false,
                "speed": 90,
                "size_min": 0.1,
                "sync": false
            }
        },
        //LINEAS DE ENLACE ENTRE PARTICULAS (DESACTIVADAS POR ESTETICA VISUAL)
        "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        //MOVILIDAD
        "move": {
            "enable": true,
            "speed": 7,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
});
/*JS PARA MOSTRAR ANIMACION DE PARTICULAS DEL SEGUNDO CONTENEDOR DE ANIMACION, FUE DESACTIVADO POR PROBLEMAS DE SATURACION DENTRO DE LA PAGINA
  PERO ESTA DISPONIBLE PARA FUTUROS ARREGLOS Y POSIBLE RE INTEGRACION
*/
/*
var particlesContainer = document.getElementById('particles-container2');
  particlesContainer.classList.add('show2');
  particlesContainer.style.display = 'block';
  particlesJS('particles-container2', {
    "particles": {
        "number": {
            "value": 150,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "polygon",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 2, // ajustar este valor para cambiar el tamaño de las partículas
            "random": true,
            "anim": {
                "enable": false,
                "speed": 90,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 7,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    // otras opciones de configuración de la animación...
});
*/
}
/*FIN DE JS PARA MOSTRAR ANIMACION DE PARTICULAS
*/


/*JS PARA FILTRO DE BUSQUEDA PARA ENCONTRAR TARJETAS POR NOMBRE,ARTISTA,FECHA DE LANZAMIENTO EN EL BUSCADOR DE LA PAGINA
*/
function searchCards() {
  //OBTENER LA ENTRADA DE BUSQUEDA DEL USUARIO
  var searchInput = $('#search-input').val().toLowerCase();
  //ITERAR ATRAVES DE TODAS LAS CARTAS
  $('.card').each(function () {
      //OBTENER EL CONTENIDO DE LA TARJETA Y CONVERTIRLO A MINUSCULA PARA UNA BUSQUEDA PRECISA
      var cardContent = $(this).text().toLowerCase();
      //VALIDAR SI EL CONTENIDO DE LA TARJETA ES IGUAL A LA DE LA BUSQUEDA
      // Y COMPROBAR SI LA TARJETA TIENE LA CLASE GENERAL
      var isGeneral = $(this).hasClass('general');
      if (cardContent.indexOf(searchInput) !== -1 || isGeneral) {
          //SI LA TARJETA COINCIDE, MOSTRARLA
          $(this).show().addClass('resultado-busqueda');
      } else {
          //SI NO COINCIDE, OCULTARLA
          $(this).hide().removeClass('resultado-busqueda');
      }
  });
  //COMPROBAR SI SE ENCONTARRON LAS TARJETAS QUE COINCIDEN CON LA BUSQUEDA
  if ($('.resultado-busqueda').length === 0) {
      //SI NO SE ENCONTRARON COINICIDENCIA ESCRIBIR UN MENSAJE DE ERROR
      $('#search-input').after('<p class="text-danger">No se encontraron resultados.</p>');
  } else {
      //SI SE ENCONTRARON COINCIDENCIAS, ELIMINAR EL MENSAJE DE ERROR
      $('.text-danger').remove();
  }
}
/*FIN DE JS PARA FILTRO DE BUSQUEDA
*/
//LLAMAR A LA FUNCION SEARCHCARD CUANDO EL FORMULARIO DE BUSQUEDA SE ENVIE
$('form').submit(function (event) {
  searchCards();
});

//LLAMAR A LA FUNCION SEARCHCARDS CUANDO SE ESCRIBA EN EL CAMPO DE BUSQUEDA
$('#search-input').on('input', function () {
  searchCards();
});
