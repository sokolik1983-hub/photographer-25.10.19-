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





