let arrowLanguage=document.getElementById('language_checkbox');
let drop_arrow=document.getElementById('drop_arrow');

function arrowChange(){
    if(arrowLanguage.checked ===true){
        drop_arrow.innerHTML='⯅';
    }
    else{
        drop_arrow.innerHTML='⯆';
    }
}

let slides = document.getElementsByClassName('item');
let dots = document.getElementsByClassName('slider-dots_item');
let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
 if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[slideIndex - 1].style.display = 'flex';
    dots[slideIndex - 1].className += ' active';
}