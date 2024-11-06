// --- Аккордион в разделе PROGRAM -----------------

// Первый вариант, когда можно открыть все элементы
// $('.program__acc-link').on('click', function (e){
//   e.preventDefault()
//   $(this).toggleClass('program__acc-link--active')
//   $(this).children('.program__acc-text').slideToggle()
// })

// Второй вариант, когда при открытии одного, закрываются
// все остальные
$('.program__acc-link').on('click', function (e){
  e.preventDefault();
  
  //  Если тек актив, то
  //      со всех убираем актив и все схлопываем
  //  Если тек не актив
  //      все схлопываем
  //      всем убираем актив
  //      текущему ставим актив
  //      текущий раскрываем

  if ($(this).hasClass('program__acc-link--active')) {
    $('.program__acc-link').removeClass('program__acc-link--active');
    $('.program__acc-text').slideUp();
  }
  else {
    $('.program__acc-link').removeClass('program__acc-link--active');
    $('.program__acc-text').slideUp();
    $(this).addClass('program__acc-link--active');
    $(this).children('.program__acc-text').slideDown();
  }
})


// --- Плавный скролинг до нужного якоря --------------------
$(".header__nav-list a, .header__top-btn, .footer__bottom-go-link").on("click", function (e) {
  e.preventDefault()
  var id = $(this).attr('href'),
    top = $(id).offset().top
  $('body,html').animate({ scrollTop: top }, 800)
})