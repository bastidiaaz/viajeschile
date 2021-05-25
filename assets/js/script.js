// Habilitar tooltips
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
const tooltipList = tooltipTriggerList.map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));


// Contraer / colapsar cards
$('.card').on('click', (e) => {
  $('.card-body').toggle();
});

// Show / hide toast
$('#modal-button').on('click', (e) => {
  $('#liveToast').toggleClass('hide');
  $('#liveToast').toggleClass('show');
  setTimeout(() => {
    $('#liveToast').toggleClass('hide');
    $('#liveToast').toggleClass('show');
  }, 5000);
});

/*
  Componentes sin JS:
  - Navbar
  - Cards (implementación corriente)
  - Buttons
  - Carousel (en esta versión se puede implementar sin añadir JS propio)
  - Modal

  Componentes con JS:
  - Tooltips
  - Cards (toggle)
  - Toast
  - Typeform
*/
