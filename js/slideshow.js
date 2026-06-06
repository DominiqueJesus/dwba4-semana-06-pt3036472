let indiceSlide = 1;
mostrarSlides(indiceSlide);
automatizarSlides();


function passarSlide(n) {
    mostrarSlides(indiceSlide += n);
}

function slideAtual (n) {
    mostrarSlides(indiceSlide = n);
}

function mostrarSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    let circulos = document.getElementsByClassName("circulo");

    if(n > slides.length) {
        indiceSlide = 1;
    }
    
    if(n < 1) {
        indiceSlide = slides.length;
    }

    for(i=0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    for(i=0; i < circulos.length; i++) {
        circulos[i].className = circulos[i].className.replace(" active", "");
    }

    slides[indiceSlide-1].style.display = "block";
    circulos[indiceSlide-1].className += " active";
}

function automatizarSlides() {
    setTimeout(function(){
        passarSlide(1); 
        automatizarSlides()
    }, 5000);
}