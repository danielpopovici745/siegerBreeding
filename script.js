const imageWrapper = document.querySelector('.imageWrapper')
const imageItems = document.querySelectorAll('.imageWrapper > *')
const imageLength = imageItems.length
const perView = 3
let totalScroll = 0
const delay = 5000

imageWrapper.style.setProperty('--per-view', perView)
for(let i = 0; i < perView; i++) {
  imageWrapper.insertAdjacentHTML('beforeend', imageItems[i].outerHTML)
}

let autoScroll = setInterval(scrolling, delay)

function scrolling() {
  totalScroll++
  if(totalScroll == imageLength + 1) {
    clearInterval(autoScroll)
    totalScroll = 1
    imageWrapper.style.transition = '0s'
    imageWrapper.style.left = '0'
    autoScroll = setInterval(scrolling, delay)
  }
  const widthEl = document.querySelector('.imageWrapper > :first-child').offsetWidth + 24
  imageWrapper.style.left = `-${totalScroll * widthEl}px`
  imageWrapper.style.transition = '1s'
}

// Hamburger Menu

let menuToggle = document.querySelector('#menuToggle');
let menu = document.querySelector('#menu')
let menuPressed = false;
menuToggle.addEventListener('click', (e) =>{
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
});

let header = document.querySelector('#header');
let headerHeight;

window.addEventListener('resize',()=>{
    if(window.innerWidth >= 1025){
        menu.classList.remove('active');
    }
    headerHeight = header.offsetHeight;
});

//sticky navbar
let headerContainer = document.querySelector('#headerContainer');
let sticky = headerContainer.offsetTop;
let stickyMenu = document.querySelector('.stickyMenu');

window.addEventListener('scroll',()=>{
    
    if (window.pageYOffset > sticky) {
    headerContainer.classList.add("sticky");
    menu.classList.add("stickyMenu");
    menu.style.setProperty('--headerHeight',`${header.offsetHeight}px`);
    } else {
    headerContainer.classList.remove("sticky");
    menu.classList.remove("stickyMenu");
    // menu.classList.remove("active")
    }
});



