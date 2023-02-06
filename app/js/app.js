$(".header-links").css('display', 'none')
var swiper1 = new Swiper(".mySwiper", {
	navigation: {
		nextEl: ".main-reviews .swiper-button-next",
		prevEl: ".main-reviews .swiper-button-prev",
	},
});
var swiper2 = new Swiper(".swiper-place", {
	navigation: {
		nextEl: ".main-place .swiper-button-next",
		prevEl: ".main-place .swiper-button-prev",
	},
	slidesPerView: "auto",
	spaceBetween: 10,
	centeredSlides: true,
	loop: true,
	breakpoints:{
		360:{
			spaceBetween: 10,
		},
		993:{
			spaceBetween: 30,	
		}
	}
});

ymaps.ready(init);

function init() {
	var myMap = new ymaps.Map("map", {
		center: [55.76, 37.64],
		zoom: 9
	}, {
		searchControlProvider: 'yandex#search'
	}),

		// Создаем геообъект с типом геометрии "Точка".
		myGeoObject = new ymaps.GeoObject({
			// Описание геометрии.
			geometry: {
				type: "Point",
				coordinates: [55.8, 37.8]
			},

		});


	myMap.geoObjects.add(myGeoObject);
}
$(".header__menu").on('click', function () {
	if ($(".header-links").css('display') == 'none') {
		$(".header-links").slideDown()
	} else {
		$(".header-links").slideUp()
	}
})
$('.header-links .header-links__item').on('click', function () {
	$(".header-links").slideUp()
})
$('.modal .main-feedback-form__button').on('click', function () {
	const data = {
		name : $('.modal #name').val(),
		email : $('.modal #email').val(),
		message : $('.modal #request').val(),

	}
	$.ajax({
	url: '/index.php',
	method: 'post',
	dataType: 'html',
	data: data,
	success: function(data){
		alert(data);
	}
});
})
$('.main-feedback_flex .main-feedback-form__button').on('click', function () {
	const data = {
		name : $('.main-feedback_flex #name').val(),
		email : $('.main-feedback_flex #email').val(),
		message : $('.main-feedback_flex #request').val(),

	}
	$.ajax({
	url: '/index.php',
	method: 'post',
	dataType: 'html',
	data: data,
	success: function(data){
		alert(data);
	}
});
})
