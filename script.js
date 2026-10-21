// UMER ENGLISH — configuración rápida
// Cambiá el número de prueba por tu WhatsApp real antes de publicar.
// Formato: código de país + número, solo dígitos. Argentina: 549 + código de área + número.
const UMER_CONFIG = {
  whatsappNumber: "5491166624151",
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
