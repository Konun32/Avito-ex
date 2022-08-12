const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
	iconMenu.addEventListener("click", function(e){
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	})
}

//slick slider
$(document).ready(function(){
	$('.cases__slider').slick({
		arrows: true,
		dots: false,
		centerMode: true,
		slidesToShow: 1,
	});
});