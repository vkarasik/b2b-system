document.addEventListener('DOMContentLoaded', () => {
  const dropdownItems = document.querySelectorAll('.dropdown');
  dropdownItems.forEach((item) => {
    item.addEventListener('mouseenter', (e) => {
      item.querySelector('.dropdown-sub').classList.add('dropdown-sub_show');
    });

    item.addEventListener('mouseleave', (e) => {
      item.querySelector('.dropdown-sub').classList.remove('dropdown-sub_show');
    });
  });
});
