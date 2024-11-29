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