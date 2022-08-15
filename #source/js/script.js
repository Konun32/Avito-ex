const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const links = document.querySelectorAll('.menu__link');
if (iconMenu) {
	iconMenu.addEventListener("click", function(e){
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	})
}

//Прокрутка при клике
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.pageYOffset;

			if (iconMenu.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				iconMenu.classList.remove('_active');
				menuBody.classList.remove('_active');
			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
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

// button

let buttons = document.getElementsByClassName('slid__button');
for(let index = 0; index < buttons.length; index++) {
	let button = buttons[index];
	button.addEventListener("click", function(e){
		if(button.classList.contains('slid__button_before')) {
			if(!button.classList.contains('slid__button_active')) {
				button.classList.add('slid__button_active');
				button.nextElementSibling.classList.remove('slid__button_active');
				let buttonsList = button.parentElement;
				let imgList = buttonsList.nextElementSibling;
				let imgBefore = imgList.firstElementChild;
				if(!imgBefore.classList.contains('slid__button_active')) {
					imgBefore.classList.add('slid__img_active');
					let imgAfter = imgList.lastElementChild;
					imgAfter.classList.remove('slid__img_active');
				}
			}
		} else if(button.classList.contains('slid__button_after')) {
			if(!button.classList.contains('slid__button_active')) {
				button.classList.add('slid__button_active');
				button.previousElementSibling.classList.remove('slid__button_active');
				let buttonsList = button.parentElement;
				let imgList = buttonsList.nextElementSibling;
				let imgAfter = imgList.lastElementChild;
				if(!imgAfter.classList.contains('slid__button_active')) {
					imgAfter.classList.add('slid__img_active');
					let imgBefore = imgList.firstElementChild;
					imgBefore.classList.remove('slid__img_active');
				}
			}
		}	
	})
}


