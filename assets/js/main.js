/* =====================================
Template Name: 	Mediplus.
Author Name: Naimur Rahman
Website: http://wpthemesgrid.com/
Description: Mediplus - Doctor HTML Template.
Version:	1.1
========================================*/
/*=======================================
[Start Activation Code]
=========================================
* Sticky Header JS
* Search JS
* Mobile Menu JS
* Hero Slider JS
* Testimonial Slider JS
* Portfolio Slider JS
* Clients Slider JS
* Single Portfolio Slider JS
* Accordion JS
* Nice Select JS
* Date Picker JS
* Counter Up JS
* Checkbox JS
* Right Bar JS
* Video Popup JS
* Wow JS
* Scroll Up JS
* Animate Scroll JS
* Stellar JS
* Google Maps JS
* Preloader JS
=========================================
[End Activation Code]
=========================================*/
(function ($) {
	"use strict";
	$(document).on('ready', function () {

		jQuery(window).on('scroll', function () {
			if ($(this).scrollTop() > 200) {
				$('#header .header-inner').addClass("sticky");
			} else {
				$('#header .header-inner').removeClass("sticky");
			}
		});

		/*====================================
			Sticky Header JS
		======================================*/
		jQuery(window).on('scroll', function () {
			if ($(this).scrollTop() > 100) {
				$('.header').addClass("sticky");
			} else {
				$('.header').removeClass("sticky");
			}
		});

		$('.pro-features .get-pro').on("click", function () {
			$('.pro-features').toggleClass('active');
		});

		/*====================================
			Search JS
		======================================*/
		$('.search a').on("click", function () {
			$('.search-top').toggleClass('active');
		});

		/*====================================
			Mobile Menu
		======================================*/
		$('.menu').slicknav({
			prependTo: ".mobile-nav",
			duration: 300,
			closeOnClick: true,
		});

		/*===============================
			Hero Slider JS
		=================================*/
		$(".hero-slider").owlCarousel({
			loop: true,
			autoplay: true,
			smartSpeed: 500,
			autoplayTimeout: 3500,
			singleItem: true,
			autoplayHoverPause: true,
			items: 1,
			nav: true,
			navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
			dots: false,
		});

		/*===============================
			Testimonial Slider JS
		=================================*/
		$('.testimonial-slider').owlCarousel({
			items: 3,
			autoplay: true,
			autoplayTimeout: 4500,
			smartSpeed: 300,
			autoplayHoverPause: true,
			loop: true,
			merge: true,
			nav: false,
			dots: true,
			responsive: {
				1: {
					items: 1,
				},
				300: {
					items: 1,
				},
				480: {
					items: 1,
				},
				768: {
					items: 2,
				},
				1170: {
					items: 3,
				},
			}
		});

		/*===============================
			Portfolio Slider JS
		=================================*/
		$('.portfolio-slider').owlCarousel({
			autoplay: true,
			autoplayTimeout: 4000,
			margin: 15,
			smartSpeed: 300,
			autoplayHoverPause: true,
			loop: true,
			nav: true,
			dots: false,
			responsive: {
				300: {
					items: 1,
				},
				480: {
					items: 2,
				},
				768: {
					items: 2,
				},
				1170: {
					items: 4,
				},
			}
		});

		/*=====================================
			Counter Up JS
		======================================*/
		$('.counter').counterUp({
			delay: 20,
			time: 2000
		});

		/*===============================
			Clients Slider JS
		=================================*/
		$('.clients-slider').owlCarousel({
			items: 5,
			autoplay: true,
			autoplayTimeout: 3500,
			margin: 15,
			smartSpeed: 400,
			autoplayHoverPause: true,
			loop: true,
			nav: false,
			dots: false,
			responsive: {
				300: {
					items: 1,
				},
				480: {
					items: 2,
				},
				768: {
					items: 3,
				},
				1170: {
					items: 5,
				},
			}
		});

		/*====================================
			Single Portfolio Slider JS
		======================================*/
		$('.pf-details-slider').owlCarousel({
			items: 1,
			autoplay: false,
			autoplayTimeout: 5000,
			smartSpeed: 400,
			autoplayHoverPause: true,
			loop: true,
			merge: true,
			nav: true,
			dots: false,
			navText: ['<i class="icofont-rounded-left"></i>', '<i class="icofont-rounded-right"></i>'],
		});

		/*===================
			Accordion JS
		=====================*/
		$('.accordion > li:eq(0) a').addClass('active').next().slideDown();
		$('.accordion a').on('click', function (j) {
			var dropDown = $(this).closest('li').find('p');
			$(this).closest('.accordion').find('p').not(dropDown).slideUp(300);
			if ($(this).hasClass('active')) {
				$(this).removeClass('active');
			} else {
				$(this).closest('.accordion').find('a.active').removeClass('active');
				$(this).addClass('active');
			}
			dropDown.stop(false, true).slideToggle(300);
			j.preventDefault();
		});

		/*====================================
			Nice Select JS
		======================================*/
		$('select').niceSelect();

		/*=====================================
			Date Picker JS
		======================================*/
		$(function () {
			$("#datepicker").datepicker();
		});



		/*===============================
			Checkbox JS
		=================================*/
		$('input[type="checkbox"]').change(function () {
			if ($(this).is(':checked')) {
				$(this).parent("label").addClass("checked");
			} else {
				$(this).parent("label").removeClass("checked");
			}
		});

		/*===============================
			Right Bar JS
		=================================*/
		$('.right-bar .bar').on("click", function () {
			$('.sidebar-menu').addClass('active');
		});
		$('.sidebar-menu .cross').on("click", function () {
			$('.sidebar-menu').removeClass('active');
		});

		/*=====================
			Video Popup JS
		=======================*/
		$('.video-popup').magnificPopup({
			type: 'video',
		});

		/*================
			Wow JS
		==================*/
		var window_width = $(window).width();
		if (window_width > 767) {
			new WOW().init();
		}

		/*===================
			Scroll Up JS
		=====================*/
		$.scrollUp({
			scrollText: '<span><i class="fa fa-angle-up"></i></span>',
			easingType: 'easeInOutExpo',
			scrollSpeed: 900,
			animation: 'fade'
		});

		/*=======================
			Animate Scroll JS
		=========================*/
		$('.scroll').on("click", function (e) {
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top - 100
			}, 1000);
			e.preventDefault();
		});

		/*=======================
			Stellar JS
		=========================*/
		$.stellar({
			horizontalOffset: 0,
			verticalOffset: 0
		});

		/*====================
			Google Maps JS
		======================*/
		var map = new GMaps({
			el: '#map',
			lat: 23.011245,
			lng: 90.884780,
			scrollwheel: false,
		});
		map.addMarker({
			lat: 23.011245,
			lng: 90.884780,
			title: 'Marker with InfoWindow',
			infoWindow: {
				content: '<p>welcome to Medipro</p>'
			}

		});
	});

	/*====================
		Preloader JS
	======================*/
	$(window).on('load', function () {
		$('.preloader').addClass('preloader-deactivate');
	});


})(jQuery);


