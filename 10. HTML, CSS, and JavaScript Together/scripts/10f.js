function toggleButton(className) {
  const button = document.querySelector(`.js-button-${className}`);
  if (button.classList.contains('is-toggled')) {
    button.classList.remove('is-toggled');
  } else {
    button.classList.add('is-toggled');
  }
}