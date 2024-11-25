/*const swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
  */
// FUNCIONES DE SWIPER JS
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
  const swiper = new Swiper('.swiper-container', {
    // Configuración básica
    direction: 'horizontal',  // Puedes cambiar a 'vertical' si lo prefieres
    loop: false,               // Hace que el carrusel sea infinito
  
    // Si has agregado los elementos de paginación y navegación
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // Opciones adicionales
    autoplay: {
      delay: 3000,            // Cambia de slide automáticamente cada 3 segundos
      disableOnInteraction: false,
    },
    slidesPerView: 6,          // Número de slides visibles al mismo tiempo
    spaceBetween: 20,          // Espacio entre slides en píxeles
    autoplay: false //AUTOPLAY DEsactivado
  });

  // Función para desactivar o activar los botones según el índice actual
  const updateNavigationButtons = () => {
    const prevButton = document.querySelector('.swiper-button-prev');
    const nextButton = document.querySelector('.swiper-button-next');

    // Deshabilita el botón "prev" si estamos en el primer slide
    if (swiper.activeIndex === 0) {
      prevButton.classList.add('swiper-button-disabled');
      prevButton.setAttribute('disabled', true);
    } else {
      prevButton.classList.remove('swiper-button-disabled');
      prevButton.removeAttribute('disabled');
    }

    // Deshabilita el botón "next" si estamos en el último slide
    if (swiper.activeIndex === swiper.slides.length - 1) {
      nextButton.classList.add('swiper-button-disabled');
      nextButton.setAttribute('disabled', true);
    } else {
      nextButton.classList.remove('swiper-button-disabled');
      nextButton.removeAttribute('disabled');
    }
  };

  // Llama a la función cuando se cambie el slide
  swiper.on('slideChange', updateNavigationButtons);

  // Llama a la función al cargar la página para ajustar los botones según el slide inicial
  updateNavigationButtons();

  // Marca el enlace activo
  document.querySelectorAll('.navbar .nav-link').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('.navbar .nav-link.active')?.classList.remove('active');
        this.classList.add('active');
    });
});

//↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

// Funciones de boton flotante de wsp


// Configuración del número de WhatsApp y mensaje predeterminado
// const whatsappNumber = "51983556152"; // Cambia este número al que deseas recibir mensajes
// const defaultMessage = "Hola, estoy interesado en sus productos."; // Mensaje predeterminado

// // Función para abrir WhatsApp con el mensaje predeterminado
// document.getElementById("newWhatsAppButton").addEventListener("click", function(event) {
//     event.preventDefault(); // Prevenir la acción predeterminada del enlace
//     const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;
//     window.open(whatsappURL, "_blank"); // Abre WhatsApp en una nueva pestaña
// });

//↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
document.querySelectorAll(".whatsapp-float").forEach((button) => {
  button.addEventListener("click", () => {
      console.log("Botón de WhatsApp presionado");
      // Aquí puedes agregar lógica adicional si es necesario.
  });
});
