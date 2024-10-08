// ----------------------Togle icon navbar--------------------
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar-menu');
menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};
// ----------------------Scroll Selections Active Links--------------------
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove('active');
        document
          .querySelector('header nav a[href*=' + id + ']')
          .classList.add('active');
      });
    }
  });

  // ----------------------remove toggle icon and navbar when click navbar link scroll --------------------
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

// ----------------------Scroll reveal --------------------

ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .portfolio-box, .contact form', {
  origin: 'bottom',
});
ScrollReveal().reveal('.home-content h1', {
  origin: 'left',
});
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// ----------------------typed JS--------------------

const typed = new Typed('.multiple-text', {
  strings: ['Front-end Web Developer', 'UI / UX Designer'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// ---------------------- image gallery for UI / UX Designs--------------------

$(function () {
  var $grid = $('#tp-grid'),
    $name = $('#name'),
    $close = $('#close'),
    $loader = $('').insertBefore($grid),
    stapel = $grid.stapel({
      randomAngle: true,
      delay: 50,
      gutter: 70,
      pileAngles: 5,
      onLoad: function () {
        $loader.remove();
      },
      onBeforeOpen: function (pileName) {
        $name.html(pileName);
      },
      onAfterOpen: function (pileName) {
        $close.show();
      },
    });
  $close.on('click', function () {
    $close.hide();
    $name.empty();
    stapel.closePile();
  });
});
