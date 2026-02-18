document.addEventListener('DOMContentLoaded', function() {
    const btnHamburguer=document.querySelector('.btnHamburger');
    const menuMobile=document.querySelector('.mobile-close');
    const btnClose=document.querySelector('.btnClose');
    const mobileHamburguer=document.querySelector('.mobile-hamburger');
    const sliderLeft=document.querySelector('.sliderLeft');
    const sliderRight=document.querySelector('.sliderRight');
    const heroImg=document.querySelector('.heroImg');
    const heroText=document.querySelector('.hero-text');
    const heroTitle=document.querySelector('.hero-title'); 
    const textShop=document.querySelector('.textShop');
    const btnShop=document.querySelector('.btnShop');

    const slides = [
        {
            title: "Discover innovative ways to decorate",
            image: "desktop-image-hero-1.jpg",
            description:"We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
        },
        {
            title: "We are available all across the globe",
            image: "desktop-image-hero-2.jpg",
            description:"With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
        },
        {
            title: "Manufactured with the best materials",
            image: "desktop-image-hero-3.jpg",
            description:"Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."

        }   
        ];

        let currentSlide = 0; // Índice del slide actual

        
        
        // seccion hero
        
    heroTitle.textContent = slides[currentSlide].title;
    heroText.textContent = slides[currentSlide].description;
        
    btnHamburguer.addEventListener('click',()=>{
        console.log('click');
        menuMobile.style.visibility='visible';
        mobileHamburguer.style.visibility='hidden';

        

    });

    btnClose.addEventListener('click',()=>{
        menuMobile.style.visibility='hidden';
        mobileHamburguer.style.visibility='visible';
    });

        // helper para reiniciar y limpiar la animación de las imagenes de hero
    function triggerAnimation(el, animationName) {
            if (!el) return;
            el.style.animation = 'none';
            // forzar reflow para reiniciar la animación
            void el.offsetWidth;
            el.style.animation = `${animationName} 1s ease-in-out`;
            function clear() {
                el.style.animation = '';
                el.removeEventListener('animationend', clear);
            }
            el.addEventListener('animationend', clear);
    }




    sliderRight.addEventListener('click', () => {
        // Aumenta el índice, y si llega al final, vuelve al inicio
        currentSlide = (currentSlide + 1) % slides.length;
        
        // Actualiza el contenido
        heroTitle.textContent = slides[currentSlide].title;
        heroImg.style.backgroundImage = `url('../images/${slides[currentSlide].image}')`;
        heroText.textContent = slides[currentSlide].description;
        triggerAnimation(heroImg, 'slide-in');
        triggerAnimation(heroTitle,'opacidad');    
    });

    sliderLeft.addEventListener('click', () => {
        
            currentSlide = (currentSlide -1) % slides.length;
            if (currentSlide<0){
                currentSlide=2;
            }
                 // Actualiza el contenido
                 heroTitle.textContent = slides[currentSlide].title;
                 heroImg.style.backgroundImage = `url('../images/${slides[currentSlide].image}')`;
                 heroText.textContent = slides[currentSlide].description;
                 triggerAnimation(heroImg, 'slide-out');
                 triggerAnimation(heroTitle,'opacidad');    
     });

     textShop.addEventListener('click',()=>
    {
        triggerAnimation(btnShop,'muelle');
    });

});