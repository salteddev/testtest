new Swiper('.swiper-container', {
    loop: true,

    pagination: {
        el: '.swiper-pagination',

        clickable: true,
    },

    autoplay: {
        delay: 3000,

        disableOnInteraction: false
    },

    speed: 500
});

let freeze = document.getElementById('freezePage');

function openBurger() {
    mobileNav.style.left = '0px';
    overlay.style.display = 'block'
    closeBurg.style.display = 'block'
    freeze.style.overflow = 'hidden'
}

function closeBurger() {
    mobileNav.style.left = '-350px'
    overlay.style.display = 'none'
    closeBurg.style.display = 'none'
    freeze.style.overflow = 'auto'
}

function pressBtn() {
    mobileNav.style.left = '-350px'
    overlay.style.display = 'none'
    closeBurg.style.display = 'none'
    freeze.style.overflow = 'auto'
}

let mobileFooter1 = document.getElementById('first_footer_open');
let mobileFooter2 = document.getElementById('second_footer_open');
let mobileFooter3 = document.getElementById('third_footer_open');
let mobileFooter4 = document.getElementById('fourth_footer_open');

let footerItem1 = document.getElementById('first_footer_item');
let footerItem2 = document.getElementById('second_footer_item');
let footerItem3 = document.getElementById('third_footer_item');
let footerItem4 = document.getElementById('fourth_footer_item');

function firstFooterOpen() {
    mobileFooter1.classList.toggle('open')
    footerItem1.classList.toggle('open')
    if (mobileFooter1.className === ('mobile_footer open')) {
        mobileFooter1.style.display = 'block'
    }
    else {
        mobileFooter1.style.display = 'none'
    }
}
function secondFooterOpen() {
    mobileFooter2.classList.toggle('open')
    footerItem2.classList.toggle('open')
    if (mobileFooter2.className === ('mobile_footer open')) {
        mobileFooter2.style.display = 'block'
    }
    else {
        mobileFooter2.style.display = 'none'
    }
}
function thirdFooterOpen() {
    mobileFooter3.classList.toggle('open')
    footerItem3.classList.toggle('open')
    if (mobileFooter3.className === ('mobile_footer open')) {
        mobileFooter3.style.display = 'block'
    }
    else {
        mobileFooter3.style.display = 'none'
    }
}
function fourthFooterOpen() {
    mobileFooter4.classList.toggle('open')
    footerItem4.classList.toggle('open')
    if (mobileFooter4.className === ('mobile_footer open')) {
        mobileFooter4.style.display = 'block'
    }
    else {
        mobileFooter4.style.display = 'none'
    }
}