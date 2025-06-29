/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


    /*==================== sticky navbar ====================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');


};


/*==================== scroll reveal ====================*/
ScrollReveal({ 
    reset: true,
    distantce: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-box, .portfolio-box, .contact form', { origin: 'botttom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content h1, .about-content', { origin: 'right' });


/*==================== typed js ====================*/
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Graphic Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


/*==================== resume js ====================*/
// 
// const resumeBtns = document.querySelectorAll('.resume-btn');
// resumeBtns.forEach((btn, idx) => {
//     btn.addEventListener('click', () => {
//         const resumeDetails = document.querySelectorAll('.resume-detail');
//         resumeBtns.forEach(btn => {
//             btn.classList.remove('active');
//         });
//         btn.classList.add('active');
//         resumeDetails.forEach(detail => {
//             detail.classList.remove('active');
//         });
//         resumeDetails[idx].classList.add('active');
//     });
// });

const resumeBtns = document.querySelectorAll('.resume-btn');
  const resumeDetails = document.querySelectorAll('.resume-detail');

  resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      resumeBtns.forEach(b => b.classList.remove('active'));
      resumeDetails.forEach(detail => detail.classList.remove('active'));

      btn.classList.add('active');
      if (resumeDetails[idx]) {
        resumeDetails[idx].classList.add('active');
      }
    });
  });
















/*==================== Login js ====================*/
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});
