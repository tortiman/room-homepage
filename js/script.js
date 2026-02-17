document.addEventListener('DOMContentLoaded', function() {
    const btnHamburguer=document.querySelector('.btnHamburger');
    const menuMobile=document.querySelector('.mobile-close');
    const mobileHamburguer=document.querySelector('.mobile-hamburger');

    btnHamburguer.addEventListener('click',()=>{
        console.log('click');
        menuMobile.style.visibility='visible';
        mobileHamburguer.style.visibility='hidden';
    

    });

    menuMobile.addEventListener('click',()=>{
        menuMobile.style.visibility='hidden';
        mobileHamburguer.style.visibility='visible';
    });

});