let prevScrollPos = window.scrollY;
let clicked = false;

window.onscroll = function () {
  const currentScrollPos = window.scrollY;
  const header = document.querySelector('.header');

  if (prevScrollPos > currentScrollPos) {
    // Scrolling up, show the header
    if (!clicked) {
      header.classList.remove('hide');
    }
  } else {
    // Scrolling down, hide the header
    header.classList.add('hide');
  }
  prevScrollPos = currentScrollPos;
};

const headerButtons = document.querySelectorAll('.top');

headerButtons.forEach(button => {
  button.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = button.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      window.scrollIntoView({
        top: targetSection.offsetTop,
        behavior: 'smooth',
      });
      clicked = true;
      setTimeout(() => {
        clicked = false;
      }, 200);
    }
  });
});