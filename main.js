//main js site
const body = document.body;

const menu=(()=>{
    let open = document.querySelector('#open'),
        close = document.querySelector('#close'),
        right = document.querySelector('.right'),
        left = document.querySelector('.left');

    open.onclick=()=>{
        right.classList.add('active');
        left.classList.add('active');
    }
    close.onclick=()=>{
        right.classList.remove('active');
        left.classList.remove('active');
    }
})();

let swiper = new Swiper(".series", {
    slidesPerView: 1,
    navigation: {
      nextEl: "#next",
      prevEl: "#back",
    },
    breakpoints: {
    // when window width is >= 640px
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1100 :{
        slidesPerView: 3,
        spaceBetween: 20
    },
    1400:{
        slidesPerView: 4,
        spaceBetween: -20
    }
  }
  });