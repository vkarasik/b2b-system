document.addEventListener('DOMContentLoaded', () => {
  function ticker() {
    const sliderBottom = document.querySelector('.ticker__viewport');
    const item = sliderBottom.firstElementChild;
    const offsetItem = item.offsetWidth;
    const cloneItem = item.cloneNode(true);
    sliderBottom.append(cloneItem);
    item.style.marginLeft = `-${offsetItem}px`;
    item.addEventListener('transitionend', function (e) {
      item.remove();
      ticker();
    });
  }

  ticker();

  const sliderBottomHide = document.querySelector('.ticker__hide');
  sliderBottomHide.addEventListener('click', (e) => {
    e.target.parentNode.style.display = 'none';
  });
});
