$(document).ready(function () {
	"use strict";

	/*==================================
* Author        : "ThemeSine"
* Template Name : Listrace directory HTML Template
* Version       : 1.0
==================================== */




	/*=========== TABLE OF CONTENTS ===========
	1. Scroll To Top 
	3. welcome animation support
	======================================*/

	// 1. Scroll To Top 
	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 600) {
			$('.return-to-top').fadeIn();
		} else {
			$('.return-to-top').fadeOut();
		}
	});
	$('.return-to-top').on('click', function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1500);
		return false;
	});

	// 3. welcome animation support

	$(window).load(function () {
		$(".welcome-hero-txt h2,.welcome-hero-txt p").removeClass("animated fadeInUp").css({ 'opacity': '0' });
		$(".welcome-hero-serch-box").removeClass("animated fadeInDown").css({ 'opacity': '0' });
	});

	$(window).load(function () {
		$(".welcome-hero-txt h2,.welcome-hero-txt p").addClass("animated fadeInUp").css({ 'opacity': '0' });
		$(".welcome-hero-serch-box").addClass("animated fadeInDown").css({ 'opacity': '0' });
	});



});