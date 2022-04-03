export default class Swiper {
  constructor(container, btnLeft, btnRight) {
    this.container = container;
    this.stack = container.firstElementChild;
    this.btnLeft = btnLeft;
    this.btnRight = btnRight;
    this.setSizes();



    window.addEventListener('resize', () => this.setSizes());

    this.stack.addEventListener('transitionend', () => this.unlock());

    this.container.addEventListener('touchstart', event => this.touchStartPos = this.touchCurrentPos = event.changedTouches[0].clientX);

    this.container.addEventListener('touchmove', event => {
      if (this.active) {
        const offset = parseInt(this.stack.style.marginLeft) + (event.changedTouches[0].clientX - this.touchCurrentPos);

        if (offset >= 0) this.stack.style.marginLeft = '0px';
        else if (offset <= this.maxOffset) this.stack.style.marginLeft = this.maxOffset + 'px';

        else {
          this.stack.style.marginLeft = offset + 'px';
          this.touchCurrentPos = event.changedTouches[0].clientX;

          if (this.touchStartPos - this.touchCurrentPos > this.limit) this.moveTo(this.currentSlide + 1);
          else if (this.touchStartPos - this.touchCurrentPos < -this.limit) this.moveTo(this.currentSlide - 1);
        }
      }
    })

    this.container.addEventListener('touchend', () => {
      this.touchStartPos = this.touchCurrentPos = undefined;

      if (this.active) {
        this.moveTo(this.currentSlide, '0.1s');
        setTimeout(() => this.unlock(), 100);
      }
    })

    this.btnRight.addEventListener('click', () => this.moveTo(this.currentSlide + 1));
    this.btnLeft.addEventListener('click', () => this.moveTo(this.currentSlide - 1));
  }



  moveTo(slide, time = '0.5s') {
    this.active = false;
    this.stack.style.transition = time;

    this.currentSlide = slide;
    this.stack.style.marginLeft = this.currentSlide * this.slideWidth + 'px';
    this.toggleMarker();
  }

  unlock() {
    this.stack.style.transition = '';
    this.active = true;
  }

  toggleMarker() {
    if (this.currentSlide === 0) {
      this.btnLeft.disabled = true;
      this.btnRight.disabled = false;
    }
    else if (this.currentSlide === this.slideCount) {
      this.btnLeft.disabled = false;
      this.btnRight.disabled = true;
    }
    else this.btnLeft.disabled = this.btnRight.disabled = false;
  }



  setSizes() {
    if (window.matchMedia("(max-width: 640px)").matches) {
      this.slideWidth = this.stack.offsetWidth * -0.1;
      this.slideCount = 9;
    }
    else if (window.matchMedia("(max-width: 960px)").matches) {
      this.slideWidth = this.stack.offsetWidth * -0.0525;
      this.slideCount = 8;
    }
    else {
      this.slideWidth = this.stack.offsetWidth * -0.034;
      this.slideCount = 7;
    }

    this.stack.style.marginLeft = '0px';
    this.maxOffset = this.slideWidth * this.slideCount;
    this.touchStartPos = this.touchCurrentPos = undefined;
    this.limit = Math.round(this.container.offsetWidth * 0.125);

    this.currentSlide = 0;
    this.active = true;
    this.toggleMarker();
  }
}
