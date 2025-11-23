/* ================================
   VARIABLES, CONSTANTES Y ALERT
================================ */
const MENSAJE = "El Sistema Tributario Municipal se encarga de recaudar impuestos para financiar servicios públicos.";

function mostrarMensaje() {
    alert(MENSAJE);
}

/* ================================
   USO DE PROMPT Y CONFIRM
   Pedirle el nombre al usuario
=============================== */
function preguntarNombre() {
    const nombre = prompt("Bienvenido vecino, ¿cómo te llamas?");
    if (nombre) {
        alert("Hola " + nombre + ", gracias por visitar el portal tributario.");
    }
}

/* ================================
   MANIPULACIÓN DEL DOM
   Cambiar el título de forma dinámica
================================ */
function cambiarTitulo() {
    document.querySelector("#inicio h2").textContent = "Portal Tributario - Información Actualizada con JavaScript";
}

/* ================================
   MENÚ RESPONSIVO (BÁSICO)
================================ */
function toggleMenu() {
    const nav = document.querySelector("nav ul");
    nav.classList.toggle("mostrar");
}

