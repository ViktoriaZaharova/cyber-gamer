// слайдер
$('.gallery-slider').slick({
    slidesToShow: 3,
    variableWidth: true,
    infinity: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                variableWidth: false,

            }
        }
    ]
});

// активная ссылка меню
$('.menu li a').each(function () {
    var location = window.location.href;
    var link = this.href;
    if (location == link) {
        $(this).addClass('active');
    }
});
// end

// панель вопросов
$('.panel_heading .block_title').click(function () {
    $(this).toggleClass('in').next().slideToggle();
    $('.panel_heading .block_title').not(this).removeClass('in').next().slideUp();
});

// mobile menu
$('.btn-burger').click(function () {
   $('.navigation').fadeIn();
});

$('.btn-close').click(function () {
    $('.navigation').fadeOut();
});


// модальные окна (несколько)
$(document).ready(function () {
    var overlay = $('.overlay');
    var open_modal = $('.open_modal');
    var close = $('.modal__close, .overlay');
    var modal = $('.modal__div');

    open_modal.click(function (event) {
        event.preventDefault();
        var div = $(this).attr('href');
        overlay.fadeIn(400,
            function () {
                $(div)
                    .css('display', 'flex')
                    .animate({
                        opacity: 1,
                        top: '50%'
                    }, 200);
            });
    });

    close.click(function () {
        modal
            .animate({
                    opacity: 0,
                    top: '45%'
                }, 200,
                function () {
                    $(this).css('display', 'none');
                    overlay.fadeOut(400);
                }
            );
    });
});
//end

// паралакс
var sceneOne = document.getElementById('parallax-bg__one');
var parallaxInstance = new Parallax(sceneOne);

var sceneTwo = document.getElementById('parallax-bg__two');
var parallaxInstance = new Parallax(sceneTwo);

var sceneThree = document.getElementById('parallax-bg__three');
var parallaxInstance = new Parallax(sceneThree);

var sceneFour = document.getElementById('gallery-parallax__one');
var parallaxInstance = new Parallax(sceneFour);

var sceneFive = document.getElementById('about-parallax__one');
var parallaxInstance = new Parallax(sceneFive);

var sceneSex = document.getElementById('about-parallax__two');
var parallaxInstance = new Parallax(sceneSex);

var sceneSeven = document.getElementById('about-parallax__three');
var parallaxInstance = new Parallax(sceneSeven);

var sceneEight = document.getElementById('about-parallax__four');
var parallaxInstance = new Parallax(sceneEight);

var sceneCallback = document.getElementById('callback-section__bg');
var parallaxInstance = new Parallax(sceneCallback);




$(document).ready(function () {
    // Инициализация карты
    ymaps.ready(init);

    function init () {

        //Центрирование и выбор масштаба карты
        var myMap = new ymaps.Map('map', {
            center: [51.659470, 39.205407],
            zoom: 14
        });

        // Создание своей метки
        var myPlacemark = new ymaps.Placemark(
            // Координаты метки
            [51.669470, 39.205407] , {
                // Свойства метки
                hintContent: '', //Подсказка при наведении на маркер
                iconContent: '<div class="loc-name"> г.Воронеж, ул. Фридриха <br>Энегельса, 25б, оф. 403</div>',

            }, {
                iconImageHref: 'img/loc.svg',  // картинка иконки
                iconImageSize: [45, 45],                                      // размеры картинки
                iconImageOffset: [-70, -40],// смещение картинки

            });

        // Добавление метки на карту
        myMap.geoObjects.add(myPlacemark);

        //Элементы управления
        myMap.controls
        // Кнопка изменения масштаба
            .add('zoomControl')
            // Список типов карты
            .add('typeSelector')
            // Кнопка изменения масштаба - справа
            .add('smallZoomControl', { right: 5, top: 75 })
            // Стандартный набор кнопок
            .add('mapTools')
            //Линейка масштаба
            .add(new ymaps.control.ScaleLine());
    }
})



