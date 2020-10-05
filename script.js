let slide_index = 1;  
displaySlides(slide_index);  

function nextSlide(n) {  
    displaySlides(slide_index += n);  
}  

function currentSlide(n) {  
    displaySlides(slide_index = n);  
}  
//function to displya the slides
function displaySlides(n) {  
    let i;  
    let slides = document.getElementsByClassName("displaySlide");  
    if (n > slides.length) { slide_index = 1 }  
    if (n < 1) { slide_index = slides.length }
    //looping through the slides  
    for (i = 0; i < slides.length; i++) {  
        slides[i].style.display = "none";  
    }  
    slides[slide_index - 1].style.display = "block";  
}  