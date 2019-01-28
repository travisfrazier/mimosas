//image to show
const imageShow = document.querySelector('.home__image');
const mobileMenu = document.querySelector('.mobile__menu');
const mobileNav = document.querySelector('.mobile__nav');
const appButton = document.querySelector('.appointment');

//App Button
window.addEventListener('scroll', function(event) {
	event.preventDefault();
	appButton.style.display = 'block';
});

//listen here
document
	.querySelector('.home__images')
	.addEventListener('mouseover', function(event) {
		event.preventDefault();

		imageShow.style.backgroundImage = `url(${event.target.src}`;
		console.log(event.target);
	});

// Mobile Menu Animation Function

// mobileMenu.addEventListener('click', () => {
// 	mobileNav.classList.toggle('show');
// });

function openNav() {
	mobileNav.classList.toggle('show');
}

function toggleClose(x) {
	x.classList.toggle('change');
}
