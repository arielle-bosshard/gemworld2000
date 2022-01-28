//MOBILE HERO SLIDESHOW
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3500); // Change image every 4 seconds
}

//PROJECT GALLERY SLIDESHOW 

const buttonRight = document.getElementById('slideRight');

buttonRight.onclick = function () {
  document.getElementById('container').scrollLeft += 20;
};

const buttonLeft = document.getElementById('slideLeft');

buttonLeft.onclick = function () {
  document.getElementById('container').scrollLeft -= 20;
};
