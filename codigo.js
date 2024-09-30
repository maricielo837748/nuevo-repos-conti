// script.js
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita que el formulario se envíe de forma tradicional
        alert("¡Gracias por tu mensaje! Nos pondremos en contacto pronto.");
        form.reset(); // Limpia el formulario
    });
});


