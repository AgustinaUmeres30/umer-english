// UMER ENGLISH — configuración rápida
// Cambiá el número de prueba por tu WhatsApp real antes de publicar.
// Formato: código de país + número, solo dígitos. Argentina: 549 + código de área + número.
const UMER_CONFIG = {
  whatsappNumber: "5491100000000",
  email: "umerenglish30@gmail.com"
};

document.getElementById("year").textContent = new Date().getFullYear();
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
menuToggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
});
nav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("is-open");
  menuToggle?.setAttribute("aria-expanded", "false");
  menuToggle?.setAttribute("aria-label", "Abrir menú");
}));
const whatsappLink = document.getElementById("whatsapp-link");
if (whatsappLink && UMER_CONFIG.whatsappNumber) whatsappLink.href = `https://wa.me/${UMER_CONFIG.whatsappNumber}`;
document.querySelectorAll("[data-service]").forEach(link => {
  const service = link.dataset.service;
  const message = encodeURIComponent(`¡Hola, Agus! Me interesa conocer más sobre ${service}.`);
  link.href = `https://wa.me/${UMER_CONFIG.whatsappNumber}?text=${message}`;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});


// Animaciones suaves: cada bloque aparece al entrar en pantalla.
const revealTargets = document.querySelectorAll(
  'main section > *, main section article, main section .service-card, main section .testimonial, main section .fit-card, main section .resource-card'
);
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  revealTargets.forEach((element, index) => {
    element.setAttribute('data-reveal', '');
    const siblings = Array.from(element.parentElement.children).filter(child => child.hasAttribute('data-reveal'));
    element.style.setProperty('--reveal-delay', `${Math.min(siblings.indexOf(element) * 85, 340)}ms`);
  });
  document.documentElement.classList.add('has-reveal');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
  revealTargets.forEach(element => revealObserver.observe(element));
}
