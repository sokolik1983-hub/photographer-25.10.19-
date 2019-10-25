// Скрипт отслеживает элементы с wow-расширением и при скролле обновляет их.
// Repeat demo content
var $body = $('body');
var $box = $('.box');
for (var i = 0; i < 20; i++) {
    $box.clone().appendTo($body);
}

// Helper function for add element box list in WOW
WOW.prototype.addBox = function(element) {
    this.boxes.push(element);
};

// Init WOW.js and get instance
var wow = new WOW();
wow.init();

// Attach scrollSpy to .wow elements for detect view exit events,
// then reset elements and add again for animation
$('.wow').on('scrollSpy:exit', function() {
    $(this).css({
        'visibility': 'hidden',
        'animation-name': 'none'
    }).removeClass('animated');
    wow.addBox(this);
}).scrollSpy();





$(document).ready(FUNCTION() { // Ждём загрузки страницы
    $(".content__img").click(FUNCTION(){    // Событие клика на маленькое изображение
            let img = $(THIS);    // Получаем изображение, на которое кликнули
            let src = img.attr('src'); // Достаем из этого изображения путь до картинки
        $("body").append("<div class='popup'>"+ //Добавляем в тело документа разметку всплывающего окна
        "<div class='popup_bg'></div>"+ // Блок, который будет служить фоном затемненным
        "<img src='"+src+"' class='popup_img' />"+ // Само увеличенное фото
        "</div>");
        $(".popup").fadeIn(800); // Медленно выводим изображение
        $(".popup_bg").click(FUNCTION(){    // Событие клика на затемненный фон

            $(".popup").fadeOut(800);    // Медленно убираем всплывающее окно

            setTimeout(FUNCTION() {    // Выставляем таймер
                $(".popup").remove(); // Удаляем разметку всплывающего окна

            } 800)

        });

    });



});
