window.$ = window.jQuery = require('jquery');
require(`./jquery.nice-select`)
import 'slick-carousel'



$(document).ready(() => {
	//Fixed menu
	function fixed_menu() {
		if ($(window).scrollTop() > 0) {
			$('.js-fixed').addClass('fixed');
			$('.js-search__results').addClass('fixed__results');
			$('.js-main').addClass('is-fixed');
		}
		else {
			$('.js-fixed').removeClass('fixed');
			$('.js-search__results').removeClass('fixed__results');
			$('.js-main').removeClass('is-fixed');
		}
	}

	fixed_menu();
	$(window).scroll(function () {
		fixed_menu();
	});

	//Slick slider in prime section
	$('.js-prime__slider').slick({
		dots: true,
		arrows: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="slick-prev prime__slick-prev"><svg class="icon icon-arrow_sl_l"><use xlink:href="#icon-arrow_sl_l"></use></svg></button>',
		nextArrow: '<button type="button" class="slick-next prime__slick-next"><svg class="icon icon-arrow_sl_r"><use xlink:href="#icon-arrow_sl_r"></use></svg></button>',
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
				}
			},
		]
	});

	//Slick slider in news section
	$('.news__actions__slider').slick({
		// autoplay: true,
		dots: false,
		arrows: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="slick-prev news__actions__slick-prev"><svg class="icon icon-arrow-l"><use xlink:href="#icon-arrow-l"></use></svg></button>',
		nextArrow: '<button type="button" class="slick-next news__actions__slick-next"><svg class="icon icon-arrow-r"><use xlink:href="#icon-arrow-r"></use></svg></button>',
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					dots: true
				}
			},
		]
	});

	//Mobile menu toggle
	$('.js-header__menu__btn').click(() => {
		$('.js-mobile').slideToggle()
		$('.js-header__menu__btn').toggleClass('header__menu__btn_close')
	})

	//Search menu open
	$('.js-header__search__button').click(() => {
		$('.js-search').addClass('search__open')
		$('.js-search__results').slideDown()
	})

	//Search menu close
	$('.js-search__form__close').click(() => {
		$('.js-search').removeClass('search__open')
		$('.js-search__results').slideUp()
	})

	//Styles for "select" tag
	$('.js-network__select').niceSelect()

	//Navigation products submenu
	$('.js-navigation__products').click(() => {
		$('.navigation__products__wrapper').toggleClass('js-hover')
	})

	//Yandex map
	ymaps.ready(function () {
		var myMap = new ymaps.Map('map', {
				center: [55.751574, 37.573856],
				zoom: 9
			}, {
				searchControlProvider: 'yandex#search'
			}),

			//Content in marks
			BigIconContentLayout = ymaps.templateLayoutFactory.createClass(
				'<div class="mark__content__big">$[properties.iconContent]</div>'
			),
			MediumIconContentLayout = ymaps.templateLayoutFactory.createClass(
				'<div class="mark__content__medium">$[properties.iconContent]</div>'
			),

			//Small mark
			smallMark000 = new ymaps.Placemark([55.596168, 37.523422], {
				hintContent: 'Это маленькая метка',
				balloonContent: 'Ясеневский лесопарк'
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'images/mark-small.svg',
				iconImageSize: [39, 45],
				iconImageOffset: [-19.5, -45]
			}),

			//Medium mark
			mediumMark000 = new ymaps.Placemark([55.661574, 38.573856], {
				hintContent: 'Where is the small rum? ',
				balloonContent: 'Freebooters fall with endurance! ',
				iconContent: '7'
			}, {
				iconLayout: 'default#imageWithContent',
				iconImageHref: 'images/mark-big.svg',
				iconImageSize: [57, 67],
				iconImageOffset: [-27.5, -67],
				iconContentOffset: [23, 15],
				iconContentLayout: MediumIconContentLayout
			}),

			//Big mark
			bigMark000 = new ymaps.Placemark([55.661574, 37.573856], {
				balloonContentHeader: '<a href = "#" class="balloon__header">Медико-биологический \n' +
					'центр Фармалад</a>',
				balloonContentBody:
					'<div class="balloon__body">' +
						'<div class="balloon__address">г. Воронеж, ул. Правды, дом 26, офис 2</div>' +
						'<div class="balloon__phone">+7 (960) 138 89 76</div>' +
						'<div class="balloon__email">voronej@farm.ru</div>' +
						'<div class="balloon__work-time">пн-пт 9:00-18:00</div>' +
					'</div>',
				hintContent: 'Медицико-биологический \n' +
					'центр Фармалад',
				iconContent: '12'
			}, {
				//Options
				iconLayout: 'default#imageWithContent',
				iconImageHref: 'images/mark-big.svg',
				iconImageSize: [90, 108],
				iconImageOffset: [-45, -108],
				iconContentOffset: [25, 25],
				iconContentLayout: BigIconContentLayout
			});

		myMap.behaviors
			.disable(
				[
					'drag',
					'rightMouseButtonMagnifier',
					'scrollZoom'
				]
			)
			// .enable('ruler');

		myMap.controls
			.remove('zoomControl')
			.remove('geolocationControl')
			.remove('trafficControl')
			.remove('typeSelector')
			// .remove('inputSearch')
			.remove('fullscreenControl')
			.remove('rulerControl')

		myMap.geoObjects
			.add(smallMark000)
			.add(mediumMark000)
			.add(bigMark000);
	});
})
