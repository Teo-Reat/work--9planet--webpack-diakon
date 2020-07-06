import $ from 'jquery'
// import './formstyler'
import 'slick-carousel'

$(document).ready(() => {
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

	$('.news__actions__slider').slick({
		autoplay: true,
		dots: true,
		arrows: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
	});

	$('.js-header__menu__btn').click(() => {
		$('.js-mobile').slideToggle()
		$('.js-header__menu__btn').toggleClass('header__menu__btn_close')
	})


	// $('#network__select').styler()
})
