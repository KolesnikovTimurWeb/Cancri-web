ScrollReveal({
   distance: '100px',
   duration: 1700,
   delay: 100,
   reset: false,
});
ScrollReveal().reveal(".global-text h1", { delay: 300, origin: "left", interval: 100 });
ScrollReveal().reveal(".global-text h2", { delay: 500, origin: "left" });
ScrollReveal().reveal(".global-text ", { delay: 600, origin: "left" });
ScrollReveal().reveal(".about-text h2", { delay: 200, origin: "top" });
ScrollReveal().reveal(".ring-text h2", { delay: 200, origin: "top" });
ScrollReveal().reveal(".partner-title h2", { delay: 200, origin: "top" });
ScrollReveal().reveal(".ring-text h3", { delay: 400, origin: "top" });
ScrollReveal().reveal(".ring-text p ", { delay: 500, origin: "left", interval: 200 });
ScrollReveal().reveal(".card-item ", { delay: 500, origin: "left", interval: 200 });
ScrollReveal().reveal(".partner-item ", { delay: 500, origin: "left", interval: 200 });

ScrollReveal().reveal(".about-text p ", { delay: 400, origin: "left", interval: 100 });
ScrollReveal().reveal(".about-item ", { delay: 400, origin: "left", interval: 100 });
ScrollReveal().reveal(".steps-block ", { delay: 400, origin: "left", interval: 100 });
ScrollReveal().reveal(".about-text h3 ", { delay: 800, origin: "bottom" });
ScrollReveal().reveal(".steps-down  ", { delay: 800, origin: "bottom" });
ScrollReveal().reveal(".steps-number p  ", { delay: 1200, origin: "bottom" });
ScrollReveal().reveal(".steps-title ", { delay: 200, origin: "left" });
ScrollReveal().reveal(".video-text h2", { delay: 200, origin: "left" });
ScrollReveal().reveal(".balance-title h2", { delay: 200, origin: "left" });
ScrollReveal().reveal(".balance-title p", { delay: 300, origin: "left", interval: 200 });
ScrollReveal().reveal(".balance-container", { delay: 500, origin: "left" });
ScrollReveal().reveal(".video-text h3", { delay: 400, origin: "left" });
ScrollReveal().reveal(".video-text", { delay: 500, origin: "left" });
ScrollReveal().reveal(".video-img", { delay: 500, origin: "bottom" });








const nav = document.querySelector('header')
function scrollHeader() {
   // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
   if (this.scrollY >= 80) nav.classList.add('scroll-header');
   else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
const burgerBtn = document.querySelector('.header-burger')
const burgerMenu = document.querySelector('.header-nav')

burgerBtn.addEventListener('click', function () {
   burgerBtn.classList.toggle('active')
   burgerMenu.classList.toggle('active')
})


let cardVideo1 = document.querySelector('.card-video-1')
let cardVideo2 = document.querySelector('.card-video-2')
let cardVideo3 = document.querySelector('.card-video-3')
let cardClose = document.querySelectorAll('.card-close')
let cardItem1 = document.querySelector('.card-item-1')
let cardItem2 = document.querySelector('.card-item-2')
let cardItem3 = document.querySelector('.card-item-3')

let map1 = document.querySelector('.map-1')
let map2 = document.querySelector('.map-2')
let map3 = document.querySelector('.map-3')
let map4 = document.querySelector('.map-4')
let map5 = document.querySelector('.map-5')
let map6 = document.querySelector('.map-6')
let map7 = document.querySelector('.map-7')
let map8 = document.querySelector('.map-8')
let mapVideo1 = document.querySelector('.map-video-1')
let mapVideo2 = document.querySelector('.map-video-2')
let mapVideo3 = document.querySelector('.map-video-3')
let mapVideo4 = document.querySelector('.map-video-4')
let mapVideo5 = document.querySelector('.map-video-5')
let mapVideo6 = document.querySelector('.map-video-6')
let mapVideo7 = document.querySelector('.map-video-7')
let mapVideo8 = document.querySelector('.map-video-8')

map1.addEventListener('click', function () {
   mapVideo1.classList.add('active')
})
map2.addEventListener('click', function () {
   mapVideo2.classList.add('active')
})
map3.addEventListener('click', function () {
   mapVideo3.classList.add('active')
})
map4.addEventListener('click', function () {
   mapVideo4.classList.add('active')
})
map5.addEventListener('click', function () {
   mapVideo5.classList.add('active')
})
map6.addEventListener('click', function () {
   mapVideo6.classList.add('active')
})
map7.addEventListener('click', function () {
   mapVideo7.classList.add('active')
})
map8.addEventListener('click', function () {
   mapVideo8.classList.add('active')
})
cardClose.forEach(el => {
   el.addEventListener('click', function () {
      cardVideo1.classList.remove('active')
      cardVideo2.classList.remove('active')
      cardVideo3.classList.remove('active')
      mapVideo1.classList.remove('active')
      mapVideo2.classList.remove('active')
      mapVideo3.classList.remove('active')
      mapVideo4.classList.remove('active')
      mapVideo5.classList.remove('active')
      mapVideo6.classList.remove('active')
      mapVideo7.classList.remove('active')
      mapVideo8.classList.remove('active')

      var iframes = document.getElementsByTagName("iframe");
      if (iframes != null) {
         for (var i = 0; i < iframes.length; i++) {
            iframes[i].src = iframes[i].src; //causes a reload so it stops playing, music, video, etc.
         }
      }


   })
})
cardItem1.addEventListener('click', function () {
   cardVideo1.classList.add('active')
})
cardItem2.addEventListener('click', function () {
   cardVideo2.classList.add('active')
})
cardItem3.addEventListener('click', function () {
   cardVideo3.classList.add('active')
})