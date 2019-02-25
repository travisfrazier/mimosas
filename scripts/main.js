//image to show
const imageShow = document.querySelector('.home__image');
const mobileMenu = document.querySelector('.mobile__menu');
const mobileNav = document.querySelector('.mobile__nav');
const appButton = document.querySelector('.appointment');

//Vue JS Code
const nav = new Vue({
	el: '#nav',
	data: {
		showNav: false,
		isChanged: false
	},
	methods: {
		openNav: function() {
			this.showNav = !this.showNav;
			this.isChanged = !this.isChanged;
		}
	}
});

const image = new Vue({
	el: '#imageToggle',
	data: {
		src: '../images/salon-three.png'
	},
	methods: {
		toggle: function() {
			this.src = event.target.src;
		}
	}
});
