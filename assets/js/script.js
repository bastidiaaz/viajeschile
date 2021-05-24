// Habilitar tooltips
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
const tooltipList = tooltipTriggerList.map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));


// Contraer / colapsar cards
$('.card').on('click', (e) => {
  $('.card-body').toggle();
});
