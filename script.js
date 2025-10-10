// Actualiza el año del footer automáticamente
document.getElementById('year').textContent = new Date().getFullYear();

// Formulario (simulado)
const form = document.getElementById('contactForm');
form.addEventListener('submit', function(e){
  e.preventDefault();
  alert('Gracias — mensaje enviado (simulado).');
  form.reset();
});