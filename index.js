const hamburger_image = document.querySelector('.hamburger-image');
// const hamburger_close_image = document.querySelector('.close-image');
const body = document.querySelector('body');
const nav_mobile = document.querySelector('.header-mobile-menu');
const header = document.querySelector('.header');


function openHamburger() {
        // document.getElementById('hamburger').style.display = 'non
        hamburger_image.classList.add('hidden')
        document.getElementById("close-hamburger").style.display = 'block';
        nav_mobile.classList.remove('has-fade');
        body.classList.add('no-scroll');
}

function closeHamburger() {
    // document.getElementById('hamburger').style.display = 'block';
    hamburger_image.classList.remove('hidden')
    document.getElementById("close-hamburger").style.display = 'none';
    nav_mobile.classList.add('has-fade');
    body.classList.remove('no-scroll');
}