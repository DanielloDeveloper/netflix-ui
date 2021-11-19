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