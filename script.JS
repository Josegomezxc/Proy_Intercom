// Inicializar AOS
AOS.init({
    duration: 1000,
    once: false,
    mirror: true
});

// Mobile Menu Toggle
function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

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

// scroll para subir hasta el inicio
window.addEventListener('scroll', function() {
        const button = document.querySelector('.btn-scroll');
        const scrollPosition = window.scrollY || document.documentElement.scrollTop;
        const showThreshold = 200;

        if (scrollPosition > showThreshold) {
            button.classList.add('show-btn');
        } else {
            button.classList.remove('show-btn');
        }
    });