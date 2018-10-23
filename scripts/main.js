//image to show
const imageShow = document.querySelector('.home__image');

//listen here
document
  .querySelector('.home__images')
  .addEventListener('click', function(event) {
    event.preventDefault();

    imageShow.style.backgroundImage = `url(${event.target.src}`;
    console.log(event.target);
  });
