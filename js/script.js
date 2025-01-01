$(document).ready(function() {
  let isGray = false;

  $('#toggleColorButton').on('click', function() {
    if (isGray) {
      $('*').css('color', '');
      $(this).text('Поменять цвет текста на серый');
    } else {
      $('*').css('color', 'gray');
      $(this).text('Вернуть исходный цвет текста');
    }
    isGray = !isGray;
  });
});

document.querySelectorAll('.button').forEach(button => {
  button.addEventListener('mouseenter', () => {
      button.style.transform = 'scale(1.1)'; // Увеличение размера кнопки
      button.style.transition = 'transform 0.3s ease'; // Плавный переход
  });

  button.addEventListener('mouseleave', () => {
      button.style.transform = 'scale(1)'; // Возврат к изначальному размеру
  });
});

