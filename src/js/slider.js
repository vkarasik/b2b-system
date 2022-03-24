document.addEventListener('DOMContentLoaded', () => {
  const sliderHolder = document.querySelector('.slider__holder');
  const sliderItems = document.querySelectorAll('.slider__item');
  const sliderControls = document.querySelector('.slider__controls');

  sliderItems.forEach((item) => {
    const control = document.createElement('div');
    control.classList.add('slider__control');
    sliderControls.appendChild(control);
  });

  sliderControls.firstElementChild.classList.add('slider__control_active');

  sliderControls.addEventListener('click', (e) => {
    if (e.target !== e.currentTarget) {
      const node = e.target.parentNode;
      const index = [...node.children].indexOf(e.target);
      sliderHolder.style.transform = `translate(${index * -100}%)`;
      [...node.children].forEach((i) => {
        i.classList.remove('slider__control_active');
      });
      e.target.classList.add('slider__control_active');
    }
  });

  function autoSlide() {
    setInterval(() => {
      const controls = [...sliderControls.children];
      const activeControl = document.querySelector('.slider__control_active');
      const offsetIndex =
        controls.indexOf(activeControl) + 1 == controls.length
          ? 0
          : controls.indexOf(activeControl) + 1;
      controls.forEach((i) => {
        i.classList.remove('slider__control_active');
      });
      controls[offsetIndex].classList.add('slider__control_active');
      sliderHolder.style.transform = `translate(${offsetIndex * -100}%)`;
    }, 8000);
  }

  autoSlide();
});
