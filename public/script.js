document.querySelector('.js-form').addEventListener('submit', (event) => {
  event.preventDefault();
  alert('Something went wrong, try again next year');
  event.target.reset();
});