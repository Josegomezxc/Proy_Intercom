// Inicializar AOS
AOS.init({
    duration: 1000,
    once: false,
    mirror: true
});

// Mobile Menu Toggle
function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    const overlay = document.getElementById('menu-overlay');
    
    // Verificar que los elementos existen antes de manipularlos
    if (menu && overlay) {
        menu.classList.toggle('active');
        overlay.classList.toggle('active');
        
        // Prevenir scroll del body cuando el menú está abierto
        if (menu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }
}

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Cerrar menú al cambiar tamaño de ventana a desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 768) { // md breakpoint
            const menu = document.getElementById('mobile-menu');
            const overlay = document.getElementById('menu-overlay');
            
            if (menu && overlay) {
                menu.classList.remove('active');
                overlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    });

    // Cerrar menú con tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const menu = document.getElementById('mobile-menu');
            const overlay = document.getElementById('menu-overlay');
            
            if (menu && overlay && menu.classList.contains('active')) {
                menu.classList.remove('active');
                overlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    });
});

// Permitir solo letras y espacios en el input
document.getElementById('nombre').addEventListener('input', function () {
    this.value = this.value.replace(/[^A-Za-zÁÉÍÓÚáéíóúÑñ\s]/g, '');
}); 

// Mensaje a WhatsApp de contacto
document.getElementById('whatsapp-btn').addEventListener('click', (e) => {
e.preventDefault();
const nombre = document.getElementById('nombre').value.trim();
const plan = document.getElementById('plan').value;
const phoneNumber = '+593990818133';

if (nombre === "") {
    Swal.fire({
        icon: 'warning',
        title: 'Campo requerido',
        text: 'Por favor, ingresa tu nombre antes de continuar.',
        confirmButtonColor: '#f97316',
        confirmButtonText: 'Entendido'
    });
    return;
}
const message = `Hola, soy ${nombre}. Estoy interesado en el plan ${plan}. ¿Pueden darme más información?`;
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
window.open(whatsappUrl, '_blank');
});

// carrusel de palnes
const swiperPlanes = new Swiper('.testimonial-slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        }
    }
});

// boton de whatsapp flotante
document.querySelector('.btn-whatsapp').addEventListener('click', (e) => {
    e.preventDefault();
    const phoneNumber = '+593990818133';
    const message = `Estimados, deseo información sobre los planes disponibles, ya que estoy interesado en contratar uno.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
});

 // Botón de scroll
const scrollButton = document.querySelector('.button');
const heroSection = document.getElementById('inicio');
const heroHeight = heroSection.offsetHeight;

function checkScroll() {
    if (window.scrollY > heroHeight) {
        scrollButton.classList.add('show-btn');
    } else {
        scrollButton.classList.remove('show-btn');
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);



document.addEventListener("DOMContentLoaded", function () {
        const banner = document.getElementById("cookie-banner");
        const acceptBtn = document.getElementById("accept-cookies");
        const rejectBtn = document.getElementById("reject-cookies");
        const closeBanner = document.getElementById("close-banner");
        const modal = document.getElementById("cookie-modal");
        const closeModal = document.getElementById("close-modal");
        const link = document.getElementById("cookies-link");

        // Función para mostrar una notificación
        function showNotification(message, type = 'success') {
            const notification = document.createElement('div');
            notification.className = `notification ${type}`;
            notification.textContent = message;
            document.body.appendChild(notification);

            // Muestra la notificación con un pequeño retraso para la transición
            setTimeout(() => {
                notification.classList.add('show');
            }, 10);

            // Oculta y elimina la notificación después de 3 segundos
            setTimeout(() => {
                notification.style.right = '-320px';
                setTimeout(() => notification.remove(), 400);
            }, 3000);
        }

        // Lógica principal: Comprueba si ya existe una elección de cookies
        const userChoice = localStorage.getItem("cookies-choice");

        if (userChoice !== "accepted") {
            // Si el usuario no ha aceptado, muestra el banner con animación
            setTimeout(() => {
                banner.style.transform = "translateY(0)";
            }, 500);
        } else {
            // Si el usuario ya aceptó, oculta el banner inmediatamente
            banner.style.display = "none";
        }

        // Evento para el botón Aceptar
        acceptBtn.addEventListener("click", () => {
            localStorage.setItem("cookies-choice", "accepted");
            banner.style.transform = "translateY(100%)";
            setTimeout(() => banner.style.display = "none", 500);
            showNotification('¡Gracias! Has aceptado el uso de cookies.');
        });

        // Evento para el botón Rechazar
        rejectBtn.addEventListener("click", () => {
            localStorage.setItem("cookies-choice", "rejected");
            banner.style.transform = "translateY(100%)";
            setTimeout(() => banner.style.display = "none", 500);
            showNotification('Has rechazado las cookies opcionales.', 'info');
        });

        // Evento para el botón de cerrar banner
        closeBanner.addEventListener("click", () => {
            banner.style.transform = "translateY(100%)";
            setTimeout(() => banner.style.display = "none", 500);
        });

        // Eventos para el modal de políticas
        link.addEventListener("click", (e) => {
            e.preventDefault();
            modal.style.display = "flex";
        });

        closeModal.addEventListener("click", () => {
            modal.style.display = "none";
        });

        // Cerrar modal al hacer clic fuera
        modal.addEventListener("click", (e) => {
            if(e.target === modal) modal.style.display = "none";
        });
    });

