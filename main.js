// Número de WhatsApp: solo dígitos (54 9 + área + número)
const WHATSAPP = "5493468509019";
// Mensaje inicial de WhatsApp según el idioma de la página (<html lang="...">)
const MENSAJES = {
  es: "Hola Felizia, me gustaría saber cómo la IA puede ayudar a mi empresa.",
  en: "Hi Felizia, I'd like to know how AI can help my business.",
  pt: "Olá Felizia, gostaria de saber como a IA pode ajudar minha empresa."
};
const LANG = (document.documentElement.lang || "es").slice(0, 2);
const MENSAJE = MENSAJES[LANG] || MENSAJES.es;
const waUrl = "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(MENSAJE);
document.querySelectorAll(".wa-link").forEach(a => {
  a.href = waUrl; a.target = "_blank"; a.rel = "noopener";
});

document.getElementById("year").textContent = new Date().getFullYear();

// Menú móvil
const toggle = document.querySelector(".menu-toggle");
const menu = document.getElementById("menu");
toggle.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});
menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  menu.classList.remove("open"); toggle.setAttribute("aria-expanded", "false");
}));

// El logo siempre vuelve al principio de la página
document.querySelector(".brand").addEventListener("click", e => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  history.replaceState(null, "", location.pathname);
});

// Borde del header al hacer scroll
const header = document.querySelector("header");
addEventListener("scroll", () => header.classList.toggle("scrolled", scrollY > 8), { passive: true });

// Aparición suave de secciones
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }), { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));
} else {
  document.querySelectorAll(".reveal").forEach(el => el.classList.add("in"));
}