// Our Team Owl Carousel



var $owl = $('.owl-carousel2');

$owl.children().each(function (index) {
	$(this).attr('data-position', index);
});

$owl.owlCarousel({
	center: true,
	loop: true,
	items: 3,
	autoplay: true,
	autoplayTimeout: 3000,
	responsive: {
		// Responsive settings for different screen sizes
		0: {
			items: 1, // Show 1 item on small screens
		},
		768: {
			items: 2, // Show 2 items on medium screens
		},
		992: {
			items: 3, // Show 3 items on large screens
		}
	}
});

$(document).on('click', '.owl-item>div', function () {
	var $speed = 200;
	$owl.trigger('to.owl.carousel2', [$(this).data('position'), $speed]);
});



// Testimonial Carousel
(function ($) {

	"use strict";


	if ($('.testimonial-carousel').length) {
		$('.testimonial-carousel').owlCarousel({
			animateOut: 'slideOutDown',
			animateIn: 'zoomIn',
			loop: true,
			margin: 0,
			nav: true,
			smartSpeed: 300,
			autoplay: 7000,
			navText: ['<span class="arrow-left"></span>', '<span class="arrow-right"></span>'],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				800: {
					items: 1
				},
				1024: {
					items: 1
				}
			}
		});
	}

	
})(window.jQuery);



// Our Team Owl Carousel



var $owl = $('.owl-carousel4');

$owl.children().each(function (index) {
	$(this).attr('data-position', index);
});

$owl.owlCarousel({
	center: true,
	loop: true,
	items: 3,
	autoplay: true,
	autoplayTimeout: 3000,
	responsive: {
		// Responsive settings for different screen sizes
		0: {
			items: 1, // Show 1 item on small screens
		},
		768: {
			items: 3, // Show 2 items on medium screens
		},
		992: {
			items: 4, // Show 3 items on large screens
		}
	}
});

$(document).on('click', '.owl-item>div', function () {
	var $speed = 200;
	$owl.trigger('to.owl.carousel2', [$(this).data('position'), $speed]);
});

//  Faq Js
document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll(".ac-input");
    checkboxes.forEach(function (checkbox) {
      checkbox.addEventListener("change", function () {
        checkboxes.forEach(function (otherCheckbox) {
          if (otherCheckbox !== checkbox) {
            otherCheckbox.checked = false;
          }
        });
      });
    });
  });

//   User dashboard Graph Js
const xValues = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{ 
      data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478],
      borderColor: "red",
      fill: false
    }, { 
      data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000],
      borderColor: "#20c7ba",
      fill: false
    }, { 
      data: [300,700,2000,5000,6000,4000,2000,1000,200,100],
      borderColor: "black",
      fill: false
    }]
  },
  options: {
    legend: {display: false}
  }
});

