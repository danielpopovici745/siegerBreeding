let images = [...document.querySelectorAll('.imgDiv')];
let slider = document.querySelector('#slider');
let sliderItem = document.querySelector('.sliderItem');
let previousButton = document.querySelector('#previousButton');
let nextButton = document.querySelector('#nextButton');
let translateX = 0;
let imageIndex = 1;

images.forEach((img,index) =>{
    img.style.backgroundImage = `url(./images/img${index+1}.jpeg)`;
});

previousButton.addEventListener('click',() => {
    imageIndex -= 1;
    translateX += sliderItem.offsetWidth;
    console.log(translateX);
    slider.style.transform = `translateX(${translateX}px)`;
});

nextButton.addEventListener('click',() => {
    imageIndex -= 1;
    translateX -= sliderItem.offsetWidth;
    console.log(translateX);
    slider.style.transform = `translateX(${translateX}px)`;
});







