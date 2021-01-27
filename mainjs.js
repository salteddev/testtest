new Swiper('.swiper-container',{
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

function openBurger(){
    mobileNav.style.left = '0px';
    overlay.style.display = 'block'
    closeBurg.style.display = 'block'
    freezePage.style.overflow = 'hidden'
    freezePage.style.maxHeight = '100vh'
}

function closeBurger(){
    mobileNav.style.left = '-350px'
    overlay.style.display = 'none'
    closeBurg.style.display = 'none'
    freezePage.style.overflow = 'auto'
}