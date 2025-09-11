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

// Carga de preguntas y respuestas para el bot
const chatbotData = {
    "questions": [
        {
            "id": "installation",
            "text": "¿Qué incluye la instalación?",
            "response": "La instalación es gratuita e incluye la configuración del router y la conexión de fibra óptica en tu hogar o empresa.",
            "sub_questions": [
                {
                    "id": "schedule_install",
                    "text": "¿Cómo agendar la instalación?",
                    "response": "Puedes agendar llamando al +123 456 7890 o por WhatsApp."
                },
                {
                    "id": "time_install",
                    "text": "¿Cuánto tiempo toma la instalación?",
                    "response": "Generalmente 1-2 horas dependiendo de la complejidad."
                },
                {
                    "id": "back",
                    "text": "Volver al menú principal",
                    "response": "¿En qué más puedo ayudarte?"
                }
            ]
        },
        {
            "id": "contract",
            "text": "¿Hay contratos forzosos?",
            "response": "No, en Intercom puedes cancelar tu plan en cualquier momento sin penalizaciones.",
            "sub_questions": [
                {
                    "id": "cancel_process",
                    "text": "¿Cómo cancelar el servicio?",
                    "response": "Contacta a soporte al +123 456 7890 para procesar la cancelación."
                },
                {
                    "id": "back",
                    "text": "Volver al menú principal",
                    "response": "¿En qué más puedo ayudarte?"
                }
            ]
        },
        {
            "id": "support",
            "text": "¿Qué tan rápido es el soporte técnico?",
            "response": "Nuestro equipo está disponible 24/7, con un tiempo de respuesta promedio de 5 minutos.",
            "sub_questions": [
                {
                    "id": "contact_support",
                    "text": "¿Cómo contactar soporte?",
                    "response": "Por teléfono, WhatsApp o email a soporte@intercom.com."
                },
                {
                    "id": "back",
                    "text": "Volver al menú principal",
                    "response": "¿En qué más puedo ayudarte?"
                }
            ]
        },
        {
            "id": "plan_change",
            "text": "¿Puedo cambiar de plan?",
            "response": "Sí, puedes cambiar de plan en cualquier momento sin costo adicional.",
            "sub_questions": [
                {
                    "id": "change_process",
                    "text": "¿Cómo cambiar de plan?",
                    "response": "Contacta a ventas o usa el portal de cliente."
                },
                {
                    "id": "back",
                    "text": "Volver al menú principal",
                    "response": "¿En qué más puedo ayudarte?"
                }
            ]
        },
        {
            "id": "enterprise",
            "text": "¿Ofrecen servicios para empresas?",
            "response": "Sí, tenemos planes empresariales con IP fija, ancho de banda dedicado y soporte prioritario.",
            "sub_questions": [
                {
                    "id": "enterprise_plans",
                    "text": "¿Cuáles son los planes empresariales?",
                    "response": "Contacta para planes personalizados."
                },
                {
                    "id": "back",
                    "text": "Volver al menú principal",
                    "response": "¿En qué más puedo ayudarte?"
                }
            ]
        },
        {
            "id": "intercom_tv",
            "text": "¿Qué ofrece Intercom TV?",
            "response": "Intercom TV ofrece más de 100 canales, transmisión en alta calidad y compatibilidad con iOS, Android y Smart TVs. ¡El plan Super Expert incluye Intercom TV gratis!",
            "sub_questions": [
                {
                    "id": "tv_compatibility",
                    "text": "¿Compatibilidad de Intercom TV?",
                    "response": "Funciona en iOS, Android, Smart TVs y tablets."
                },
                {
                    "id": "back",
                    "text": "Volver al menú principal",
                    "response": "¿En qué más puedo ayudarte?"
                }
            ]
        }
    ]
};

const chatbotButton = document.getElementById('chatbot-button');
const chatbotModal = document.getElementById('chatbot-modal');
const closeChatbot = document.getElementById('close-chatbot');
const questionListModal = document.getElementById('question-list-modal');
const modalBody = document.querySelector('.modal-body');
let currentSubQuestions = null;
let isProcessing = false; 
let isInitialOpen = true;

// Funcion para ver preguntas
function renderQuestions(questions, isSub = false, isMainMenu = false) {
    const questionList = document.createElement('div');
    questionList.classList.add('question-list');
    if (isMainMenu) {
        questionList.classList.add('main');
    }
    questions.forEach(q => {
        const questionItem = document.createElement('div');
        questionItem.classList.add('question-item');
        if (q.id === 'back') {
            questionItem.classList.add('back');
        }
        questionItem.dataset.questionId = q.id;
        questionItem.dataset.isSub = isSub ? 'true' : 'false';
        questionItem.textContent = q.text;
        questionList.appendChild(questionItem);
    });
    modalBody.appendChild(questionList);
    addClickListeners();
    return questionList;
}

