class Slider {
    constructor(options) {
        this.sliderWrap = document.querySelector('.slider-wrap');
        this.slider = document.querySelector('.slider');
        this.sliderContainer = document.querySelector('.slider__container');
        this.slide = document.querySelectorAll('.slider__slide');
        this.activeSlide = 0;
        this.btn = document.querySelectorAll('.btn');

        this.linkClick();
        this.createArrows();
    }

    linkClick() {
        for (let i = 0; i < this.btn.length; i++) {
            this.btn[i].addEventListener('click', e => {
                e.preventDefault();
            });
        }
    }

    createArrows() {
        const arrowPrev = document.createElement('div');
        arrowPrev.classList.add('arrow');
        arrowPrev.classList.add('arrow_prev');

        const arrowNext = document.createElement('div');
        arrowNext.classList.add('arrow');
        arrowNext.classList.add('arrow_next');

        this.sliderWrap.appendChild(arrowPrev);
        this.sliderWrap.appendChild(arrowNext);

        this.sliderWrap.addEventListener('click', e => {
            const target = e.target;
            if (target.classList.contains('arrow')) {
                if (target.classList.contains('arrow_prev')) {
                    this.changeActiveSlide(-1);
                } else {

                    this.changeActiveSlide(1);
                }
            }
        });
    }

    changeActiveSlide(number) {
        this.activeSlide += number;

        if (this.activeSlide < 0) {
            this.activeSlide = this.slide.length - 1;
        }

        if (this.activeSlide > this.slide.length - 1) {
            this.activeSlide = 0;
        }

        this.moveSlide();
    }

    moveSlide() {
        const x = this.slide[this.activeSlide].getBoundingClientRect().left -
            this.sliderContainer.getBoundingClientRect().left;
        this.sliderContainer.style.left = x * -1 + 'px';
    }
}

const slider = new Slider({});

// class mainSlider {
//     constructor(options) {
//         this.popularGoods = document.querySelector('.popular-goods');
//     }
// }

// const mainSlider = new mainSlider({});