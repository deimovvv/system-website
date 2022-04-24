document.querySelector('.menu-btn').addEventListener('click', () => {
   document.querySelector('.nav-menu').classList.toggle('show')
})


ScrollReveal().reveal('.imagen-principal');
ScrollReveal().reveal('.news-cards', {delay: 400});
ScrollReveal().reveal('.cards-banner', {delay: 400});
ScrollReveal().reveal('.cards-banne-2', {delay: 400});