// Populate initial modal list
function initQuestions() {
    questionListModal.innerHTML = '';
    modalBody.querySelectorAll('.question-list').forEach(list => list.remove());
    renderQuestions(chatbotData.questions, false, true);
    currentSubQuestions = null;
}

// Add listeners to modal questions
function addClickListeners() {
    modalBody.querySelectorAll('.question-item').forEach(item => {
        item.addEventListener('click', () => {
            if (isProcessing) return;
            const questionId = item.dataset.questionId;
            const isSub = item.dataset.isSub === 'true';
            handleQuestion(questionId, isSub);
        });
    });
}

// burbujas de ws y tipeo
function showTypingBubble() {
    const typingElement = document.createElement('div');
    typingElement.classList.add('chat-message', 'typing');
    typingElement.innerHTML = '<div class="typing-dots"><span></span><span></span><span></span></div>';
    modalBody.appendChild(typingElement);
    return typingElement;
}

// Hacer responsive las letras
function typeResponse(message, callback) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message', 'bot');
    modalBody.appendChild(messageElement); // Append below typing bubble
    let i = 0;
    const speed = 30; // Milliseconds per character
    function type() {
        if (i < message.length) {
            messageElement.textContent += message.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            callback();
        }
    }
    type();
}

// Seleccion de preguntas
function handleQuestion(questionId, isSub) {
    isProcessing = true;
    let question;
    let parentQuestion = null;

    if (isSub) {
        for (const mainQ of chatbotData.questions) {
            if (mainQ.sub_questions) {
                question = mainQ.sub_questions.find(q => q.id === questionId);
                if (question) {
                    parentQuestion = mainQ;
                    break;
                }
            }
        }
    } else {
        question = chatbotData.questions.find(q => q.id === questionId);
    }

    if (question) {
        if (question.id === 'back') {
            modalBody.querySelectorAll('.question-list').forEach(list => list.remove());
            addUserMessage(question.text); 
            const typingElement = showTypingBubble();
            setTimeout(() => {
                typingElement.remove();
                typeResponse(question.response, () => {
                    renderQuestions(chatbotData.questions, false, true);
                    currentSubQuestions = null;
                    isProcessing = false;
                    modalBody.scrollTop = modalBody.scrollHeight;
                });
            }, 1500);
            return;
        }

        // Limpiar preguntas pricipales y dejar las subpreguntas
        modalBody.querySelectorAll('.question-list').forEach(list => list.remove());
        addUserMessage(question.text);
        const typingElement = showTypingBubble();
        setTimeout(() => {
            typingElement.remove();
            typeResponse(question.response, () => {
                if (isSub && currentSubQuestions) {
                    renderQuestions(currentSubQuestions, true);
                } else if (!isSub && question.sub_questions && question.sub_questions.length > 0) {
                    currentSubQuestions = question.sub_questions;
                    renderQuestions(currentSubQuestions, true);
                }
                isProcessing = false;
                modalBody.scrollTop = modalBody.scrollHeight; 
            });
        }, 1500); 
    } else {
        isProcessing = false;
    }
}

// Cuadro del boton del chatbot
chatbotButton.addEventListener('click', () => {
    if (chatbotModal.classList.contains('show')) {
        chatbotModal.classList.remove('show');
        chatbotModal.style.animation = 'scaleDown 0.3s ease-in forwards';
        currentSubQuestions = null;
    } else {
        chatbotModal.classList.add('show');
        chatbotModal.style.animation = 'scaleUp 0.3s ease-out forwards';
        if (isInitialOpen) {
            modalBody.scrollTop = 0;
            typeResponse('¡Hola! Bienvenido a Intercom. Selecciona una pregunta de la lista a continuación para obtener más información sobre nuestros servicios.', () => {
                initQuestions();
                isInitialOpen = false;
            });
        } else {
            initQuestions();
        }
    }
});

// Close chatbot
closeChatbot.addEventListener('click', () => {
    chatbotModal.classList.remove('show');
    chatbotModal.style.animation = 'scaleDown 0.3s ease-in forwards';
    currentSubQuestions = null; // Reset sub-questions
});

// Add user message to chat
function addUserMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message', 'user');
    messageElement.textContent = message;
    modalBody.appendChild(messageElement);
}

// Add bot message to chat (used only for initial greeting)
function addBotMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message', 'bot');
    messageElement.textContent = message;
    modalBody.appendChild(messageElement);
}
