// Inicializar AOS
AOS.init({
    duration: 1000,
    once: true
});

// Inicializar Swiper
const swiper = new Swiper('.testimonial-slider', {
    slidesPerView: 1,
    spaceBetween: 20,
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

// FAQ Toggle
document.querySelectorAll('.faq-item h5').forEach(item => {
    item.addEventListener('click', () => {
        const faq = item.parentElement;
        faq.classList.toggle('active');
    });
});

// Mobile Menu Toggle
function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}
// Mensaje a WhatsApp
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

