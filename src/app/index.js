import $ from 'jquery'
// import './formstyler'
import 'slick-carousel'

$(document).ready(() => {
	$('.prime__slider').slick({
		autoplay: true,
		dots: true,
		arrows: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1
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
