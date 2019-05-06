var slideIndex = 1;

function plusSlides(n) {
    showSlideShow(slideIndex += n);
}

function currentSlide(n) {
    showSlideShow(slideIndex = n);
}

function showSlideShow(n){

    var slides = document.getElementsByClassName("slides");
    if(n < 1){
        slideIndex = 1
    }
    if(n < 1){
        slideIndex = slides.length
    }
    slides[slideIndex-1].style.display = "block";
    

}

showSlideShow();

