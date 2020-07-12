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
	// ymaps.ready(function () {
	// 	var myMap = new ymaps.Map('map', {
	// 			center: [55.751574, 37.573856],
	// 			zoom: 9
	// 		}, {
	// 			searchControlProvider: 'yandex#search'
	// 		}),
	//
	// 		//Content in marks
	// 		BigIconContentLayout = ymaps.templateLayoutFactory.createClass(
	// 			'<div class="mark__content__big">$[properties.iconContent]</div>'
	// 		),
	// 		MediumIconContentLayout = ymaps.templateLayoutFactory.createClass(
	// 			'<div class="mark__content__medium">$[properties.iconContent]</div>'
	// 		),
	//
	// 		//Small mark
	// 		smallMark000 = new ymaps.Placemark([55.596168, 37.523422], {
	// 			hintContent: 'Это маленькая метка',
	// 			balloonContent: 'Ясеневский лесопарк'
	// 		}, {
	// 			iconLayout: 'default#image',
	// 			iconImageHref: 'images/mark-small.svg',
	// 			iconImageSize: [39, 45],
	// 			iconImageOffset: [-19.5, -45]
	// 		}),
	//
	// 		//Medium mark
	// 		mediumMark000 = new ymaps.Placemark([55.661574, 38.573856], {
	// 			hintContent: 'Where is the small rum? ',
	// 			balloonContent: 'Freebooters fall with endurance! ',
	// 			iconContent: '7'
	// 		}, {
	// 			iconLayout: 'default#imageWithContent',
	// 			iconImageHref: 'images/mark-big.svg',
	// 			iconImageSize: [57, 67],
	// 			iconImageOffset: [-27.5, -67],
	// 			iconContentOffset: [23, 15],
	// 			iconContentLayout: MediumIconContentLayout
	// 		}),
	//
	// 		//Big mark
	// 		bigMark000 = new ymaps.Placemark([55.661574, 37.573856], {
	// 			balloonContentHeader: '<a href = "#" class="balloon__header">Медико-биологический \n' +
	// 				'центр Фармалад</a>',
	// 			balloonContentBody:
	// 				'<div class="balloon__body">' +
	// 					'<div class="balloon__address">г. Воронеж, ул. Правды, дом 26, офис 2</div>' +
	// 					'<div class="balloon__phone">+7 (960) 138 89 76</div>' +
	// 					'<div class="balloon__email">voronej@farm.ru</div>' +
	// 					'<div class="balloon__work-time">пн-пт 9:00-18:00</div>' +
	// 				'</div>',
	// 			hintContent: 'Медицико-биологический \n' +
	// 				'центр Фармалад',
	// 			iconContent: '12'
	// 		}, {
	// 			//Options
	// 			iconLayout: 'default#imageWithContent',
	// 			iconImageHref: 'images/mark-big.svg',
	// 			iconImageSize: [90, 108],
	// 			iconImageOffset: [-45, -108],
	// 			iconContentOffset: [25, 25],
	// 			iconContentLayout: BigIconContentLayout
	// 		});
	//
	// 	myMap.behaviors
	// 		.disable(
	// 			[
	// 				'drag',
	// 				'rightMouseButtonMagnifier',
	// 				'scrollZoom'
	// 			]
	// 		)
	// 		// .enable('ruler');
	//
	// 	myMap.controls
	// 		.remove('zoomControl')
	// 		.remove('geolocationControl')
	// 		.remove('trafficControl')
	// 		.remove('typeSelector')
	// 		// .remove('inputSearch')
	// 		.remove('fullscreenControl')
	// 		.remove('rulerControl')
	//
	// 	myMap.geoObjects
	// 		.add(smallMark000)
	// 		.add(mediumMark000)
	// 		.add(bigMark000);
	// });

	$(function () {
		if ($('#map').length) {
			var markers = [
				[54.942092, 37.405220],
				[54.974596, 37.445918],
				[55.843894, 38.731038]
			]
			var mapHeight = $('#map').height();

			ymaps.ready(function() {

				var map = new ymaps.Map ("map", {
						center: [54.942092, 37.405220],
						zoom: 6,
						behaviors: ['default'],
						controls: []
					}),
					MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
						'<span style="font-weight: 600;font-size: 18px;">{{ properties.geoObjects.length }}</span>'
					),
					clusterer = new ymaps.Clusterer({
						clusterIcons: [
							{
								href: 'images/mark-big.svg',
								size: [57, 67],
								offset: [-27.5, -67],
								iconContentOffset: [23, 15],
							},
							{
								href: 'images/mark-big.svg',
								size: [90, 108],
								offset: [-45, -108],
								iconContentOffset: [25, 25],
							}],
						clusterNumbers: [100],
						clusterIconContentLayout: MyIconContentLayout
					});


				var MyBalloonLayout = ymaps.templateLayoutFactory.createClass(
					'<div class="popover">' +
					'<div class="popover__arrow"></div>' +
					'<div class="popover__inner">' +
					'<a class="popover__close" href="#"><svg class="icon icon-close"><use xlink:href="#icon-close"></use></svg></a>' +
					'$[[options.contentLayout observeSize minWidth=300 maxWidth=366]]' +
					'<span class="popover__tail"></span>' +
					'</div>' +
					'</div>', {
						build: function () {
							this.constructor.superclass.build.call(this);

							this._$element = $('.popover', this.getParentElement());

							this.applyElementOffset();

							this._$element.find('.popover__close')
								.on('click', $.proxy(this.onCloseClick, this));
						},
						clear: function () {
							this._$element.find('.popover__close')
								.off('click');

							this.constructor.superclass.clear.call(this);
						},
						onSublayoutSizeChange: function () {
							MyBalloonLayout.superclass.onSublayoutSizeChange.apply(this, arguments);

							if(!this._isElement(this._$element)) {
								return;
							}

							this.applyElementOffset();

							this.events.fire('shapechange');
						},
						applyElementOffset: function () {
							this._$element.css({
								left: -(this._$element[0].offsetWidth / 2),
								top: -(this._$element[0].offsetHeight + this._$element.find('.popover__arrow')[0].offsetHeight)
							});
						},
						onCloseClick: function (e) {
							e.preventDefault();

							this.events.fire('userclose');
						},
						getShape: function () {
							if(!this._isElement(this._$element)) {
								return MyBalloonLayout.superclass.getShape.call(this);
							}

							var position = this._$element.position();

							return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([
								[position.left, position.top], [
									position.left + this._$element[0].offsetWidth,
									position.top + this._$element[0].offsetHeight + this._$element.find('.popover__arrow')[0].offsetHeight
								]
							]));
						},
						_isElement: function (element) {
							return element && element[0] && element.find('.popover__arrow')[0];
						}
					});

				var MyBalloonContentLayout = ymaps.templateLayoutFactory.createClass(
					'<div class="popover__content">$[properties.balloonContent]</div>'
				);

				map.behaviors.disable(['scrollZoom']);

				let geoObjects = [];

				for (var i = 0; i < markers.length; i++) {
					var marker = markers[i];
					//       balloon__phone = '',
					//       balloon__email = '',
					//       balloon__site = '';

					// if (marker['PHONE']) {
					//   balloon__phone =  '<p class="partnerPhone"><i class="fas fa-phone"></i> <a href=tel:"'+marker['PHONE']+'">'+marker['PHONE']+'</a></p>';
					// }

					// if (marker['EMAIL']) {
					//   balloon__email = '<p class="partnerEmail"><i class="fas fa-envelope"></i> <a href="mailto:'+marker['EMAIL']+'">'+marker['EMAIL']+'</a></p>';
					// }

					// if (marker['SITE']) {
					//   balloon__site = '<p class="partnerSite"><i class="fas fa-home"></i> <a href="//'+marker['SITE']+'" target="_blank" title="'+marker['NAME']+'">'+marker['SITE']+'</a></p>';
					// }

					var balloon = '<div class="ballon">'+
						'<div class="ballon__head">'+
						'<div class="baloon__logo">'+
						'<img src="img/logo.svg" alt="Магазин в Серпухове" title="Магазин в Серпухове" />'+
						'</div>'+
						'<div class="ballon__name">Магазин в Серпухове</div>'+
						'</div>'+
						'<div class="baloon__body">'+
						'<div class="baloon__line">'+
						'<svg class="icon icon-phone"><use xlink:href="#icon-phone"></use></svg>'+
						'<a href="tel:+7 (926) 047-32-22">+7 (926) 047-32-22</a>'+
						'</div>'+
						'<div class="baloon__line">'+
						'<svg class="icon icon-worktime"><use xlink:href="#icon-worktime"></use></svg>'+
						'<span>с 10:00 до 22:00</span>'+
						'</div>'+
						'<div class="baloon__line">'+
						'<svg class="icon icon-address"><use xlink:href="#icon-address"></use></svg>'+
						'<span>Московская область, город Серпухов, Московское шоссе, 55</span>'+
						'</div>'+
						'</div>'+
						'</div>';


					geoObjects[i] = new ymaps.Placemark(marker, {
						balloonContent: balloon,
						hintContent: 'Магазин в Серпухове',
					}, {
						balloonLayout: MyBalloonLayout,
						balloonContentLayout: MyBalloonContentLayout,
						iconLayout: 'default#image',
						iconImageHref: 'images/mark-small.svg',
						iconImageSize: [39, 45],
						iconImageOffset: [-19.5, -45]
					});

				}

				clusterer.add(geoObjects);
				map.geoObjects.add(clusterer);

				map.controls.add('zoomControl', {
					size: 'small',
					float: 'none',
					position: {
						top: mapHeight/2 - 30,
						right: '45px'
					}
				});
			});
		}
	});
})
