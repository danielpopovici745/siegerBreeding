let images = [...document.querySelectorAll('.imgDiv')];
let slider = document.querySelector('#slider');


images.forEach((img,index) =>{
    img.style.backgroundImage = `url(./images/img${index+1}.jpeg)`;
});



