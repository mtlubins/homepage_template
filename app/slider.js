import {renderToTarget} from './renderers.js';

export function createSlider({
        slidingTime = 2000,
        target = '#slider',
        slides = [{
            slideURL: '/assets/images/lake.jpg',
            slideDescription: 'Sunset at the lake'
        }]
    } = {}) {
    let currentSlide = 0;
    let slidesDOM;
    let sliderInterval;
    const content = `
        <ul id="slides">
           ${slides.map(slide => {
            return '<li class="slide"><img src="' + slide.slideURL + '">' +
                '<p class="slide-description">' + slide.slideDescription + '</p></li>';
           }).join('')}
           <a class="buttons button-left">
            <i class="fas fa-chevron-circle-left"></i>
           </a>
           <a class="buttons button-right">
            <i class="fas fa-chevron-circle-right"></i>
           </a>
        </ul>
       
    `;

    function render() {
        renderToTarget(target, content);
        slidesDOM = document.querySelectorAll('#slides .slide');
        document.getElementsByClassName('button-left')[0].addEventListener('click', prevSlide);
        document.getElementsByClassName('button-right')[0].addEventListener('click', nextSlide);
        startInitialSliding();
    }

    function startInitialSliding() {
        if (slidesDOM.length) {
            slidesDOM[0].classList.add('showing');
            startSlideshow();
        } else
            console.error('No slides available');
    }

    function pauseSlideshow() {
        clearInterval(sliderInterval);
    }

    function startSlideshow() {
        sliderInterval = setInterval(nextSlide, slidingTime);
    }

    function goToSlide(n) {
        slidesDOM[currentSlide].classList.remove('showing');
        currentSlide = (n+slidesDOM.length) % slidesDOM.length;
        slidesDOM[currentSlide].classList.add('showing');
    }

    function nextSlide() {
        pauseSlideshow();
        goToSlide(currentSlide-1);
        startSlideshow();
    }

    function prevSlide() {
        pauseSlideshow();
        goToSlide(currentSlide+1);
        startSlideshow();
    }

    return {
        render
    }
}
