// FORMULÁRIO DE CAPTURA
const form = document.getElementById('signup-form');
const emailInput = document.getElementById('email');
const message = document.getElementById('form-message');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const email = emailInput.value.trim();

  if(validateEmail(email)) {
    message.style.color = '#00ff99';
    message.textContent = "Obrigado! Seu capítulo grátis será enviado para o e-mail.";
    emailInput.value = '';
  } else {
    message.style.color = '#ff3b2e';
    message.textContent = "Por favor, insira um e-mail válido.";
  }
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
